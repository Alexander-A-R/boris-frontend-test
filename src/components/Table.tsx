import React from 'react'
import {TableRow} from './TableRow'
import {ICustomer} from '../models'

interface TableProps {
	data: ICustomer[]
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
			{data.map( customer => {
				return <TableRow name={ customer.name } amount={ customer.amount } key={ customer._id }/>
			} )}
		</div>
	)
}