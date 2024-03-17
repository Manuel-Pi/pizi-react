import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Table } from './Table'
import { Pagination } from '../../Controls/Pagination/Pagination'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Table> = {
	title: 'Data/Table',
	component: Table,
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
}
  
export default meta
type Story = StoryObj<typeof Table>

const header = ["header 1", "header 2", "header 3", "header 4"]

const createData = (lines = 10, columns = 4) => {
	let data: string[][] = [];
	for(let i = 0; i < lines; i++){
		const dataLine: string[] = [];
		for(let j = 0; j < columns; j++) dataLine.push("data fake test " + i + "" + j)
		data.push(dataLine);
	}
	return data
}

const Template = (args: any) => <Table header={[]} data={[]} {...args} style={{maxHeight: "300px"}}></Table>
const TemplatePagination  = (args: any) => <Table header={[]} data={[]} {...args} style={{maxHeight: "300px"}}><Pagination/></Table>

export const Default: Story = {
	render: Template,
	args: {
		header,
		data: createData(),
		defaultOrder: {
			direction: 'up',
			header: header[2]
		}
	}
}

export const OneColumn: Story = {
	render: Template,
	args: {
		header: ["Item list"],
		data: [["Table item 1"], ["Table item 2"], ["Table item 3"], ["Table item 4"]],
		defaultOrder: {
			direction: 'up',
			header: header[1]
		}
	}
}

export const PaginationTable: Story = {
	render: TemplatePagination,
	args: {
		header,
		data: createData(100),
		defaultOrder: {
			direction: 'up',
			header: header[2]
		}
	}
}