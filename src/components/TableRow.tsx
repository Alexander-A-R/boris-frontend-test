import React from 'react';

interface TableRowProps {
	name: {
		first: string
		last: string
	}
	amount: number
}

export function TableRow({name, amount}: TableRowProps) {
	return (
		<div className="flex leading-8 text-center border-b border-b-gray-300 last:border-0">
			<div className="flex-1">
				<span>{`${name.first} ${name.last}`}</span>
			</div>
			<div className="flex-1">
				<span>{String(amount)}</span>
			</div>
		</div>
	)
}