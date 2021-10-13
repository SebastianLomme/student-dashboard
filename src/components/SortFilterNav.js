import React from 'react'
import DropDownButton from "./DropDownButton"
import { useSelector } from "react-redux";
import SortBy from './SortBy';
import ShowInGraf from './ShowInGraf';

function SortFilterNav() {
    const assigments = useSelector(state => state.reducer.assigments)
    const students = useSelector(state => state.reducer.students)
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <DropDownButton assigments={assigments} filter={"Opdracht"} />
            <DropDownButton assigments={students} filter={"Naam"} />
            <SortBy />
            <ShowInGraf />
        </div>
    )
}

export default SortFilterNav
