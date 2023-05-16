import React from 'react';
import {useSearchParams} from 'react-router-dom'
import {useData} from '../hooks/useData'
import {ErrorQuery} from './ErrorQuery'
import {TabPanel} from './TabPanel'
import {Table} from './Table'


export function Navigator() {
	
	const [searchParams, setSearchParams] = useSearchParams()
	const searchTab = searchParams.get('tab') || '0'		// if the request is not set, then the first tab will be opened initially
	const {data, error} = useData(searchTab)		// fetches data, filters it, and checks for errors

// the function sets the "tab" parameter of the query string in the URL by the "id" of the tab
	function setSearchTab(id: string) {
		const params = new URLSearchParams(`tab=${id}`)
		setSearchParams(params)
	}

	return (
		<div className="w-96 mx-auto">
		{error && <ErrorQuery />}
		{!error &&
			<div className="pt-px border border-black rounded-md">
				<TabPanel activeTab={ searchTab } onChange={ setSearchTab }/>
				<Table data={ data } />
			</div>
		}	
		</div>
	)
}