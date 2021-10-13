import React from 'react'
import { useSelector } from 'react-redux'
import DropDownButton from "./DropDownButton"
import SortFunction from './SortFunction'

function AssigmentInfo(props) {
    const students = useSelector(state => state.reducer.students)
    const {opdracht} = props.match.params
    const data = useSelector(state => state.reducer.data)
    const filterData = data.filter(assigment => assigment.Opdracht === opdracht)

    return (
        <div className="container bg-light">
            <h1>{opdracht}</h1>
            <DropDownButton assigments={students} filter={"Naam"} />
            <SortFunction assigments={filterData} data={filterData} filter="Naam"  />
        </div>
    )
}

export default AssigmentInfo
