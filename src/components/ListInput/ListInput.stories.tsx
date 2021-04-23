import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { ListInput } from './ListInput';

export default {
	title: 'Forms/ListInput',
	component: ListInput,
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


const Template: Story<any> = ({...args}) => <ListInput {...args}></ListInput>


export const Horizontal = Template.bind({});
Horizontal.args = {
	label: "Label for list input",
	type: 'horizontal',
	values: ["uno", "dos", "tres", "quatro", "cinco", "seis", "siete", "ocho", "nueve", "asdasdasdasd sadasd sad"],
	defaultValue: "qasdsauatro"
};

export const Vertical = Template.bind({});
Vertical.args = {
	label: "Label for list input",
	type: 'vertical',
	values: ["uno", "dos", "tres", "quatro", "cinco", "seis", "siete", "ocho", "nueve", "asdasdasdasd sadasd sad"],
	defaultValue: "qasdsauatro"
};