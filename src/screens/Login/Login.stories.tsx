import type { Meta, StoryObj } from '@storybook/react'
import { Login } from './Login'
import { BrowserRouter } from 'react-router'

const meta: Meta<typeof Login> =  {
	title: 'Views/Login',
	component: Login,
}

export default meta
type Story = StoryObj<typeof Login>


export const Default: Story = {
	render: (args) => <BrowserRouter>
						<div className='pizi-container' style={{width: "100%", height: "100vh"}}>
							<Login {...args}/>
						</div>
					</BrowserRouter>,
	args: {
		loginUrl: "/login",
		forgotPasswordUrl: "/forgot-password",
		user: null
	}
}