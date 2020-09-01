import React from 'react'
import { Heading } from './Heading'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Heading> = {
	title: 'Typography/Headings',
	component: Heading,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		},
		appearance: {
		  defaultValue: 'simple'
		}
	}
}

export default meta
type Story = StoryObj<typeof Heading>

const Paragraphe = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut accumsan lorem, nec laoreet leo. Nunc pretium eu metus a placerat. Vivamus et sollicitudin sapien, in gravida dolor. Vivamus efficitur a ipsum scelerisque pulvinar. Donec ornare elit at arcu sollicitudin commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur consequat ex a finibus. Aenean feugiat viverra felis, sit amet condimentum metus accumsan at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis odio sagittis, sodales orci quis, dapibus sem. Nulla facilisi. Donec risus ligula, pharetra id ligula vitae, varius condimentum turpis. Ut feugiat molestie rhoncus.</p>

const Template = ({...args}) => <>
									<Heading tag="h1" {...args}>Heading {args.tag}</Heading>
										{Paragraphe}
								</>

const TemplateStandard = ({...args}) => 	<>
												<h1>Heading 1</h1>
												{Paragraphe}
												<h2>Heading 2</h2>
												{Paragraphe}
												<h3>Heading 3</h3>
												{Paragraphe}
												<h4>Heading 4</h4>
												{Paragraphe}
												<h5>Heading 5</h5>
												{Paragraphe}
												<h6>Heading 6</h6>
												{Paragraphe}
											</>

export const Default: Story = {
	render: Template,
	args: {
		tag: 'h1'
	}
}

export const Standard: Story = {
	render: TemplateStandard
}