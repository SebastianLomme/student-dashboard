import React from 'react'
import { useSelector } from "react-redux";
import GrafBar from './GrafBar';
import GrafLine from "./GrafLine"
import Table from "./Table"

function SortFunction(props) {
    const { assigments, data, filter } = props
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
    return (
        <div>
            <div >
                <GrafBar data={assigmentsData} filter={filter} />
            </div>
            <div >
                <GrafLine data={assigmentsData} filter={filter} />
            </div>
            <Table data={allData} />
        </div>
    )
}

export default SortFunction
