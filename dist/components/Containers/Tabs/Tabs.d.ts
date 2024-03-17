import React from 'react';
import './tabs.less';
import { ComponentProps } from '../../../utils/PiziComponent/PiziComponent';
export interface TabProps extends Omit<ComponentProps, 'title'> {
    title?: JSX.Element | string;
    default?: boolean;
}
export declare const Tab: React.FC<TabProps>;
export interface TabsProps extends ComponentProps {
    tabsPosition?: "top" | "left";
}
export declare const Tabs: React.FC<TabsProps>;
