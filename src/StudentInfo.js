import React from 'react'
import GrafBar from './components/GrafBar'
import { useSelector } from 'react-redux'
import DropDownButton from "./components/DropDownButton"
import Table from './components/Table'


function StudentInfo(props) {
    const studentInfo = useSelector(state => state.reducer.studentInfo)
    const assigments = useSelector(state => state.reducer.assigments)
    const data = useSelector(state => state.reducer.data)
    const { name } = props.match.params
    const [filterStudentInfo] = studentInfo.filter(student => student.naam === name)
    const filterData = data.filter(student => student.Naam === name)
    return (
        <div className="container bg-light">
            <div className="row p-5">
                <div className="col-md-6 p-3 ">
                    <h3 className="text-decoration-underline">
                        {filterStudentInfo ? filterStudentInfo.naam : null}
                    </h3>
                    <h3>
                        {filterStudentInfo ? filterStudentInfo.last_name : null}
                    </h3>
                    <p className="m-0" >{`Age: 
                        ${filterStudentInfo ? filterStudentInfo.age : null}`}
                    </p>
                    <p className="m-0" >{`Email: 
                        ${filterStudentInfo ? filterStudentInfo.email : null}`}
                    </p>
                    <p className="m-0">{`Telefoonnummer: +${filterStudentInfo ? filterStudentInfo.tel : null}`}
                    </p>
                </div>
                <div className="col-md-6 p-3">
                    <img className="" src={filterStudentInfo ? filterStudentInfo.image : null} width={300} alt="" />
                </div>
            </div>
            <DropDownButton assigments={assigments} filter={"Opdracht"} target={"Opdracht"} />
            <GrafBar data={filterData} filter={"Opdracht"} />
            <Table data={filterData} />
        </div>
    )
}

export default StudentInfo
