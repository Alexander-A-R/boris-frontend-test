import {useSearchParams} from 'react-router-dom'
import {ITab} from '../models'


export function useTabQuery(setActiveTab: (id: string) => void) {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryTabId = searchParams.get('tab') ?? '0'	// если параметр не задан то будет открыта первая вкладка
	

	// вызывается на событие onChange в TabPanel и устанавливает параметры запроса
	function setTabQuery(tabId: string) {
		const params = new URLSearchParams(`tab=${tabId}`)
		setSearchParams(params)
		setActiveTab(tabId)
	}

	return {queryTabId, setTabQuery}
}