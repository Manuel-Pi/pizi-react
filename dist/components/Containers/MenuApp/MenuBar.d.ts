import React, { ReactElement } from 'react';
import './menubar.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import { PiziRoute } from './MenuApp';
export interface MenuBarProps extends ComponentProps {
    logo?: ReactElement;
    user?: string;
    routes: PiziRoute[];
    open?: boolean;
    onSwitch?: (open: boolean) => void;
    menuTop?: React.ReactElement;
    menuBottom?: React.ReactElement;
}
export declare const MenuBar: React.FC<MenuBarProps & React.HTMLAttributes<HTMLDivElement>>;
