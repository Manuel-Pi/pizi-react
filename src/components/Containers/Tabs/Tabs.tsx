import React, { useState, useEffect, useRef, ReactElement } from 'react'
import './tabs.less'
import { ComponentProps, GetComponentClassNames, GetProps, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'
import { Button } from '../../Controls/Button/Button'

export interface TabProps extends Omit<ComponentProps, 'title'> {
	title?: JSX.Element | string
	default?: boolean
}

export const Tab: React.FC<TabProps> = (props) => 	<div className={GetComponentClassNames("pizi-tab pizi-container", GetProps(props))}>
														{React.Children.map(props.children, (child, index) => {
															return React.isValidElement(child) ? React.cloneElement(child, {key:props.color! + index}) : child
														})}
													</div>

export interface TabsProps extends ComponentProps {
	tabsPosition?: "top" | "left"
}

export const Tabs: React.FC<TabsProps> = ({
	tabsPosition = "top",
	...props
}) => {
	props = InitProps(props)
	const [current, setCurrent] = useState(0)
	const [focusElements, setFocusElements] = useState<HTMLElement[]>()
	const listRef = useRef<HTMLUListElement>(null)

	const tabs: ReactElement<TabProps>[] = React.Children.map(props.children, (child, index) => {
		if(!React.isValidElement(child)) throw new Error("Cannot allow non valid react element children inside tabs!")
		if(child.type !== Tab) throw new Error("Cannot allow children of type " + child.type + " inside tabs!")
		return React.cloneElement(child as ReactElement<TabProps>, {key: props.color! + index, ...GetProps(props)})
	}) || []

	const focusNext = (elements: HTMLElement[] = [], e:React.KeyboardEvent) => {
		const index = elements.indexOf(e.currentTarget as HTMLElement)
		let nextIndex
		if(e.key === "ArrowRight"){
			nextIndex = index + 1 > elements.length - 1 ? 0 : index + 1
			elements[nextIndex].focus()
		} else if(e.key === "ArrowLeft"){
			nextIndex = index - 1 < 0 ? elements.length - 1 : index - 1
		}
		if(nextIndex !== undefined) elements[nextIndex].focus()
	}

	useEffect(() => {
		if(listRef.current) setFocusElements(Array.from((listRef.current as HTMLElement).querySelectorAll("button")))
		tabs.forEach((tab, index) => tab.props.default && setCurrent(index))
	}, [])

	let currentTab = tabs.filter((tab, index) => index === current)[0]
	if(!currentTab) currentTab = tabs[0]
	
	return 	<div className={ClassNameHelper("pizi-tabs", {["tabs-position-" + tabsPosition]: !!tabsPosition})}>
				<ul ref={listRef} className={ClassNameHelper("border-light", props.appearance, props.color)}>
				{
					tabs.map((tab, index) => (tab.props.display === undefined || tab.props.display) && 	<li key={index} 
																		className={GetComponentClassNames("pizi-li", props, {current: index === current})}>
																			<Button className={"no-active"}
																					color={ props.color }
																					appearance={"simple"}
																					alt={ props.appearance === "fill" }
																					size={ props.size }
																					onClick={() => setCurrent(index)}
																					onFocus={() => setCurrent(index)}
																					onKeyDown={(e:React.KeyboardEvent) => focusNext(focusElements, e)}>{tab.props.title}</Button>
																	</li>)
				}
				</ul>
				{currentTab}
	        </div>
}