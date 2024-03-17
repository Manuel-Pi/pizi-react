import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Navigate, redirect, useRouteError } from "react-router-dom"
import './error.less'
import { Link } from "../../Typography/Links/Link"
import { faGhost } from '@fortawesome/free-solid-svg-icons/faGhost'
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug'
import { ClassNameHelper, registerIcons } from "../../../utils/Utils"
import { Button } from "../../Controls/Button/Button"
registerIcons(faGhost, faBug)

export const ErrorScreen: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
	const [goHome, setGoHome] = useState(false)
	const [animationEnded, setAnimationEnded] = useState(false)
	const error = useRouteError() as any
	console.error(error)
	let errorData: any = {}
	if(error.statusText === "Not Found"){
		errorData.message = "The page you are looking for does not seem to exist!"
		errorData.icon = "ghost"
	} else {
		errorData.message = "Sorry, something unexpected occured!"
		errorData.icon = "bug"
	}

	redirect("/")

	return  <div className="pizi-container error-screen animate__animated animate__fadeIn">
            	<h1>Oops!</h1>
				<p className="simple animate__animated animate__fadeIn animate__slow">{errorData.message}</p>
				<FontAwesomeIcon icon={errorData.icon} 
					className={ClassNameHelper("main animate__animated", {
									"animate__tada": !animationEnded,
									"animate__pulse animate__infinite": animationEnded
								})} 
					onAnimationEnd={() => setTimeout( () => setAnimationEnded(true), 200)}/>
				<Button className="home-link animate__animated animate__fadeInUp" iconLeft="house" appearance="border" color="teritary" onClick={() => setGoHome(true)}>back to homepage</Button>
				{ goHome && <Navigate to="/" replace={true}/> }
            </div>
}