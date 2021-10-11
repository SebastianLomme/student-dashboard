import React from 'react'
import GrafBar from './components/GrafBar'
import { useSelector } from 'react-redux'
import DropDownButton from "./components/DropDownButton"

function AssigmentInfo(props) {
    const students = useSelector(state => state.reducer.students)
    const {opdracht} = props.match.params
    const data = useSelector(state => state.reducer.data)
    const filterData = data.filter(assigment => assigment.Opdracht === opdracht)
    console.log("filter: ",filterData)
    return (
        <div className="container bg-light">

            <h1>{opdracht}</h1>
            <DropDownButton assigments={students} filter={"Naam"} />
            <GrafBar data={filterData} filter={"Naam"}/>
        </div>
    )
}

export default AssigmentInfo
