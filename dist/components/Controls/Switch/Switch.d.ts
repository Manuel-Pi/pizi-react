import React from 'react';
import './switch.less';
import { FormInputProps } from '../../../utils/PiziComponent/FormInput';
export interface SwitchProps extends FormInputProps {
    onChange?: (value: boolean) => void;
    defaultValue?: boolean;
}
/**
 * Switch UI component
 */
export declare const Switch: React.FC<SwitchProps & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">>;
