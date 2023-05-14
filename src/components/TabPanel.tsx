import React from 'react';
import {Tab} from './Tab'


interface TabPanelProps {
	activeTab: string
	setTab: (title: string) => void
	setSearchParams: any
}

export function TabPanel({ activeTab, setTab, setSearchParams }: TabPanelProps) {

	const types: string[] = ['Income', 'Outcome', 'Loan', 'Investment']

	


	return (
		<div className="flex border-b border-b-gray-300">
			{types.map((type, index) => {
				const clicked = +activeTab === index
				return (
					<Tab title={type} clicked={clicked} setTab={setTab} setSearchParams={setSearchParams} tabId={index} key={index}/>
				)
			})}
		</div>
	)
}