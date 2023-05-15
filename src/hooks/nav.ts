import {ITab} from '../models'

export function useTabs() {

	const tabs: ITab[] = [
				{
					title: 'Income',
					id: '0',
					isActive: false,
					type: 'income'
				},
				{
					title: 'Outcome',
					id: '1',
					isActive: false,
					type: 'outcome'
				},
				{
					title: 'Loans',
					id: '2',
					isActive: false,
					type: 'loan'
				},
				{
					title: 'Investments',
					id: '3',
					isActive: false,
					type: 'investment'
				},
			]

	function setActiveTab(id: string) {
		tabs.map(tab => {
			if (tab.id === id) {
				tab.isActive = true
				return tab
			} else {
				tab.isActive = false
				return tab
			}
		})
	}

	function getFilterType(id: string) {
		return tabs.find(tab => tab.id === id)?.type
	}

	return {tabs, setActiveTab, getFilterType}
}