import React from 'react'
import GrafBar from './components/GrafBar'
import { useSelector } from 'react-redux'

function StudentInfo(props) {
    const {name} = props.match.params
    console.log(props.match.params)
    const data = useSelector(state => state.reducer.data)
    const filterData = data.filter(student => student.Naam === name)
    console.log(filterData)
    return (
        <div className="container">
            <h1>{name}</h1>
            <GrafBar data={filterData} />
        </div>
    )
}

export default StudentInfo
