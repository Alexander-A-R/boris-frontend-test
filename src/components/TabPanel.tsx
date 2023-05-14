import React from 'react';
import {Tab} from './Tab'


interface TabPanelProps {
	activeTab: string
	types: string[]
	setSearchParams: (tab: URLSearchParams) => void
}

export function TabPanel({ activeTab, types, setSearchParams }: TabPanelProps) {

	return (
		<div className="flex border-b border-b-gray-300">
			{types.map((type, index) => {
				const clicked = +activeTab === index
				return (
					<Tab title={type} clicked={clicked} setSearchParams={setSearchParams} tabId={index} key={index}/>
				)
			})}
		</div>
	)
}