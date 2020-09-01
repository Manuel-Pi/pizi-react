import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { AppScreenProps } from './AppScreen'
import { MenuApp } from './MenuApp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '../../Typography/Links/Link'

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


const AppScreen1: React.FC<AppScreenProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return  <div>
            	<h1>Home</h1>
				<Link to="/test2/test3">/test2/test3</Link>
				{Paragraphe2}
            </div>
}

const AppScreen2: React.FC<AppScreenProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
	return  <div>
            	<h1>{props.title}</h1>
				{Paragraphe2}
				{props.children}
            </div>
}

const Template = (args: any) => <>
		<MenuApp {...args}>
			<AppScreen1 title="Home" path="/" icon="home"/>
			<AppScreen2 title="Test" path="/test1" icon="headphones" noMenu/>
			<AppScreen2 title="Test2" path="/test2" icon="compass"/>
			<AppScreen2 title="Test3" path="/test3" icon="archway"/>
		</MenuApp>
</>

const TemplateSubMenu = (args: any) => <>
		<MenuApp {...args}>
			<AppScreen1 title="Home" path="/" icon="home"/>
			<AppScreen2 title="Test" path="/test1" icon="headphones" noMenu/>
			<AppScreen2 title="Test2" path="/test2" icon="compass">
				<AppScreen2 title="Test3" path="/test3" icon="archway" hideInMenu/>
			</AppScreen2>
		</MenuApp>
</>


export const Default: Story = {
	render: Template,
	args: {
		logo: <FontAwesomeIcon icon={["fab", "adn"]} style={{fontSize: "36px"}}/>,
		user: "Pizi"
	}
}

export const SubPath: Story = {
	render: TemplateSubMenu,
	args: {
		logo: <FontAwesomeIcon icon={["fab", "adn"]} style={{fontSize: "36px"}}/>,
		user: "Pizi"
	}
}