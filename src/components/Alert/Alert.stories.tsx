import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { Alert, Alerts } from './Alert';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Button } from '../Button/Button';

export default {
	title: 'Alert',
	component: Alert,
	argTypes: {
		appearance: {
		  defaultValue: defaultProps.appearance
		}
	}
} as Meta;

const alertEl =  <Alert></Alert>;


const Template: Story<any> = ({...args}) => {

	const[alerts, setAlerts] = useState([]);

	return <>
		<ButtonGroup appearance="simple">
			<Button onClick={() => setAlerts([...alerts, {content: "Some random alert!", ...args}])} >Add alert</Button>
		</ButtonGroup>

		<Alerts  alerts={alerts}/>
	</>
}



export const Default = Template.bind({});
Default.args = {
};