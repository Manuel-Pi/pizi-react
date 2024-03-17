import React from 'react'
import './form-input.less'
import { ComponentProps } from './PiziComponent'
import { ClassNameHelper } from '../Utils'

export interface FormInputProps<T = HTMLElement> extends  Omit<ComponentProps<T>, "defaultValue" | "onChange" | "onError" | "appearance">{
    className?: string
	inputName?: string
    readOnly?: boolean
    label?: string
    error?: string
    autoFocus?: boolean 
    key?: any
    appearance?: 'default' | 'alt'
    labelPosition?: 'right'
    inputId?: string 
}

/**
 * Base Form Input UI component
 */
export const FormInput: React.FC<FormInputProps> = ({
    label,
    className,
    inputName,
    color = "main",
    appearance = 'default',
    labelPosition,
    inputId,
	...props
}) => {
	return <div key={props.key}
                id={props.id}
                className={ClassNameHelper("pizi-input", inputName, props.size, {
                                                                        error: !!props.error, 
                                                                        alt: appearance === "alt", 
                                                                        hidden: props.display === false,
                                                                        [`position-${labelPosition}`]: !!labelPosition
                                                                    }, className)}>
				{!labelPosition && <label>{label}</label>}
				<div className={inputName + "__input"}>
					{props.children}{labelPosition && <label htmlFor={inputId}>{label}</label>}
				</div>
                <div className="pizi-input__error error">
                    {props.error}
                </div>
	        </div>
}