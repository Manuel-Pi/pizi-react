import React from 'react';
import './select-input.less';
import { FormInputProps } from '../../../utils/PiziComponent/FormInput';
export interface SelectInputProps extends FormInputProps {
    multiple?: boolean;
    itemsSize?: number;
    options: {
        label: string;
        value?: string;
        selected?: boolean;
    }[];
}
/**
 * SelectInput UI component
 */
export declare const SelectInput: React.FC<SelectInputProps & React.HTMLAttributes<HTMLDivElement>>;
