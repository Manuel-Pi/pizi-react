import React from 'react';
import './list-input.less';
import { FormInputProps } from '../../../utils/PiziComponent/FormInput';
export interface ListInputProps extends FormInputProps<HTMLDivElement> {
    defaultValue?: string;
    values: string[] | ValueObject[];
    type?: 'horizontal' | 'vertical';
    onChange?: (valeu: string) => void;
}
interface ValueObject {
    value: string;
    label: string;
}
/**
 * ListInput UI component
 */
export declare const ListInput: React.FC<ListInputProps>;
export {};
