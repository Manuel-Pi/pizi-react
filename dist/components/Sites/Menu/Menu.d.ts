import React from 'react';
import './menu.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
import { IconName } from '@fortawesome/free-solid-svg-icons';
export interface MenuProps extends ComponentProps {
    title: string;
    icon: React.ReactElement;
    links: {
        title: string;
        link: string;
        icon: IconName;
    }[];
}
/**
 * Menu UI component
 */
export declare const Menu: React.FC<MenuProps & React.HTMLAttributes<HTMLDivElement>>;
