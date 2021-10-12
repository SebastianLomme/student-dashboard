import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import GrafBar from './GrafBar';
import GrafLine from "./GrafLine"
import DropDownButton from "./DropDownButton"
import Table from "./Table"
import { resetData, showInGraf, sortData } from "../redux/action"

function Home() {
    const dispatch = useDispatch()
    const assigments = useSelector(state => state.reducer.assigments)
    const data = useSelector(state => state.reducer.data)

    const sortBy = useSelector(state => state.reducer.sortBy)
    let assigmentsData = [...assigments]
    let allData = [...data]

    switch (sortBy) {
        case "a-z-o":
            assigmentsData = assigmentsData.sort((a, b) => a.Opdracht < b.Opdracht ? -1 : 1)
            allData = allData.sort((a, b) => a.Opdracht < b.Opdracht ? -1 : 1)
            break
        case "z-a-o":
            assigmentsData = assigmentsData.sort((a, b) => a.Opdracht < b.Opdracht ? 1 : -1)
            allData = allData.sort((a, b) => a.Opdracht < b.Opdracht ? 1 : -1)
            break
            case "a-z-s":
                allData = allData.sort((a, b) => a.Naam < b.Naam ? -1 : 1)
                break
            case "z-a-s":
                allData = allData.sort((a, b) => a.Naam < b.Naam ? 1 : -1)
                break
        case "1-5-m":
            assigmentsData = assigmentsData.sort((a, b) => a.Moeilijk > b.Moeilijk ? 1 : -1)
            allData = allData.sort((a, b) => a.Moeilijk > b.Moeilijk ? 1 : -1)
            break
        case "5-1-m":
            assigmentsData = assigmentsData.sort((a, b) => a.Moeilijk < b.Moeilijk ? 1 : -1)
            allData = allData.sort((a, b) => a.Moeilijk < b.Moeilijk ? 1 : -1)
            break
        case "1-5-l":
            assigmentsData = assigmentsData.sort((a, b) => a.Leuk > b.Leuk ? 1 : -1)
            allData = allData.sort((a, b) => a.Leuk > b.Leuk ? 1 : -1)
            break
        case "5-1-l":
            assigmentsData = assigmentsData.sort((a, b) => a.Leuk < b.Leuk ? 1 : -1)
            allData = allData.sort((a, b) => a.Leuk < b.Leuk ? 1 : -1)
            break
        default:
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
                <button className="btn btn-secondary dropdown-toggle m-2" type="button" id="dropdownMenuButtonSort" data-bs-toggle="dropdown" aria-expanded="false">
                    Sorteer op
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSort">
                    <li onClick={() => handleClickSort("a-z-o")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            className="m-2"
                            checked={sortBy.includes("a-z-o")}
                            readOnly="readOnly"
                        >
                        </input>
                        <label htmlFor="flexRadioDefault1">Sorteer bij opdracht a-z</label>
                    </li>
                    <li onClick={() => handleClickSort("z-a-o")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            className="m-2"
                            checked={sortBy.includes("z-a-o")}
                            readOnly="readOnly"
                            >
                        </input>
                        <label htmlFor="flexRadioDefault2">Sorteer bij opdracht z-a</label>
                    </li>
                    <li onClick={() => handleClickSort("a-z-s")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            className="m-2"
                            checked={sortBy.includes("a-z-s")}
                            readOnly="readOnly"
                        >
                        </input>
                        <label htmlFor="flexRadioDefault3">Sorteer bij student a-z</label>
                    </li>
                    <li onClick={() => handleClickSort("z-a-s")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            className="m-2"
                            checked={sortBy.includes("z-a-s")}
                            readOnly="readOnly"
                            >
                        </input>
                        <label htmlFor="flexRadioDefault4">Sorteer bij student z-a</label>
                    </li>
                    <li onClick={() => handleClickSort("1-5-m")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault5"
                            className="m-2"
                            checked={sortBy.includes("1-5-m")}
                            readOnly="readOnly"
                            >
                        </input>
                        <label htmlFor="flexRadioDefault5">Sorteer op makelijkste opdracht</label>
                    </li>
                    <li onClick={() => handleClickSort("5-1-m")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault6"
                            className="m-2"
                            checked={sortBy.includes("5-1-m")}
                            readOnly="readOnly"
                            >
                        </input>
                        <label htmlFor="flexRadioDefault6">Sorteer op moeilijkste opdracht</label>
                    </li>
                    <li onClick={() => handleClickSort("1-5-l")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault7"
                            className="m-2"
                            checked={sortBy.includes("1-5-l")}
                            readOnly="readOnly"
                            >
                        </input>
                        <label htmlFor="flexRadioDefault7">Sorteer minst leuke opdracht</label>
                    </li>
                    <li onClick={() => handleClickSort("5-1-l")}
                        className="dropdown-item form-check">
                        <input
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault8"
                            className="m-2"
                            checked={sortBy.includes("5-1-l")}
                            readOnly="readOnly"
                            >
                        </input>
                        <label htmlFor="flexRadioDefault8">Sorteer op leukste opdracht</label>
                    </li>
                </ul>
            </div>
            <div >
                <GrafBar data={assigmentsData} filter={"Opdracht"} />
            </div>
            <div >
                <GrafLine data={assigmentsData} filter={"Opdracht"} />
            </div>
            <Table data={allData} />

        </div>
    )
}

export default Home