import React, {ReactElement, Children, useState, useEffect} from 'react';


interface ITabsProps {
	children: ReactElement[] | ReactElement
	defaultActiveTab: string
	onSelect: (eventKey: string) => void
}

export function Tabs({ children, defaultActiveTab, onSelect }: ITabsProps) {

	const [selectedTab, setSelectedTab] = useState(defaultActiveTab)



	useEffect(() => {
		onSelect(selectedTab)
	}, [selectedTab]) // eslint-disable-line react-hooks/exhaustive-deps

	/* the dependency issue in useEffect could be solved with useCallback,
	but I think this is not practical, since we don't need the onSelect function in the dependency */


	return (
		<div className="border-b border-b-gray-300">
			{Children.map(children, (child: ReactElement) =>{
				const isActive = child.props.eventKey === selectedTab
				return React.cloneElement(child, {isActive, onClick: setSelectedTab})
			})}
		</div>
	)
}