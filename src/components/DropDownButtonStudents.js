import React from 'react';
import { useDispatch } from 'react-redux';
import { filterDataStudents, getAverage } from '../redux/action';
import { v4 as uuidv4 } from 'uuid';

function DropDownButtonStudents(props) {
    const { students } = props;

    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { id } = e.target;
        dispatch(filterDataStudents(id));
        dispatch(getAverage())
    };
    const studentsSwitch = students.map((student) => {
        return (<div className="form-check form-switch mx-2 " key={uuidv4()}>
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onChange={handleChange}
                id={`${student.Naam}`}
                checked={student.IsFilter}
            />
            <label
                className="form-check-label"
                htmlFor={`${student.Naam}`}>{student.Naam}
            </label>
        </div>);
    }
    );

    return (
        <div className="btn-group m-2">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuClickableInside"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                Filter op naam!
            </button>
            <ul
                className="dropdown-menu dropdown-scroll text-nowrap"
                aria-labelledby="dropdownMenuClickableInside"
            >
                {studentsSwitch}
            </ul>
        </div>
    );
};

export default DropDownButtonStudents;
