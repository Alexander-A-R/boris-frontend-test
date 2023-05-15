import React from 'react';
import {Tab} from './Tab'
import {ITab} from '../models'



interface TabPanelProps {
	tabs: ITab[]
	onChange: (tabId: string) => void
}

export function TabPanel({tabs, onChange }: TabPanelProps) {

	return (
		<div className="flex border-b border-b-gray-300">
			{tabs.map(({ title, isActive, id }) => {
				return (
					<Tab title={ title } isActive={ isActive } onClick={ () => onChange(id) } key={ id }/>
				)
			})}
		</div>
	)
}