import React, {useEffect} from 'react';
import {ITab} from '../models'
import {Tab} from './Tab'



interface TabPanelProps {
	tabs: ITab[]
	onChange: (tabId: string) => void
}

export function TabPanel({tabs, onChange }: TabPanelProps) {

	function clickTabHandler(id: string) {
		onChange(id)
	}

	return (
		<div className="flex border-b border-b-gray-300">
			{tabs.map(({ title, isActive, id }) => {
				return (
					<Tab title={title} isActive={isActive} onClick={() => clickTabHandler(id)} key={id}/>
				)
			})}
		</div>
	)
}