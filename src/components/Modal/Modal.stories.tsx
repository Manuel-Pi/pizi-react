import React, { useCallback, useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { Modal } from './Modal';
import { Heading } from '../Heading/Heading';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button/Button';
import { useArgs } from '@storybook/client-api';

export default {
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
} as Meta;

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

const Template: Story<any> = ({...args}) => {
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
											
											
export const Alert = Template.bind({});
Alert.args = {
	open: true,
	children: [
		<Heading tag="h2" className="alt">Modal Alert</Heading>,
		<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
	], 
	onClose:{
		action: 'closed'
	}
};

export const AlertClose = Template.bind({});
AlertClose.args = {
	closeButton: true,
	open: true,
	children: [
		<Heading tag="h2" className="alt">Modal Alert</Heading>,
		<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
	], 
};

export const Confirm = Template.bind({});
Confirm.args = {
	type: 'confirm',
	header: "Modal Title",
	open: true,
	children: Paragraphe
};

export const ConfirmClose = Template.bind({});
ConfirmClose.args = {
	closeButton: true,
	type: 'confirm',
	header: "Modal Title",
	open: true,
	children: Paragraphe
};

export const Custom = Template.bind({});
Custom.args = {
	type: 'custom',
	header: "Modal Title",
	open: true,
	children: Paragraphe,
	actions: [
		<Button icon="plus" name="plus" className="alt"></Button>,
		<Button icon="minus" name="minus" className="alt"></Button>,
		<Button iconRight="globe" name="globe" className="alt">Close modal</Button>
	]
};
