import React from 'react';
import DropDownButton from './DropDownButtonAssignment';
import { useSelector } from 'react-redux';
import SortBy from './SortBy';
import ShowInGraf from './ShowInGraf';

function SortFilterNavStudent() {
    const assignments = useSelector(state => state.reducer.assignments);
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <DropDownButton assignments={assignments} filter={"Opdracht"} />
            <SortBy />
            <ShowInGraf />
        </div>
    );
};

export default SortFilterNavStudent;
