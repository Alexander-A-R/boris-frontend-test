import React from 'react';

interface TabProps {
	title: string
	eventKey: string
	isActive?: boolean
	onClick?: () => void
}

export function Tab({title, eventKey, isActive = false, onClick} : TabProps) {

	const classTab = "inline-block w-1/4 text-center leading-9 h-10 border-t-2 border-x border-black border-bottom-0 rounded-t-md cursor-pointer select-none"
	const classTabActive = "bg-slate-300"

	return (
		<div className={ isActive ? `${classTab} ${classTabActive}` : classTab } onClick={onClick}>
			<span>{title}</span>
		</div>
	)
}