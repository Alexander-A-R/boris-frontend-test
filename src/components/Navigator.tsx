import React from 'react';
import {ErrorQuery} from './ErrorQuery'
import {TabPanel} from './TabPanel'
import {Table} from './Table'
import {useTabs} from '../hooks/useTabs'
import {useData} from '../hooks/useData'
import {useTabQuery} from '../hooks/useTabQuery'
import {ICustomer} from '../models'


//	Общий компонент с вкладками и таблицами

export function Navigator() {
	
	const {queryTabId, setTabQuery} = useTabQuery()
	const {tabs, setActiveTab, getFilterType} = useTabs(queryTabId)
	const {data} = useData()

	const errorQuery = tabs.find(tab => tab.id === queryTabId) ? false : true


	function changeTabPanelHandler(id: string) {
		setTabQuery(id)
		setActiveTab(id)
	}

//	Функция фильтрации данных
	function filterData(data: ICustomer[], type: string | undefined) {
		return data.filter(customer => customer.type === type)
	}

	return (
		<div className="w-96 mx-auto">
		{errorQuery && <ErrorQuery />}
		{!errorQuery &&
			<div className="pt-px border border-black rounded-md">
				<TabPanel tabs={ tabs } onChange={ changeTabPanelHandler }/>
				<Table data={ filterData(data, getFilterType(queryTabId)) } />
			</div>
		}	
		</div>
	)
}