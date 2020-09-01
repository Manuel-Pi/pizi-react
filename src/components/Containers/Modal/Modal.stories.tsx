import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Modal } from './Modal'
import { Heading } from '../../Typography/Heading/Heading'
import { action } from '@storybook/addon-actions'
import { Button } from '../../Controls/Button/Button'
import { useArgs } from '@storybook/client-api'
import { Tab } from '../Tabs/Tabs'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
	title: 'Containers/Modal',
	component: Modal,
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
	}
}

export default meta
type Story = StoryObj<typeof Modal>

const Paragraphe = [
<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>, 
<p key={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>]

const Paragraphe2 = [
	<p key={7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={9}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={11}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>,
<p key={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>]

const Template = ({...args}) => {
	const [{ open }, updateArgs] = useArgs();

	return  <>
				<div>
					<h1>Fake content</h1>
					<Button onClick={() => updateArgs({open: true})}>Open modal</Button>
					{Paragraphe2}	
				</div>
				<Modal {...args}  onClose={(name) => {
						action("Click on: ")(name)
						if(name === "plus") return false
						updateArgs({open: false})
						action("Closed by: ")(name)
					}}>	
				</Modal>
			</>
}

const TemplateTab = ({...args}) => {
	const [{ open }, updateArgs] = useArgs();

	return  <>
				<div>
					<h1>Fake content</h1>
					<Button onClick={() => updateArgs({open: true})}>Open modal</Button>
					{Paragraphe2}	
				</div>
				<Modal {...args}  onClose={(name) => {
						action("Click on: ")(name)
						if(name === "plus") return false
						updateArgs({open: false})
						action("Closed by: ")(name)
					}}>	
					<Tab title="First Tab" default>
						<Heading tag="h3">First Tab</Heading>
						<p key={0}> 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
					</Tab>
					<Tab title="Second Tab">
						<Heading tag="h3">Second Tab</Heading>
						<p key={0}> 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
					</Tab>
					<Tab title="Third Tab">
						<Heading tag="h3">Third Tab</Heading>
						<p key={0}> 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
					</Tab>
				</Modal>
			</>
}
											
export const Alert: Story = {
	render: Template,
	args: {
		open: true,
		children: [
			<Heading tag="h2" className="alt">Modal Alert</Heading>,
			<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
		]
	}
}

export const AlertClose: Story = {
	render: Template,
	args: {
		closeButton: true,
		open: true,
		children: [
			<Heading tag="h2" className="alt">Modal Alert</Heading>,
			<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
		], 
	}
}

export const Confirm: Story = {
	render: Template,
	args: {
		type: 'confirm',
		header: "Modal Title",
		open: true,
		children: Paragraphe
	}
}

export const ConfirmClose: Story = {
	render: Template,
	args: {
		closeButton: true,
		type: 'confirm',
		header: "Modal Title",
		open: true,
		children: Paragraphe
	}
}

export const Custom: Story = {
	render: Template,
	args: {
		type: 'custom',
		header: "Modal Title",
		open: true,
		children: Paragraphe,
		actions: [
			<Button icon="plus" name="plus" className="alt"></Button>,
			<Button icon="minus" name="minus" className="alt"></Button>,
			<Button iconRight="globe" name="globe" className="alt" appearance="fill">Close modal</Button>
		]
	}
}

export const TabModal: Story = {
	render: TemplateTab,
	args: {
		type: 'custom',
		open: true,
		header: "Header"
	}
}
