import React from 'react';
import {IClient} from '../models'
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
	const types: string[] = ['Income', 'Outcome', 'Loan', 'Investment']	// массив типов вкладок и фильтрации

	const [searchParams, setSearchParams] = useSearchParams();
	const tabQuery: string | null = searchParams.get('tab')		// номер запрашиваемой вкладки
	const activeTab: string = tabQuery ?? '0'					// номер вкладки коьорую нужно активировать


//	Функция фильтрации данных
	function filterData(data: IClient[], type: string) {
		return data.filter(client => client.type === type)
	}

	return (
		<div className={className}>
			<div className="pt-px border border-black rounded-md">
				<TabPanel activeTab={activeTab} types={types} setSearchParams={setSearchParams}/>
				<Table data={filterData(data, types[+activeTab].toLowerCase())} />
			</div>
		</div>
	)
}