import React from 'react';
import DropDownButton from './DropDownButton';
import { useSelector } from 'react-redux';
import SortBy from './SortBy';
import ShowInGraf from './ShowInGraf';

function SortFilterNavAssigment() {
    const students = useSelector(state => state.reducer.students);
    
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <DropDownButton assigments={students} filter={"Naam"} />
            <SortBy />
            <ShowInGraf />
        </div>
    );
};

export default SortFilterNavAssigment;
