import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import GrafBar from './GrafBar';
import DropDownButton from "./DropDownButton"
import { resetData, showInGraf, sortData } from "../redux/action"

function Home() {
    const dispatch = useDispatch()
    const assigments = useSelector(state => state.reducer.assigments)
    const sortBy = useSelector(state => state.reducer.sortBy)
    let data = []

    switch (sortBy) {
        case "a-z":
            data = [...assigments.sort((a ,b) => a.Opdracht < b.Opdracht ? -1 : 1)]
            break
        case "z-a":
            data = [...assigments.sort((a ,b) => a.Opdracht < b.Opdracht ? 1 : -1)]
            break
        case "1-5":
            data = [...assigments.sort((a, b) => a.Moeilijk > b.Moeilijk ? 1 : -1)]
            break
        default:
            data = [...assigments]
            break
    }

    const students = useSelector(state => state.reducer.students)
    const handleClick = (payload) => {
        dispatch(showInGraf(payload))
    }
    const handleClickReset = () => {
        dispatch(resetData())
    }
    const handleClickSort = (sort) => {
        dispatch(sortData(sort))
    }
    return (
        <div className="container bg-light">
            <DropDownButton assigments={assigments} filter={"Opdracht"} />
            <DropDownButton assigments={students} filter={"Naam"} />
            <button className="btn btn-secondary m-2" onClick={() => handleClick("leuk")}>
                Show Leuk
            </button>
            <button className="btn btn-secondary m-2" onClick={() => handleClick("m")}>
                Show Moeilijk
            </button>
            <button className="btn btn-secondary m-2" onClick={() => handleClick("m-l")}>
                Show Moeilijk & leuk
            </button>
            <button className="btn btn-secondary m-2" onClick={() => handleClickReset()}>
                reset alles!
            </button>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonSort" data-bs-toggle="dropdown" aria-expanded="false">
                    Sorteer op
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSort">
                    <li onClick={() => handleClickSort("a-z")} className="dropdown-item">Sorteer bij Opdracht a-z </li>
                    <li onClick={() => handleClickSort("z-a")}className="dropdown-item">Sorteer bij Opdracht z-a </li>
                    <li onClick={() => handleClickSort("1-5")}className="dropdown-item">Sorteer bij op score moeilijk </li>
                </ul>
            </div>

            <div >
                <GrafBar data={data} filter={"Opdracht"} />
            </div>

        </div>
    )
}

export default Home