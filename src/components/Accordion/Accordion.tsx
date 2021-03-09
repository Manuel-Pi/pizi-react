import React, { useEffect, useRef, useState } from 'react';
import './accordion.less';
import { ComponentProps, GetAltColor, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';

export interface AccordionItemProps extends ComponentProps{
	title: string
	default?: boolean
}

/**
 * Accordion UI component
 */
export const AccordionItem: React.FC<AccordionItemProps & React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	return 	<div className={CreateClassName("pizi-accordion-item pizi-container")}>
			{props.children}
	        </div>
};

export interface AccordionProps extends ComponentProps{
	singleExpension: boolean
}

/**
 * Accordion UI component
 */
export const Accordion: React.FC<AccordionProps & React.HTMLAttributes<HTMLDivElement>> = ({
	singleExpension = true,
	...props
}) => {
	const listRef = useRef();
	const [openItems, setOpenItems] = useState([]);

	const items = React.Children && React.Children.map(props.children, (child, index) => {
		if(!React.isValidElement(child)) throw new Error("Cannot allow non valid react element children inside accordion!")
		if(child.type !== AccordionItem) throw new Error("Cannot allow children of type " + child.type + " inside accordion!")
		return React.cloneElement(child, { key:index})
	})

	const toogleItem = (index: number) => {
		let items = [...openItems];
		if(items.includes(index)){
			singleExpension ? items = [] : items.splice(items.indexOf(index), 1)
		} else {
			singleExpension ? items = [index] : items.push(index)
		}

		openItems.forEach(setItemHeight)
		setTimeout(() => setOpenItems(items), 0)
	}

	const setItemHeight = (index: number) => {
		const listEl:HTMLUListElement = listRef?.current;
		if(!listEl) return
		const el = ((listEl.children[index] as HTMLElement).children[1] as HTMLElement)
		el.style.height = el.children[0].getBoundingClientRect().height + "px"
		el.classList.remove("open")
	}

	useEffect(() => {
		openItems.forEach(setItemHeight)
	}, [openItems])

	return <div className={CreateClassName("pizi-accordion")}>
				<ul ref={listRef}>
				{
					items.map((item, index) => 	<li key={index} className={CreateClassName(GetComponentClassNames("item", props), {
																	open: openItems.includes(index)
																})}>
													<Heading tag="h3">
														<Button onClick={() => toogleItem(index)} appearance={props.appearance} color={props.color}>{item.props.title}</Button>
														<i className={props.appearance === "fill" ? GetAltColor(props.color) : props.color}></i>
													</Heading>
													<div className="item-content" onTransitionEnd={e => {
																									e.currentTarget.style.height = null
																									if(openItems.includes(index))e.currentTarget.classList.add("open")
																								}}>
														{item}
													</div>
												</li>)
				}
				</ul>
	        </div>
};