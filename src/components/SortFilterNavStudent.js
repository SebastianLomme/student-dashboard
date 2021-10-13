import React from 'react';
import DropDownButton from './DropDownButton';
import { useSelector } from 'react-redux';
import SortBy from './SortBy';
import ShowInGraf from './ShowInGraf';

function SortFilterNavStudent() {
    const assigments = useSelector(state => state.reducer.assigments);
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <DropDownButton assigments={assigments} filter={"Opdracht"} />
            <SortBy />
            <ShowInGraf />
        </div>
    );
};

export default SortFilterNavStudent;
