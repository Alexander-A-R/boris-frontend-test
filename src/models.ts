export interface ICustomer {
	readonly _id: string
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