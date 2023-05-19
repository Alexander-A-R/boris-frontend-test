import React, {ReactElement, Children, useState, useEffect} from 'react';


interface TabsProps {
	children: ReactElement[] | ReactElement
	activeTab: string
	onSelect: (eventKey: string) => void
}

export function Tabs({ children, activeTab, onSelect }: TabsProps) {

	const [selectTab, setSelectTab] = useState(activeTab)

	useEffect(() => {
		onSelect(selectTab)
	}, [selectTab, onSelect])


	return (
		<div className="border-b border-b-gray-300">
			{Children.map(children, (child: ReactElement) =>{
				const isActive = child.props.eventKey === activeTab
				return React.cloneElement(child, {isActive, onClick: setSelectTab})
			})}
		</div>
	)
}