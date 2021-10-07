import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { filterData } from '../redux/action';
import GrafBar from './GrafBar';
import DropDownButton from "./DropDownButton"

function Home() {
    const dispatch = useDispatch()
    const assigments = useSelector(state => state.reducer.assigments)
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
                <div className="btn-group ">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        Filter op opdracht!
                    </button>
                    <ul className="dropdown-menu dropdown-scroll text-nowrap" aria-labelledby="dropdownMenuClickableInside">
                        {assigmentsSwitch}
                    </ul>
            </div>
            <DropDownButton assigments={assigments} filter={"Opdracht"} />
            <DropDownButton assigments={data} filter={"Naam"} />
                <div >
                    <GrafBar data={assigments}  />
            </div>

            </div>
    )
}

export default Home