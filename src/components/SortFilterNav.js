import React from 'react';
import DropDownButtonAssignment from './DropDownButtonAssignment';
import DropDownButtonStudents from './DropDownButtonStudents'
import { useSelector } from 'react-redux';
import SortBy from './SortBy';
import ShowInGraf from './ShowInGraf';

function SortFilterNav() {
    const assignments = useSelector(state => state.reducer.assignments);
    const students = useSelector(state => state.reducer.students);

    return (
        <div className="d-flex flex-wrap justify-content-center">
            <DropDownButtonAssignment assignments={assignments} filter={"Opdracht"} />
            <DropDownButtonStudents students={students} />
            <SortBy />
            <ShowInGraf />
        </div>
    );
};

export default SortFilterNav;
