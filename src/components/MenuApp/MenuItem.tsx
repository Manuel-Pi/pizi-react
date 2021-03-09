import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ComponentProps, GetComponentClassNames } from "../PiziComponent/PiziComponent";
import './menu-item.less';

export interface MenuItemProps extends ComponentProps{
    icon?: IconName
}

/**
 * MenuBar UI component
 */
export const MenuItem: React.FC<MenuItemProps & React.HTMLAttributes<HTMLDivElement>> = ({
    icon,
	...props
}) =>   <div className={GetComponentClassNames("pizi-menu-item", {...props, appearance: null})}>
            <FontAwesomeIcon icon={icon}/>
            <label>{props.children}</label>
        </div>