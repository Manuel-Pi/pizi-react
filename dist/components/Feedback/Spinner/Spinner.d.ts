import React from 'react';
import './spinner.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
export interface SpinnerProps extends Omit<ComponentProps, "appearance"> {
    type: 'spinner' | 'circle-notch' | 'sync' | 'sync-alt' | 'cog' | 'fan' | 'compact-disc';
    label?: string;
}
/**
 * Spinner UI component
 */
export declare const Spinner: React.FC<SpinnerProps & React.HTMLAttributes<HTMLDivElement>>;
