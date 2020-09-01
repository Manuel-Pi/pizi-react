import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'
import { MemoryRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'

const meta: Meta<typeof Link> = {
	title: 'Typography/Links',
	component: Link,
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
type Story = StoryObj<typeof Link>

const Template = (args: any) => <MemoryRouter initialEntries={['/']}><Link {...args}>Link test</Link></MemoryRouter>

export const Default: Story = {
	render: Template,
	args: {
		to: "/fake"
	}
}
