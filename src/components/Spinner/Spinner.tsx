import React from 'react';
import './spinner.less';
import { ComponentProps, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SpinnerProps extends ComponentProps{
	type: 'spinner' | 'circle-notch' | 'sync' | 'sync-alt' | 'cog' | 'fan' | 'compact-disc'
}

/**
 * Spinner UI component
 */
export const Spinner: React.FC<SpinnerProps & React.HTMLAttributes<HTMLDivElement>> = ({
	type = "spinner",
	...props
}) => {
	return <div className={CreateClassName(GetComponentClassNames("pizi-spinner", props))}>
				<FontAwesomeIcon icon={type}/>
	        </div>
};