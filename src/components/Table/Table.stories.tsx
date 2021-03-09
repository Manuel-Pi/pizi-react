import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { defaultProps } from '../PiziComponent/PiziComponent';
import { Table } from './Table';
import { Pagination } from '../Pagination/Pagination';

export default {
	title: 'Table',
	component: Table,
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
} as Meta;

const header = ["header 1", "header 2", "header 3", "header 4"];

const createData = (lines = 10, columns = 4) => {
	let data = [];
	for(let i = 0; i < lines; i++){
		const dataLine = [];
		for(let j = 0; j < columns; j++) dataLine.push("data fake test " + i + "" + j)
		data.push(dataLine);
	}
	return data;
}

const Template: Story<any> = ({...args}) => <Table {...args}></Table>
const TemplatePagination: Story<any> = ({...args}) => <Table {...args}><Pagination/></Table>


export const Default = Template.bind({});
Default.args = {
	header,
	data: createData(),
	defaultOrder: {
		direction: 'up',
		header: header[2]
	}
};

export const PaginationTable = TemplatePagination.bind({});
PaginationTable.args = {
	header,
	data: createData(100),
	defaultOrder: {
		direction: 'up',
		header: header[2]
	}
};





