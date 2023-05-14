import React from 'react';
import {IClient} from '../models'
import {TableRow} from './TableRow'

interface TableProps {
	data: IClient[]
}

export function Table({ data }: TableProps) {
	return (
		<div className="py-8 px-2">
			<div className="flex leading-8 text-center border-b border-b-gray-300">
				<div className="flex-1">
					<span className="font-semibold">Name</span>
				</div>
				<div className="flex-1">
					<span className="font-semibold">Amount</span>
				</div>
			</div>
			{data.map((client, index) => {
				return <TableRow name={client.name} amount={client.amount} key={client._id}/>
			})}
		</div>
	)
}