import React, { useEffect, useState } from 'react';
import './modal.less';
import { ComponentProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export interface ModalProps extends ComponentProps{
	type?: 'info' | 'confirm' | 'custom'
	open?: boolean
	onClose?: (closeActionName: string) => void
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

	const [isOpen, setOpen] = useState(open);
	const [isClosed, seClosed] = useState(!open);
	const [closeAction, setCloseAction] = useState(null);

	useEffect(() => {
		if(isOpen) {
			document.body.classList.add("body-modal")
			setOpen(true)
			seClosed(false)
		} else {
			document.body.classList.remove("body-modal")
		}
	}, [isOpen, isClosed])

	useEffect(() => {
		setOpen(open)
	}, [open])	

	const closeModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if(event.target instanceof HTMLButtonElement){
			setOpen(false)
			setCloseAction((event.target as HTMLButtonElement).name)
		}
	}

	const modalActions: React.ReactElement[] = [];

	if(type !== "custom"){
		if(type && (type !== "info" || !closeButton)){
			modalActions.push(<Button key="confirm" size="large" theme={props.theme === "alt" ? "default" : "alt"} name="confirm">Ok</Button>)
		}
		if(type === 'confirm'){
			modalActions.push(<Button key="cancel" size="large" theme={props.theme === "alt" ? "default" : "alt"} name="cancel" appearance="border">Cancel</Button>)
		}
		modalActions.push(...actions)
	} else {
		modalActions.push(...actions)
	}

	return <div className={CreateClassName("pizi-modal", {
							"hidden": isClosed
							})}>
				<div className={CreateClassName(GetComponentClassNames("pizi-modal-container animate__animated", props), {
									"animate__bounceIn": isOpen,
									"animate__bounceOut": !isOpen,
									"close-button": closeButton
								})} 
					onAnimationEnd={e => { 
						if(isOpen) return
						onClose(closeAction)
						seClosed(!isOpen) 
					}}>
					{
						header && 	<header>
									{
										typeof header === "string" ? <Heading tag="h1" theme={props.theme === "alt" ? "default" : "alt"}>{header}</Heading> : header 
									}
									</header>
					}
					<div className="pizi-container">
						{children}
					</div>
					{
						!!modalActions.length && 	<footer>
												<ButtonGroup onClick={closeModal}>
													{modalActions}
												</ButtonGroup>
											</footer>
					}
					{closeButton && <Button name="close-cross" icon="times" align="right" theme={"alt"} appearance={"simple"} onClick={closeModal}/>}
				</div>
			</div>
};