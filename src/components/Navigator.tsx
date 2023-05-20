import React from 'react';
import {useSearchParams} from 'react-router-dom'
import {useData} from '../hooks/useData'
import {ErrorQuery} from './ErrorQuery'
import {Tabs} from './Tabs'
import {Table} from './Table'
import {Tab} from './Tab'



export function Navigator() {
	
	const [searchParams, setSearchParams] = useSearchParams()
	const {setFilteredData, data, error} = useData()		// hook for setting table data and checking for an error with an incorrect request
	
	const searchTab = searchParams.get('tab') || '0'		// if the parameter is not in the url line, then tab 0 will be displayed



// onSelect event handler in Tabs component
// sets the url parameter and updates the table data

	function selectTabHandler(eventKey: string) {

		const params = new URLSearchParams(`tab=${eventKey}`)
		setSearchParams(params)

		setFilteredData(eventKey)

	}

	

	return (
		<div className="w-96 mx-auto">
		{error && <ErrorQuery />}
		{!error &&
			<div className="pt-px border border-black rounded-md">
				<Tabs onSelect={selectTabHandler} defaultActiveTab={searchTab}>
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