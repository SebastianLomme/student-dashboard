import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import GrafBar from './GrafBar';
import DropDownButton from "./DropDownButton"
import {resetData, showInGraf} from "../redux/action"

function Home() {
    const dispatch = useDispatch()
    const assigments = useSelector(state => state.reducer.assigments)
    const students = useSelector(state => state.reducer.students)
    const handleClick = (payload) => {
        dispatch(showInGraf(payload))
    }
    const handleClickReset = () => {
        dispatch(resetData())
    }
    return (
        <div className="container bg-light">
            <DropDownButton assigments={assigments} filter={"Opdracht"}  />
            <DropDownButton assigments={students} filter={"Naam"} />
            <button className="btn btn-primary m-2"  onClick={() => handleClick("leuk")}>
                Show Leuk
            </button>
            <button className="btn btn-primary m-2"  onClick={() => handleClick("m")}>
                Show Moeilijk
            </button>
            <button className="btn btn-primary m-2"  onClick={() => handleClick("m-l")}>
                Show Moeilijk & leuk
            </button>
            <button className="btn btn-primary m-2"  onClick={() => handleClickReset()}>
                reset
            </button>

                <div >
                    <GrafBar data={assigments} filter={"Opdracht"}  />
            </div>

            </div>
    )
}

export default Home