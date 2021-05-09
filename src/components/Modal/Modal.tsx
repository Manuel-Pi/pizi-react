import React, { useEffect, useState } from 'react';
import './modal.less';
import { ComponentProps, GetAltColor, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export interface ModalProps extends ComponentProps{
	type?: 'info' | 'confirm' | 'custom'
	open?: boolean
	onClose?: (closeActionName: string) => void | boolean
	header?: string | React.Component
	closeButton?: boolean
	actions?: React.ReactElement[]
}

/**
 * Modal UI component
 */
export const Modal: React.FC<ModalProps & React.HTMLAttributes<HTMLDivElement>> = ({
	type = "info",
	open = false,
	onClose = () => {},
	header,
	closeButton = false,
	children,
	actions = [],
	...props
}) => {

	//const [isOpen, setOpen] = useState(open);
	const [isClosed, seClosed] = useState(!open);

	useEffect(() => {
		if(open) {
			document.body.classList.add("body-modal")
			//setOpen(true)
			seClosed(false)
		} else if(isClosed){
			document.body.classList.remove("body-modal")
		}
	}, [open, isClosed])



	const closeModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if(event.target instanceof HTMLButtonElement){
			onClose((event.target as HTMLButtonElement).name)
		}
	}

	const modalActions: React.ReactElement[] = [];

	if(type !== "custom"){
		if(type && (type !== "info" || !closeButton)){
			modalActions.push(<Button key="confirm" color={props.appearance === "fill" && GetAltColor(props.color) || props.color} name="confirm">Ok</Button>)
		}
		if(type === 'confirm'){
			modalActions.push(<Button key="cancel" color={props.color === "secondary" ? "main" : "secondary"} name="cancel" appearance="border">Cancel</Button>)
		}
		modalActions.push(...actions)
	} else {
		modalActions.push(...actions)
	}

	return <div className={CreateClassName("pizi-modal", {
							"hidden": isClosed
							})}>
				<div className={CreateClassName(GetComponentClassNames("pizi-modal-container animate__animated", props), {
									"animate__bounceIn": open,
									"animate__bounceOut": !open,
									"close-button": closeButton
								})} 
					onAnimationEnd={e => { 
						if(open) return
						seClosed(true) 
					}}>
					{
						header && 	<header className="border-alt-light">
									{
										typeof header === "string" ? <Heading tag="h1" className="alt">{header}</Heading> : header 
									}
									</header>
					}
					<div className={"pizi-container"}>
						{children}
					</div>
					{
						!!modalActions.length && 	<footer className="border-alt-light">
														<ButtonGroup onClick={closeModal} color={props.color}>
															{modalActions}
														</ButtonGroup>
													</footer>
					}
					{closeButton && <Button name="close-cross" icon="times" align="right" className="alt" appearance={"simple"} onClick={closeModal}/>}
				</div>
			</div>
};