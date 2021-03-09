import React, { ReactElement, useState, useEffect, useRef } from 'react';
import './tabs.less';
import { ComponentProps, GetAltColor, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';

export interface TabProps extends ComponentProps{
	title: string
	default?: boolean
}

/**
 * Tab UI component
 */
export const Tab: React.FC<TabProps & React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	return 	<div className={CreateClassName(GetComponentClassNames("pizi-tab pizi-container", props))}>
				{props.children}
	    	</div>
};




export interface TabsProps extends ComponentProps{
	tabsPosition: "top" | "left"
}

/**
 * Tabs UI component
 */
export const Tabs: React.FC<TabsProps & React.HTMLAttributes<HTMLDivElement>> = ({
	tabsPosition = "top",
	...props
}) => {

	const [current, setCurrent] = useState(null);
	const [focusElements, setFocusElements] = useState([]);
	const listRef = useRef();

	const tabs = React.Children && React.Children.map(props.children, (child, index) => {
		if(!React.isValidElement(child)) throw new Error("Cannot allow non valid react element children inside tabs!")
		if(child.type !== Tab) throw new Error("Cannot allow children of type " + child.type + " inside tabs!")
		return React.cloneElement(child, {key:props.color + index, appearance: props.appearance, color: props.color})
	})

	const focusNext = (elements: HTMLElement[], e:React.KeyboardEvent) => {
		const index = elements.indexOf((e.currentTarget as HTMLElement));
		if(e.key === "ArrowRight"){
			const nextIndex = index + 1 > elements.length - 1 ? 0 : index + 1;
			(elements[nextIndex] as HTMLElement).focus();
		} else if(e.key === "ArrowLeft"){
			const nextIndex = index - 1 < 0 ? elements.length - 1 : index - 1;
			(elements[nextIndex] as HTMLElement).focus();
		}
	}

	useEffect(() => {
		if(listRef.current) setFocusElements(Array.from((listRef.current as HTMLElement).querySelectorAll("button")))
		setCurrent(tabs.filter(tab => tab.props.default)[0])
	}, [])

	return 	<div className={CreateClassName("pizi-tabs", {["tabs-position-" + tabsPosition]: tabsPosition})}>
				<ul ref={listRef} className={CreateClassName("border-light", {
					[props.appearance]: props.appearance,
					[props.color]: props.color
					})}>
				{
					tabs.map((tab, index) => <li key={index} 
												className={CreateClassName(GetComponentClassNames("pizi-li", props), {current: current && current.props.title === tab.props.title})}>
													<Button className={"no-active"}
															color={ props.appearance === "fill" && GetAltColor(props.color) || props.color}
															appearance={"simple"}
															onClick={() => setCurrent(tab)}
															onFocus={() => setCurrent(tab)}
															onKeyDown={(e:React.KeyboardEvent) => focusNext(focusElements, e)}>{tab.props.title}</Button>
											</li>)
				}
				</ul>
				{current}
	        </div>
};