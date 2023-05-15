import {useSearchParams} from 'react-router-dom'


export function useTabQuery() {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryTabId = searchParams.get('tab') ?? '0'	// если параметр не задан то будет открыта первая вкладка

	// вызывается на событие onChange в TabPanel и устанавливает параметры запроса
	function setTabQuery(tabId: string) {
		const params = new URLSearchParams(`tab=${tabId}`)
		setSearchParams(params)
	}

	return {queryTabId, setTabQuery}
}