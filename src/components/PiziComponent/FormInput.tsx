import React, { useState } from 'react';
import './form-input.less';
import { ComponentProps, defaultProps } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';

export interface FormInputProps extends  Omit<ComponentProps, "defaultValue" | "onChange">{
    className: string
	inputName: string
    readOnly?: boolean
    label?: string
    error?: string
}

/**
 * Base Form Input UI component
 */
export const FormInput: React.FC<FormInputProps & React.HTMLAttributes<HTMLDivElement>> = ({
    label,
    className,
    inputName,
    color = "main",
	...props
}) => {

	return <div className={CreateClassName("pizi-input " + inputName, {error: props.error})}>
				<label className={color}>{label}</label>
				<div className={inputName + "__input " + className}>
					{props.children}
				</div>
                <div className="pizi-input__error error">
                    {props.error}
                </div>
	        </div>
};