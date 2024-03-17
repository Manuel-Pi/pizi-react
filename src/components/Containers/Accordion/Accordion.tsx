import React, { useEffect, useRef, useState } from 'react'
import './accordion.less'
import { ComponentProps, GetComponentClassNames, GetProps, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'
import { Button } from '../../Controls/Button/Button'
import { Heading } from '../../Typography/Heading/Heading'

/**
 * Accordion Item
 */
export interface AccordionItemProps extends ComponentProps<HTMLDivElement>{
	title: string
	default?: boolean
}

export const AccordionItem: React.FC<AccordionItemProps> = (props) => 
	<div className={ClassNameHelper("pizi-accordion-item pizi-container")}>
		{props.children}
	</div>

/**
 * Accordion
 */
export interface AccordionProps extends ComponentProps<HTMLDivElement>{
	singleExpension?: boolean
	statusIcon?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({
	singleExpension = true,
	statusIcon = true,
	...props
}) => {
	props = InitProps(props)
	const listRef = useRef<HTMLUListElement>(null)
	const [openItems, setOpenItems] = useState<number[]>([])

	const items = React.Children.map(props.children, (child, index) => {
		if(!React.isValidElement(child)) throw new Error(`Cannot allow non valid react element children inside accordion!`)
		if(child.type !== AccordionItem) throw new Error(`Cannot allow children of type ${child.type} inside accordion!`)
		return React.cloneElement(child as React.ReactElement<AccordionItemProps>, { key:index })
	}) || []

	const toogleItem = (index: number) => {
		let items = [...openItems]
		if(items.includes(index)){
			singleExpension ? items = [] : items.splice(items.indexOf(index), 1)
		} else {
			singleExpension ? items = [index] : items.push(index)
		}

		openItems.forEach(setItemHeight)
		setTimeout(() => setOpenItems(items), 0)
	}

	const setItemHeight = (index: number) => {
		const listEl = listRef?.current
		if(!listEl) return
		const el = ((listEl.children[index] as HTMLElement).children[1] as HTMLElement)
		el.style.height = `${el.children[0].getBoundingClientRect().height}px`
		el.classList.remove("open")
	}

	useEffect(() => {
		openItems.forEach(setItemHeight)
	}, [openItems])

	return <div className={ClassNameHelper("pizi-accordion")}>
				<ul ref={listRef}>
				{
					items.map((item, index) => 	<li key={index} className={ClassNameHelper(GetComponentClassNames("item", props), { open: openItems.includes(index) })}>
													<Heading tag="h3">
														<Button onClick={() => toogleItem(index)} {...GetProps(props)}>{item.props.title}</Button>
														<i className={GetComponentClassNames("", {
															...GetProps(props),
															alt: props.appearance === "fill" 
														})}></i>
													</Heading>
													<div className="item-content" onTransitionEnd={e => {
																									e.currentTarget.style.height = ""
																									if(openItems.includes(index))e.currentTarget.classList.add("open")
																								}}>
														{item}
													</div>
												</li>)
				}
				</ul>
	        </div>
}