import React from 'react';

interface TabProps {
	title: string
	id: string
	onClick: (id: string) => void
	isActive: boolean
}

export function Tab({title, id, isActive, onClick} : TabProps) {

	const classTab = "flex items-center justify-center flex-1 min-w-min h-10 border-t-2 border-x border-black border-bottom-0 rounded-t-md cursor-pointer select-none"
	const classTabActive = "bg-slate-300"

	return (
		<div className={ isActive ? `${classTab} ${classTabActive}` : classTab }
				onClick={ () => onClick(id) }
			><span>{title}</span></div>
	)
}