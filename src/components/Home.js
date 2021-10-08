import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { filterData } from '../redux/action';
import GrafBar from './GrafBar';
import DropDownButton from "./DropDownButton"

function Home() {
    const dispatch = useDispatch()
    const assigments = useSelector(state => state.reducer.assigments)
    const students = useSelector(state => state.reducer.students)
    const data = useSelector(state => state.reducer.data)
    const handleChange = (e) => {
        const { id } = e.target
        dispatch(filterData(id))
    }

    const assigmentsSwitch = assigments.map((item) => {
        return (<div className="form-check form-switch " key={uuidv4()}>
            <input className="form-check-input" type="checkbox" role="switch" onChange={handleChange} id={`${item.Opdracht}`} checked={item.IsFilter} />
            <label className="form-check-label" htmlFor={`${item.Opdracht}`}>{item.Opdracht}</label>
        </div>)
    }
    )

    return (
        <div className="container bg-light">
            <DropDownButton assigments={assigments} filter={"Opdracht"} group={"assigments"} target={"Opdracht"}  />
            <DropDownButton assigments={students} filter={"Naam"} group={"students"} />
                <div >
                    <GrafBar data={assigments}  />
            </div>

            </div>
    )
}

export default Home