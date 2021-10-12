import React from 'react';
import { useDispatch } from "react-redux";
import { filterData } from '../redux/action';
import { v4 as uuidv4 } from 'uuid';

function DropDownButton(props) {
    const { assigments, filter} = props
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { id } = e.target
        dispatch(filterData([id, filter]))
    }
    const assigmentsSwitch = assigments.map((item) => {
        return (<div className="form-check form-switch mx-2 " key={uuidv4()}>
            <input className="form-check-input" type="checkbox" role="switch" onChange={handleChange} id={`${item[filter]}`} checked={item.IsFilter} />
            <label className="form-check-label" htmlFor={`${item[filter]}`}>{item[filter]}</label>
        </div>)
    }
    )

    return (
        <div className="btn-group m-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Filter op { filter }!
            </button>
            <ul className="dropdown-menu dropdown-scroll text-nowrap" aria-labelledby="dropdownMenuClickableInside">
                {assigmentsSwitch}
            </ul>
        </div>
    )
}

export default DropDownButton
