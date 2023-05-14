import React from 'react';

interface TabProps {
	title: string
	clicked: boolean
	setTab: (title: string) => void
	setSearchParams: (params: any) => void
	tabId: number
}

export function Tab({title, clicked, setTab, setSearchParams, tabId} : TabProps) {

	function clickHandler() {
		setTab(title)
		setSearchParams({tab: String(tabId)})

	}

	const className = "flex items-center justify-center flex-1 min-w-min h-10 border-t-2 border-x border-black border-bottom-0 rounded-t-md cursor-pointer select-none"
	const classClicked = "bg-slate-300"

	return (
		<div className={clicked ? `${className} ${classClicked}` : className}
				onClick={() => clickHandler()}
			><span>{title}</span></div>
	)
}