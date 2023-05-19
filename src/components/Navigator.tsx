import React, {useCallback} from 'react';
import {useSearchParams} from 'react-router-dom'
import {useData} from '../hooks/useData'
import {ErrorQuery} from './ErrorQuery'
import {Tabs} from './Tabs'
import {Table} from './Table'
import {Tab} from './Tab'



export function Navigator() {
	
	const [searchParams, setSearchParams] = useSearchParams()
	const searchTab = searchParams.get('tab') || '0'		// if the request is not set, then the first tab will be opened initially
	const {data, error} = useData(searchTab)		// fetches data, filters it, and checks for errors

// the function sets the "tab" parameter of the query string in the URL by the "eventKey" of the tab
	const setSearchTab = useCallback((eventKey: string) => {
		const params = new URLSearchParams(`tab=${eventKey}`)
		setSearchParams(params)
	}, [setSearchParams])


	return (
		<div className="w-96 mx-auto">
		{error && <ErrorQuery />}
		{!error &&
			<div className="pt-px border border-black rounded-md">
				<Tabs onSelect={setSearchTab} activeTab={searchTab}>
					<Tab title={'Income'} eventKey={'0'} />
					<Tab title={'Outcome'} eventKey={'1'} />
					<Tab title={'Loans'} eventKey={'2'} />
					<Tab title={'Investments'} eventKey={'3'} />
				</Tabs>
				<Table data={data} />
			</div>}
		</div>
	)
}