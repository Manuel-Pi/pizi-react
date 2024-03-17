import React, { useEffect, useRef, useState } from 'react';
import './alert.less'
import { ComponentProps, GetComponentClassNames, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import { Button } from '../../Controls/Button/Button'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { registerIcons } from "../../../utils/Utils"
registerIcons(faTimes)

export interface AlertProps extends ComponentProps<HTMLDivElement>{
	timeout?: number
	content?: any
}

/**
 * Alert UI component
 */
export const Alert: React.FC<AlertProps> = ({
	timeout = 4000,
	color = 'blue',
	content,
	...props
}) => {
	props = InitProps(props)
	const alertRef = useRef(null);
	const [open, setOpen] = useState(true);
	const [closed, setClosed] = useState(false);

	useEffect(() => {
		if(timeout) setTimeout(() => setOpen(false), timeout);
		const el = alertRef.current as any;
		if(el) el.style.height = el.getBoundingClientRect().height + "px";
	}, [])

	return closed ? null : 
			<div className={GetComponentClassNames("pizi-alert", {...props, color}, {
					"animate__animated": true,
					"close": !open
				})} 
				onTransitionEnd={() => setClosed(true)}
				ref={alertRef}>
				{content || props.children}
				<Button icon="times" 
						appearance="simple" 
						size={props.size}
						onClick={() => setOpen(false)}
						color={color}
						alt={props.appearance === "fill"}/>
	        </div>
}

export interface AlertsProps{
	alerts: AlertProps[]
}

export const Alerts: React.FC<AlertsProps & React.HTMLAttributes<HTMLDivElement>> = ({
	alerts = [],
	...props
}) => {

	return 	<div className="pizi-alerts">
			{
				alerts.map(alert => <Alert {...alert}>{alert.content}</Alert>)
			}
			</div>
}