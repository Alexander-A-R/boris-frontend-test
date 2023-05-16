import {useState, useEffect} from 'react';
import {ICustomer} from '../models'
import json from '../data/data.json'

export function useData(tab: string) {

	const [data, setData] = useState<ICustomer[]>([])		// hook for filtered data ready for output
	const [error, setError] = useState(false)

	const types: {[index: string]: string} = {		// object for filtering type selection
		'0': 'income',
		'1': 'outcome',
		'2': 'loan',
		'3': 'investment'
	}

	useEffect(() => {
		// there may be a request to the server and that it immediately gives the filtered array
		try {
			const filteredData = filterData(json.data, types[tab])
			if (!filteredData) {
				const error = new Error('incorrect request')
				error.name = 'data error'
				throw error
			}
			setData(filteredData)
		} catch(err: any) {
			if (err.name === 'data error') setError(true)
				else throw err
		}
	}, [tab]);


// filters the data and returns it, or if the type is not specified, then undefined
	function filterData(data: ICustomer[], type: string | undefined) {
		if (!type) return undefined
		return data.filter(customer => customer.type === type)
	}

	return {data, error}
}