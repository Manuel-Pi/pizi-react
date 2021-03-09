import React, { ReactElement, useEffect, useState } from 'react';
import './menubar.less';
import { ComponentProps, GetAltColor, GetComponentClassNames } from '../PiziComponent/PiziComponent';
import { CreateClassName } from '../../utils/ClassNameHelper';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';
import { Link, RouteComponentProps, Router } from '@reach/router';
import { MenuItem } from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface MenuBarProps extends ComponentProps{
	logo?: ReactElement
	user?: string
	screens: ReactElement[]
}

/**
 * MenuBar UI component
 */
export const MenuBar: React.FC<MenuBarProps & React.HTMLAttributes<HTMLDivElement>> = ({
	screens,
	user,
	...props
}) => {
	const [open, setOpen] = useState(false);
	const [closing, setClosing] = useState(false);
	
	const toggleMenu = (openMenu: boolean) => {
		if(openMenu) {
			setOpen(true)
		} else {
			setClosing(true)
		}
		
	}

	useEffect(() => {
		if(!open)scrollTo(0,0)
	}, [open])

	return <div className={CreateClassName("pizi-menubar", {"open": open})}>
				<div className={CreateClassName(GetComponentClassNames("pizi-menubar__bar border-alt-light", props))}>
					<div className="pizi-menubar__bar__logo">
						{props.logo}
					</div>
					{
						user && <div className="pizi-menubar__bar__user">
									<FontAwesomeIcon icon="user"/>
									<div>
										<label>user</label>
										<span>{user}</span>
									</div>
								</div>
					}
					<ButtonGroup {...{color: props.color, appearance: props.appearance}}>
						<Button icon="bars" size="large" align="right" className="menu-button" onClick={() => toggleMenu(!open)}/>
					</ButtonGroup>
				</div>
				<div className={CreateClassName(GetComponentClassNames("pizi-menubar__container animate__animated fill", props), {
					[props.color]: props.color,
					"animate__fadeInRight": open,
					"animate__fadeOutRight": closing,
				})} onAnimationEnd={() => {
					if(closing){
						setClosing(false)
						setOpen(false)
					}
				}}>

					<div className="pizi-menubar__container__items">
					{
						screens.map(screen => 	<Link to={screen.props.path} onClick={() => toggleMenu(false)}>
													<MenuItem icon={screen.props.icon} color={GetAltColor(props.color)}>{screen.props.title}</MenuItem>
												</Link>)
					}
					</div>
				</div>
			</div>
			
};