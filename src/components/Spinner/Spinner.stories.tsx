import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { Spinner } from './Spinner';

export default {
	title: 'Spinner',
	component: Spinner,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		}
	}
} as Meta;


const Template: Story<any> = ({...args}) => <>
	<Spinner {...args}></Spinner>
</>


export const Default = Template.bind({});
Default.args = {
};