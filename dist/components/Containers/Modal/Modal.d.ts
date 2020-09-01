import React from 'react';
import './modal.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
export interface ModalProps extends ComponentProps {
    type?: 'info' | 'confirm' | 'custom';
    open?: boolean;
    onClose?: (closeActionName: string | undefined) => void | boolean;
    onClosed?: (closeActionName: string | undefined) => void;
    header?: string | React.ReactElement;
    closeButton?: boolean;
    actions?: React.ReactElement[];
    confirmButtonDisabled?: () => boolean;
    fullScreen?: boolean;
}
/**
 * Modal UI component
 */
export declare const Modal: React.FC<ModalProps & React.HTMLAttributes<HTMLDivElement>>;
