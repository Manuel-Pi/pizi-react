import React from 'react';
import './alert.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
export interface AlertProps extends ComponentProps<HTMLDivElement> {
    timeout?: number;
    content?: any;
}
/**
 * Alert UI component
 */
export declare const Alert: React.FC<AlertProps>;
export interface AlertsProps {
    alerts: AlertProps[];
}
export declare const Alerts: React.FC<AlertsProps & React.HTMLAttributes<HTMLDivElement>>;
