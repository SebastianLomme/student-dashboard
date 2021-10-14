import React from 'react';
import DropDownButtonStudents from './DropDownButtonStudents';
import { useSelector } from 'react-redux';
import SortBy from './SortBy';
import ShowInGraf from './ShowInGraf';

function SortFilterNavAssignment() {
    const students = useSelector(state => state.reducer.students);

    return (
        <div className="d-flex flex-wrap justify-content-center">
            <DropDownButtonStudents students={students} />
            <SortBy />
            <ShowInGraf />
        </div>
    );
};

export default SortFilterNavAssignment;
