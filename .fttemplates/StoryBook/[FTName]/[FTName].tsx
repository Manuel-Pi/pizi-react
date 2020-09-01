import React from 'react';
import './[FTName | lowercase].less'
import { ComponentProps, GetComponentClassNames } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'

export interface [FTName]Props extends ComponentProps{
}

/**
 * [FTName] UI component
 */
export const [FTName]: React.FC<[FTName]Props & React.HTMLAttributes<HTMLDivElement>> = ({
	...props
}) => {
	return 	<div className={ClassNameHelper(GetComponentClassNames("pizi-[FTName | lowercase]", {...props}))}>

	        </div>
}