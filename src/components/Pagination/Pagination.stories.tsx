import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Pagination } from './Pagination';
import { defaultProps } from '../PiziComponent/PiziComponent';
import { Table } from '../Table/Table';
import { useState } from '@storybook/addons';

export default {
	title: 'Pagination',
	component: Pagination,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		theme: {
		  defaultValue: defaultProps.theme
		},
		appearance: {
		  defaultValue: defaultProps.appearance
		},
		itemPerPage: {
			defaultValue: 10
		}
	}
} as Meta;

const header = ["header 1", "header 2", "header 3", "header 4"];
const columns = 4;
const lines = 100;
let data: any = [];
for(let i = 0; i < lines; i++){
	const dataLine = [];
	for(let j = 0; j < columns; j++) dataLine.push("data fake test " + i + "" + j)
	data.push(dataLine);
}

const Template: Story<any> = ({...args}) => {
	const [paginatedData, setData] = useState(data);

	return <>
				<Table header={header} data={paginatedData}></Table>
				<div style={{height:"10px"}}></div>
				<Pagination {...args} onChange={setData}/>
			</>
}


export const Default = Template.bind({});
Default.args = {
	data
};





