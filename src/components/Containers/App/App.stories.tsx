import { PiziApp } from './App'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PiziApp> =  {
	title: 'App',
	component: PiziApp,
	argTypes: {
	}
}

export default meta
type Story = StoryObj<typeof PiziApp>

const Template = (args: any) => <>
	<PiziApp {...args}></PiziApp>
</>


export const Default: Story = {
	render: Template
}