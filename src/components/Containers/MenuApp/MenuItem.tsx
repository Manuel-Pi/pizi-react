import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CleanProps, ComponentProps, GetComponentClassNames } from "../../../utils/PiziComponent/PiziComponent";
import './menu-item.less';
import { NavLink } from "react-router-dom";

export interface MenuItemProps extends Omit<ComponentProps, 'ref'>{
    icon: IconName
    path: string
    noMenu?: boolean
}

export const MenuItem: React.FC<MenuItemProps> = ({
    icon,
    path,
	...props
}) =>   <NavLink to={path} className={GetComponentClassNames("pizi-menu-item", {color: props.color, alt: props.appearance === "fill", appearance: undefined})} {...CleanProps(props)}>
            <FontAwesomeIcon icon={icon}/>
            <label>{props.children}</label>
        </NavLink>