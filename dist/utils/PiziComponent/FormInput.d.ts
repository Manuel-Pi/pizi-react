import React from 'react';
import './form-input.less';
import { ComponentProps } from './PiziComponent';
export interface FormInputProps<T = HTMLElement> extends Omit<ComponentProps<T>, "defaultValue" | "onChange" | "onError" | "appearance"> {
    className?: string;
    inputName?: string;
    readOnly?: boolean;
    label?: string;
    error?: string;
    autoFocus?: boolean;
    key?: any;
    appearance?: 'default' | 'alt';
    labelPosition?: 'right';
    inputId?: string;
}
/**
 * Base Form Input UI component
 */
export declare const FormInput: React.FC<FormInputProps>;
