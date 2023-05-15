import React, {useState, useEffect} from 'react';
import {ICustomer} from '../models'
import {TabPanel} from './TabPanel'
import {Table} from './Table'
import json from '../data/data.json'
import {useTabQuery} from '../hooks/useTabQuery'
import {useData} from '../hooks/useData'
import {useTabs} from '../hooks/useTabs'



//	Общий компонент с вкладками и таблицами

export function Navigator() {
	
	const {tabs, setActiveTab, getFilterType} = useTabs()
	const {queryTabId, setTabQuery} = useTabQuery(setActiveTab)	// кастомный хук
	const {data} = useData()
	useEffect(() => setActiveTab(queryTabId), [queryTabId])
	function changeTabPanelHandler(id: string) {
		setTabQuery(id)
	}

//	Функция фильтрации данных
	function filterData(data: ICustomer[], type: string | undefined) {
		return data.filter(customer => customer.type === type)
	}
	console.log('render')
	return (
		<div className="navigator w-96 mx-auto">
			<div className="pt-px border border-black rounded-md">
				<TabPanel tabs={tabs} onChange={changeTabPanelHandler}/>
				<Table data={filterData(data, getFilterType(queryTabId))} />
			</div>
		</div>
	)
}