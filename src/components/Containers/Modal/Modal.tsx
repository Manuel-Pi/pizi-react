import React, { ReactElement, useEffect, useState } from 'react'
import './modal.less'
import { ComponentProps, GetAltColorFromTest, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'
import { Button } from '../../Controls/Button/Button'
import { Heading } from '../../Typography/Heading/Heading'
import { ButtonGroup } from '../../Controls/ButtonGroup/ButtonGroup'
import { TabProps, Tabs, TabsProps } from '../Tabs/Tabs'
import { Tab } from '../../..'

export interface ModalProps extends ComponentProps{
	type?: 'info' | 'confirm' | 'custom'
	open?: boolean
	onClose?: (closeActionName: string | undefined) => void | boolean
	onClosed?: (closeActionName: string | undefined) => void
	header?: string | React.ReactElement
	closeButton?: boolean
	actions?: React.ReactElement[]
	confirmButtonDisabled?: () => boolean
	fullScreen?: boolean
}

/**
 * Modal UI component
 */
export const Modal: React.FC<ModalProps & React.HTMLAttributes<HTMLDivElement>> = ({
	type = "info",
	open = false,
	onClose = () => {},
	onClosed = () => {},
	header,
	closeButton = false,
	children,
	actions = [],
	confirmButtonDisabled = () => false,
	className = "",
	fullScreen = false,
	...props
}) => {
	props = InitProps(props)
	const [isClosed, setClosed] = useState(!open)
	const [closedBy, setClosedBy] = useState<string | undefined>()
	const [currentTab, setCurrentTab] = useState(0)

	useEffect(() => {
		if(open) {
			document.body.classList.add("body-modal")
			setClosed(false)
		} else if(isClosed){
			document.body.classList.remove("body-modal")
		}
	}, [open, isClosed])

	const closeModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if(event.target instanceof HTMLButtonElement){
			setClosedBy((event.target as HTMLButtonElement).name)
			onClose((event.target as HTMLButtonElement).name)
		}
	}

	const modalActions: React.ReactElement[] = []
	if(type !== "custom"){
		const color = GetAltColorFromTest(props.appearance === "fill", props.color)
		if(type && (type !== "info" || !closeButton)){
			modalActions.push(<Button key="confirm" color={color} name="confirm" disabled={confirmButtonDisabled()}>Ok</Button>)
		}
		if(type === 'confirm'){
			modalActions.push(<Button key="cancel" color={color} name="cancel" appearance="border">Cancel</Button>)
		}
	}
	modalActions.push(...actions)

	let tabs: React.ReactElement[] = []
	let currentTabEl: React.ReactElement
	let childs: any = []
	React.Children.forEach(children, (child) => {
		if(React.isValidElement(child) && child.type === Tab) {
			tabs.push(React.cloneElement(child as ReactElement<TabProps>, {
				appearance: props.appearance,
				color: props.color 
			}))
		} else if(React.isValidElement(child) && child.type === Tabs) {
			childs.push(React.cloneElement(child as ReactElement<TabsProps>, {
				color: props.color,
				alt: true
			}))
		} else {
			childs.push(child)
		}
	})

	if(tabs.length){
		currentTabEl = tabs.filter((tab, index) => index === currentTab)[0]
		if(!currentTab) currentTabEl = tabs[0]
	}

	return <div className={ClassNameHelper("pizi-modal", className, {
															"hidden": isClosed,
															"pizi-modal-tabs": !!tabs.length
														})}>
				<div className={GetComponentClassNames("pizi-modal-container animate__animated", {
									...props,
									color: GetAltColorFromTest(!!tabs.length && props.appearance === "fill", props.color)
								}, {
									"animate__bounceIn": open,
									"animate__bounceOut": !open,
									"close-button": closeButton,
									"full-screen": fullScreen
								})} 
					onAnimationEnd={e => { 
						if(open) return
						setClosed(true) 
						onClosed(closedBy)
					}}>
					{
						(header || tabs.length !== 0) && <header className={ClassNameHelper("border-alt-light", {"pizi-tabs": !!tabs.length})}>
									{
										typeof header === "string" ? <Heading tag="h1" className="alt">{header}</Heading> : header 
									}
									{
										tabs.length ? 	<ul className={ClassNameHelper("border-light", props.appearance, props.color, { simple: !!tabs.length })}>
														{
															tabs.map((tab, index) => (tab.props.display === undefined || tab.props.display) && 	<li key={index} 
																																					className={GetComponentClassNames("pizi-li", props, { current: index === currentTab })}>
																																						<Button className={"no-active"}
																																								color={ props.color }
																																								appearance={"simple"}
																																								alt={ props.appearance === "fill" }
																																								size={ props.size }
																																								onClick={() => setCurrentTab(index)}>{tab.props.title}</Button>
																																				</li>)
														}
														</ul> : null
									}
									</header>
					}
					{
						tabs.length ? currentTabEl! : <div className={ClassNameHelper("pizi-container", GetAltColorFromTest(props.appearance === "fill", props.color))}>
														{childs}
													</div>
					}
					{
						!!modalActions.length && 	<footer className="border-alt-light">
														<ButtonGroup onClick={closeModal} color={props.color} appearance="simple">
															{modalActions}
														</ButtonGroup>
													</footer>
					}
					{closeButton && <Button name="close-cross" icon="times" align="right" className="alt" appearance={"simple"} onClick={closeModal}/>}
				</div>
			</div>
}

Modal.defaultProps = {
	appearance: "fill"
}