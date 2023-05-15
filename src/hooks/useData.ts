import {useState, useEffect} from 'react';
import {ICustomer} from '../models'
import json from '../data/data.json'

export function useData() {
	const [data, setData] = useState<ICustomer[]>([])
	useEffect(() => {
		setData(json.data)		// можно сделать запрос на сервер и делать его при каждой смене вкладки или один раз как сейчас
	}, []);
	return {data}
}