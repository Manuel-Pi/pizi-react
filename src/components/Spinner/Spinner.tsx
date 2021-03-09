import React from 'react';
import './spinner.less';
import { Appeareance, ComponentProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SpinnerProps extends Omit<ComponentProps, "appearance">{
	type: 'spinner' | 'circle-notch' | 'sync' | 'sync-alt' | 'cog' | 'fan' | 'compact-disc'
}

/**
 * Spinner UI component
 */
export const Spinner: React.FC<SpinnerProps & React.HTMLAttributes<HTMLDivElement>> = ({
	type = "spinner",
	...props
}) => {
	return <div className={CreateClassName(GetComponentClassNames("pizi-spinner", {...props, appearance: null}))}>
				<FontAwesomeIcon icon={type} className={props.color}/>
	        </div>
};