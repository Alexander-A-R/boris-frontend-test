import React, {ReactElement, Children} from 'react';


interface TabsProps {
	children: ReactElement[]
	activeTab: string
	onSelect: (id: string) => void
}

export function Tabs({ children, activeTab, onSelect }: TabsProps) {

	return (
		<div className="border-b border-b-gray-300">
			{Children.map(children, (child: ReactElement) =>{
				const isActive = child.props.eventKey === activeTab
				return React.cloneElement(child, {isActive, onClick: () => onSelect(child.props.eventKey)})
			})}
		</div>
	)
}