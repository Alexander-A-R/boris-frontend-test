import React from 'react'
import {ICustomer} from '../models'

interface TableProps {
	data: ICustomer[]
}

export function Table({ data }: TableProps) {
	return (
		<div className="py-8 px-2">
			<table className="w-full">
				<thead>
					<tr className="h-9 border-b border-b-gray-300">
						<th className="w-3/6">Name</th>
						<th className="w-3/6">Amount</th>
					</tr>
				</thead>
				<tbody>
					{data.map(customer => {
						return (
							<tr className="h-9 border-b border-b-gray-300 text-center last:border-none">
								<td className="w-3/6">
									{ `${customer.name.first} ${customer.name.last}` }
								</td>
								<td className="w-3/6">
									{ `${customer.amount}` }
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

/*<div className="">
/*{data.map( customer => {
				return <TableRow name={ customer.name } amount={ customer.amount } key={ customer._id }/>
			} )}*/