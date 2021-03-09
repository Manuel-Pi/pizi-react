import React, { ReactElement, useEffect, useRef, useState } from 'react';
import './alert.less';
import { Appeareance, ComponentProps, GetAltColor, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';

export interface AlertProps extends ComponentProps{
	timeout?: number
	content?: any
}

/**
 * Alert UI component
 */
export const Alert: React.FC<AlertProps & React.HTMLAttributes<HTMLDivElement>> = ({
	timeout = 4000,
	color = 'blue',
	content,
	...props
}) => {

	const alertRef = useRef();
	const [open, setOpen] = useState(true);
	const [closed, setClosed] = useState(false);

	useEffect(() => {
		if(timeout) setTimeout(() => setOpen(false), timeout);
		const el = alertRef.current as any;
		if(el) el.style.height = el.getBoundingClientRect().height + "px";
	}, [])

	return closed ? null : 
			<div className={CreateClassName(GetComponentClassNames("pizi-alert", {...props, color}), {
						"animate__animated": true,
						"close": !open
					})} 
					onTransitionEnd={() => setClosed(true)}
					ref={alertRef}>
				{content || props.children}
				<Button icon="times" 
						appearance="simple" 
						onClick={() => setOpen(false)}
						color={props.appearance === "fill" ? GetAltColor(color) : color}/>
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
				alerts.map(alert => <Alert {...alert}>{alert.content}</Alert>)
			}
			</div>
}