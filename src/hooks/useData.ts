import React, {useState, useEffect} from 'react';
import json from '../data/data.json'
import {ICustomer} from '../models'

export function useData() {
	const [data, setData] = useState<ICustomer[]>([])
	useEffect(() => {
		setData(json.data)		// можно сделать запрос на сервер и делать его при каждой смене вкладки или один раз как сейчас
	}, []);
	return {data}
}