import {useState, useEffect} from 'react';
import {ICustomer} from '../models'
import json from '../data/data.json'

export function useData(tab: string) {

	const [data, setData] = useState<ICustomer[]>([])
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
			if (!types[tab]) {
				const error = new Error('incorrect request')
				error.name = 'data error'
				throw error
			}
			const filteredData = filterData(json.data, types[tab])
			if (filteredData) setData(filteredData)
		} catch(err: any) {
			if (err.name === 'data error') setError(true)
				else throw err
		}
	}, [types[tab]]);


// filters the data and returns it, or if the type is not specified, then undefined
	function filterData(data: ICustomer[], type: string) {
		return data.filter(customer => customer.type === type)
	}

	return {data, error}
}