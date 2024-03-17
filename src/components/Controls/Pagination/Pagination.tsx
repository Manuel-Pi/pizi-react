import React, { useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { ComponentProps, InitProps } from '../../../utils/PiziComponent/PiziComponent'
import './pagination.less'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft'
import { registerIcons } from "../../../utils/Utils"
registerIcons(faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft)

export interface PaginationProps extends Omit<ComponentProps<HTMLDivElement>, "onChange">{
    data?: {[key: string]:any}[]
    itemPerPage?: number
    defaultPage?: number
    onChange?: (data: {[key: string]:any}[]) => void
}

export const Pagination: React.FC<PaginationProps> = ({
    data = [],
    defaultPage = 1,
    itemPerPage = 10,
    onChange = () => {},
	...props
}) => {
    props = InitProps(props)
    const [currentPage, setCurrentPage] = useState(defaultPage)

    const pageLength = Math.ceil(data.length / itemPerPage)

    const setPagination = (page: number) => {
        if(page < 1 || data.length < itemPerPage) page = 1
        else if(page > pageLength) page = pageLength
        setCurrentPage(page)
    }

    useEffect(() => {
        let start = (currentPage - 1) * itemPerPage
        start = start < 0 ? 0 : start
        let end = currentPage * itemPerPage
        end = end > data.length ? data.length : end
        onChange(data.slice(start, end))
    }, [currentPage, data])

    useEffect(() => {
        setCurrentPage(1)
    }, [data])

	return  <ButtonGroup className={"pizi-pagination"} {...props}>
                <Button icon="angle-double-left" disabled={currentPage === 1} onClick={() => setPagination(1)}/>
                <Button icon="angle-left" disabled={currentPage === 1} onClick={() => setPagination(currentPage - 1)}/>
                <span className="current-page">{`${currentPage}/${pageLength}`}</span>
                <Button icon="angle-right" disabled={currentPage === pageLength}  onClick={() => setPagination(currentPage + 1)}/>
                <Button icon="angle-double-right" disabled={currentPage === pageLength} onClick={() => setPagination(pageLength)}/>
            </ButtonGroup>
}