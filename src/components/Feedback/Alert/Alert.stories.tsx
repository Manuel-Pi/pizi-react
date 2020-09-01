import React, { useState } from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Alert, Alerts } from './Alert'
import { ButtonGroup } from '../../Controls/ButtonGroup/ButtonGroup'
import { Button } from '../../Controls/Button/Button'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> =  {
	title: 'Feedback/Alert',
	component: Alert,
	argTypes: {
		appearance: {
		  defaultValue: defaultProps.appearance
		}
	}
}
  
export default meta
type Story = StoryObj<typeof Alert>

const Template = (args: any) => {
	const[alerts, setAlerts] = useState<any[]>([]);
	return <>
		<ButtonGroup appearance="simple">
			<Button onClick={() => setAlerts([...alerts, {content: "Some random alert! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tortor eget augue egestas fringilla at ac dui. Maecenas eget elementum lacus. Nunc sed dictum risus. Curabitur feugiat interdum diam non blandit. Aenean condimentum consequat dolor in feugiat. In molestie risus sed mattis lacinia. Morbi rutrum, mauris ut mollis congue, eros metus tempor ante, sed pharetra nisi massa dapibus nisi. Suspendisse potenti. Aenean vestibulum nibh ac tempus tincidunt.", ...args}])} >Add alert</Button>
		</ButtonGroup>
		<Alerts  alerts={alerts}/>
	</>
}

export const Default: Story = {
	render: Template,
	args: {}
}