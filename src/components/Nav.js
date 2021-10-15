import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Nav() {
    const students = useSelector(state => state.reducer.students);
    const assignments = useSelector(state => state.reducer.assignments);
    const studentArray = students.map(student => (
        <p key={uuidv4()}>
            <Link className="dropdown-item" to={`/student/${student.Naam}`}>{student.Naam}</Link>
        </p>
    ));
    const assignmentsArray = assignments.map(assignment => (
        <p key={uuidv4()}>
            <Link className="dropdown-item" to={`/assignment/${assignment.Opdracht}`}>{assignment.Opdracht}</Link>
        </p>
    ));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid  ">
                <Link className="navbar-brand" to="/"> Winc Academy </Link>
                <div className="dropdown  ms-auto pe-2">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonStudent"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Kies een student
                    </button>
                    <div
                        className="dropdown-menu dropdown-scroll"
                        aria-labelledby="dropdownMenuButtonStudent"
                    >
                        {studentArray}
                    </div>
                </div>
                <div className="dropdown pe-2">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonAssignment"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Kies een opdracht
                    </button>
                    <div
                        className="dropdown-menu dropdown-scroll"
                        aria-labelledby="dropdownMenuButtonAssignment"
                    >
                        {assignmentsArray}
                    </div>
                </div>
                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse ms-auto "
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link className="nav-link active pe-5" aria-current="page" to="/">Home</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;