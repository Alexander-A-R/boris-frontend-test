import React from 'react';
import {IClient} from '../models'
import {useState} from 'react'
import {TabPanel} from './TabPanel'
import {Table} from './Table'
import json from '../data/data.json'
import {useSearchParams} from 'react-router-dom'

interface NavigatorProps {
	className?: string		//	необязательный параметр для возможности изменить стиль компонента
}

//	Общий компонент с вкладками и таблицами

export function Navigator({ className = "navigator w-96 mx-auto" }: NavigatorProps) {

	const data: IClient[] = json.data 		// импортировал данные из JSON файла
	const [tab, setTab] = useState('Income')		// по умолчанию открыта первая вкладка

	const [searchParams, setSearchParams] = useSearchParams();
	const tabQuery: string | null = searchParams.get('tab')
	const activeTab = tabQuery ?? '0'


//	Функция фильтрации данных
	function filterData(data: IClient[], tab: string) {
		return data.filter(client => client.type === tab.toLowerCase())
	}

	return (
		<div className={className}>
			<div className="pt-px border border-black rounded-md">
				<TabPanel activeTab={activeTab} setTab={setTab} setSearchParams={setSearchParams}/>
				<Table data={filterData(data, tab)} />
			</div>
		</div>
	)
}