import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useRouteError } from "react-router-dom"
import './error.less'
import { Link } from "../../Typography/Links/Link"

export const ErrorScreen: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
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

	return  <div className="pizi-container error-screen">
            	<h1>Oops!</h1>
				<p className="simple">{errorData.message}</p>
				<FontAwesomeIcon icon={errorData.icon} className="main"/>
				<Link to={"/"} size="large">Home page</Link>
            </div>
}