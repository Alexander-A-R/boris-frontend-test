import React from 'react';
import {Tab} from './Tab'


interface TabPanelProps {
	activeTab: string
	onChange: (id: string) => void
}

export function TabPanel({ activeTab, onChange }: TabPanelProps) {
	return (
		<div className="flex border-b border-b-gray-300">
			<Tab title={'Income'} id={'0'} onClick={onChange} isActive={activeTab === '0'} />
			<Tab title={'Outcome'} id={'1'} onClick={onChange} isActive={activeTab === '1'} />
			<Tab title={'Loans'} id={'2'} onClick={onChange} isActive={activeTab === '2'} />
			<Tab title={'Investments'} id={'3'} onClick={onChange} isActive={activeTab === '3'} />
		</div>
	)
}