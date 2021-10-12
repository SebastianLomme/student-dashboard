import React from 'react'
import GrafBar from './components/GrafBar'
import { useSelector } from 'react-redux'
import DropDownButton from "./components/DropDownButton"
import Table from './components/Table'

function StudentInfo(props) {
    const assigments = useSelector(state => state.reducer.assigments)
    const {name} = props.match.params
    const data = useSelector(state => state.reducer.data)
    const filterData = data.filter(student => student.Naam === name)
    return (
        <div className="container bg-light">

            <h1>{name}</h1>
            <DropDownButton assigments={assigments} filter={"Opdracht"}  target={"Opdracht"}  />
            <GrafBar data={filterData} filter={"Opdracht"} />
            <Table data={filterData} />
        </div>
    )
}

export default StudentInfo
