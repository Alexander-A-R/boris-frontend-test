export interface ICustomer {
	_id: string
	amount: number
	type: string
	name: {
		first: string
		last: string
	}
	company: string
	email: string
	phone: string
	address: string
}