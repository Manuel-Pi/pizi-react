import { IconName } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { ComponentProps } from "../../../utils/PiziComponent/PiziComponent";
import './menu-item.less';
export interface MenuItemProps extends Omit<ComponentProps, 'ref'> {
    icon: IconName;
    path: string;
    noMenu?: boolean;
}
export declare const MenuItem: React.FC<MenuItemProps>;
