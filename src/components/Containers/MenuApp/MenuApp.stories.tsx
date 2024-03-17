import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { MenuApp } from './MenuApp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '../../Typography/Links/Link'
import { Outlet, useParams } from 'react-router-dom'

const meta: Meta<typeof MenuApp> = {
	title: 'Containers/MenuApp',
	component: MenuApp,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		},
		appearance: {
		  defaultValue: defaultProps.appearance
		}
	},
	decorators: []
}

export default meta
type Story = StoryObj<typeof MenuApp>

const Paragraphe2 = [
	<p key={7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={9}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={11}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>]


const AppScreen1: React.FC< React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return  <div>
            	<h1>Home</h1>
				<Link to="/test2/test3">/test2/test3</Link>
				{Paragraphe2}
            </div>
}

const AppScreen2: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {

	const { testData } = useParams()
	return  <div>
            	<h1>{props.title}</h1>
				<Link to="/test2/test3">/test2/test3</Link>
				{Paragraphe2}
				Test data: {testData}
				<Outlet/>
            </div>
}

const Template = (args: any) => <MenuApp {...args}/>

export const Default: Story = {
	render: Template,
	args: {
		logo: <FontAwesomeIcon icon={["fab", "adn"]} style={{fontSize: "36px"}}/>,
		user: "Pizi",
		routes: [{
			title: "Home",
			path: "/",
			element: <AppScreen1 title={"Home"}/>,
			icon: "home"
		},{
			title: "Test",
			path: "test1",
			noMenu: true,
			element: <AppScreen2 title={"Test"}/>,
			icon: "headphones"
		},{
			title: "Test 2",
			path: "test2",
			element: <AppScreen2 title={"Test 2"}/>,
			icon: "compass"
		},{
			title: "Test 3",
			path: "test3",
			element: <AppScreen2 title={"Test 3"}/>,
			icon: "archway"
		}]
	}
}

export const SubPath: Story = {
	render: Template,
	args: {
		logo: <FontAwesomeIcon icon={["fab", "adn"]} style={{fontSize: "36px"}}/>,
		user: "Pizi",
		routes: [{
			title: "Home",
			path: "/",
			element: <AppScreen1 title={"Home"}/>,
			icon: "home"
		},{
			title: "Test",
			path: "test1",
			noMenu: true,
			element: <AppScreen2 title={"Test"}/>,
			icon: "headphones"
		},{
			title: "Test 2",
			path: "test2",
			element: <AppScreen2 title={"Test 2"}></AppScreen2>,
			icon: "compass",
			children: [
				{
					title: "Test 3",
					path: ":testData",
					element: <AppScreen2 title={"Test 3"}/>,
					icon: "archway"
				}
			]
		}]
	}
}