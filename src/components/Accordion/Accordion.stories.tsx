import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { Accordion, AccordionItem } from './Accordion';
import { Heading } from '../Heading/Heading';

export default {
	title: 'Containers/Accordion',
	component: Accordion,
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


const Template: Story<any> = ({...args}) => <Accordion {...args}>
												<AccordionItem title="Item 1">
													<Heading tag="h4">First Item</Heading>
													<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
												</AccordionItem>
												<AccordionItem title="Item 2">
													<Heading tag="h4">Second Item</Heading>
													<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
												</AccordionItem>
												<AccordionItem title="Item 3">
													<Heading tag="h4">Third Item</Heading>
													<p key={0}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>
												</AccordionItem>
											</Accordion>


export const Default = Template.bind({});
Default.args = {
};