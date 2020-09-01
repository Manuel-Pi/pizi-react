import React from 'react';
import './spinner.less'
import { ComponentProps, GetComponentClassNames } from '../../../utils/PiziComponent/PiziComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface SpinnerProps extends Omit<ComponentProps, "appearance">{
	type: 'spinner' | 'circle-notch' | 'sync' | 'sync-alt' | 'cog' | 'fan' | 'compact-disc'
	label?: string
}

/**
 * Spinner UI component
 */
export const Spinner: React.FC<SpinnerProps & React.HTMLAttributes<HTMLDivElement>> = ({
	type = "spinner",
	label = null,
	...props
}) => {
	return <div className={GetComponentClassNames("pizi-spinner", {...props, appearance: undefined})}>
				<FontAwesomeIcon icon={type} className={props.color}/>
				{label && <label>{label}</label>}
	        </div>
}