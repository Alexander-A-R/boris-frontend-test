import React from 'react'


export function ErrorQuery() {
	return (
		<div className="border border-black rounded-md bg-red-100 py-5 text-center">
			<h1 className="text-red-700 uppercase text-lg">incorrect query parameter</h1>
			<h2 className="text-red-700">You can follow the links</h2>
			<ul className="text-blue-800">
				<li><a href="/navigator?tab=0">Income</a></li>
				<li><a href="/navigator?tab=1">Outcome</a></li>
				<li><a href="/navigator?tab=2">Loans</a></li>
				<li><a href="/navigator?tab=3">Investments</a></li>
			</ul>
		</div>
	)
}