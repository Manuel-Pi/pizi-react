import React, { ReactElement, useEffect, useState } from 'react'
import './menubar.less'
import { ComponentProps, GetAltColorFromTest, GetComponentClassNames, GetProps } from '../../../utils/PiziComponent/PiziComponent'
import { ClassNameHelper } from '../../../utils/Utils'
import { ButtonGroup } from '../../Controls/ButtonGroup/ButtonGroup'
import { Button } from '../../Controls/Button/Button'
import { MenuItem } from './MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PiziRoute } from './MenuApp'
import { NavLink } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { registerIcons } from "../../../utils/Utils"
registerIcons(faBars, faUser)

export interface MenuBarProps extends ComponentProps<HTMLDivElement>{
	logo?: ReactElement
	user?: string
	routes: PiziRoute[]
	open?: boolean
	onSwitch?: (open: boolean) => void
	menuTop?: React.ReactElement
	menuBottom?: React.ReactElement
}

export const MenuBar: React.FC<MenuBarProps> = React.memo(({
	routes,
	user,
	open = false,
	onSwitch = () => null,
	...props
}) => {
	const [openState, setOpenState] = useState(open)
	const [closing, setClosing] = useState(false)
	
	const toggleMenu = (openMenu: boolean) => {
		if(openMenu) {
			setOpenState(true)
			onSwitch(true)
		} else {
			setClosing(true)
		}
	}

	useEffect(() => {
		if(!openState)scrollTo(0,0)
	}, [openState])

	useEffect(() => {
		if(!openState && open) {
			setOpenState(true)
		} else if(openState && !open){
			setClosing(true)
		}
	}, [open])

	const menuBarColor = GetAltColorFromTest(props.appearance === "fill", props.color)

	return <div className={ClassNameHelper("pizi-menubar", {"open": openState})}>
				<div className={GetComponentClassNames("pizi-menubar__bar border-alt-light", {
						...props, 
						alt: props.appearance !== "fill"
					})}>
					<NavLink to="/" className={ClassNameHelper("pizi-menubar__bar__logo simple", menuBarColor)}>
						{props.logo}
					</NavLink>
					{
						user && <div className={ClassNameHelper("pizi-menubar__bar__user", menuBarColor)}>
									<FontAwesomeIcon icon="user"/>
									<div>
										<label>user</label>
										<span>{user}</span>
									</div>
								</div>
					}
					<ButtonGroup {...GetProps(props)}>
						<Button icon="bars" size="large" align="right" className="menu-button" onClick={() => toggleMenu(!openState)}/>
					</ButtonGroup>
				</div>
				<div className={GetComponentClassNames("pizi-menubar__container animate__animated fill",  {
						...props, 
						alt: props.appearance !== "fill"
					}, {
						"animate__fadeInRight": openState,
						"animate__fadeOutRight": closing,
					})} 
					onAnimationEnd={() => {
						if(closing){
							setClosing(false)
							setOpenState(false)
							onSwitch(false)
						}
					}}>
					{
						props.menuTop
					}
					<nav className={"pizi-menubar__container__items"}>
					{
						routes.filter(route => !route.hideInMenu).map((route, index) => 	<MenuItem path={route.path!} 
																									icon={route.icon} 
																									key={"menu-link-" + index}
																									onClick={() => toggleMenu(false)}
																									color={props.color}
																									appearance={props.appearance}>
																								{route.title}
																							</MenuItem>)
					}
					</nav>
					{
						props.menuBottom
					}
				</div>
			</div>
})