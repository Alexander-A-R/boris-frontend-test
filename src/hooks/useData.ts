import {useState} from 'react';
import {ICustomer} from '../models'
import json from '../data/data.json'

type filter = 'income' | 'outcome' | 'loan' | 'investment'

export function useData() {

	const [data, setData] = useState<ICustomer[]>([])
	const [error, setError] = useState(false)


	const filterTypes: {[N: string]: filter} = {	//	key-type mapping object for data filtering
		0: 'income',
		1: 'outcome',
		2: 'loan',
		3: 'investment'
	}

	function setFilteredData(tabKey: string) {
		const keys = Object.keys(filterTypes)
		if (!keys.includes(tabKey)) setError(true)		// request validation
		else {
			const data = filterData(json.data, filterTypes[tabKey])		// if validation is ok - set data
			setData(data)
		}
	}

// filters the data and returns it
	function filterData(data: ICustomer[], type: string) {
		return data.filter(customer => customer.type === type)
	}

	return {setFilteredData, data, error}
}