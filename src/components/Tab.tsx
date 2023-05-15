import React from 'react';

interface TabProps {
	title: string
	isActive: boolean
	onClick: React.MouseEventHandler<HTMLDivElement>
}

export function Tab({title, isActive, onClick} : TabProps) {

	const className = "flex items-center justify-center flex-1 min-w-min h-10 border-t-2 border-x border-black border-bottom-0 rounded-t-md cursor-pointer select-none"
	const classClicked = "bg-slate-300"

	return (
		<div className={isActive ? `${className} ${classClicked}` : className}
				onClick={onClick}
			><span>{title}</span></div>
	)
}