import React from 'react';
import { useSelector } from 'react-redux';
import GrafBar from './GrafBar';
import GrafLine from './GrafLine';
import Table from './Table';

function SortFunction(props) {
    const { assignments, data, filter } = props;
    const sortBy = useSelector(state => state.reducer.sortBy);
    let assignmentsData = [...assignments];
    let allData = [...data];

    switch (sortBy) {
        case "a-z-o":
            assignmentsData = assignmentsData.sort((first, second) => first.Opdracht < second.Opdracht ? -1 : 1);
            allData = allData.sort((first, second) => first.Opdracht < second.Opdracht ? -1 : 1);
            break;
        case "z-a-o":
            assignmentsData = assignmentsData.sort((first, second) => first.Opdracht < second.Opdracht ? 1 : -1);
            allData = allData.sort((first, second) => first.Opdracht < second.Opdracht ? 1 : -1);
            break;
        case "a-z-s":
            allData = allData.sort((first, second) => first.Naam < second.Naam ? -1 : 1);
            break;
        case "z-a-s":
            allData = allData.sort((first, second) => first.Naam < second.Naam ? 1 : -1);
            break;
        case "1-5-m":
            assignmentsData = assignmentsData.sort((first, second) => first.Moeilijk > second.Moeilijk ? 1 : -1);
            allData = allData.sort((first, second) => first.Moeilijk > second.Moeilijk ? 1 : -1);
            break;
        case "5-1-m":
            assignmentsData = assignmentsData.sort((first, second) => first.Moeilijk < second.Moeilijk ? 1 : -1);
            allData = allData.sort((first, second) => first.Moeilijk < second.Moeilijk ? 1 : -1);
            break;
        case "1-5-l":
            assignmentsData = assignmentsData.sort((first, second) => first.Leuk > second.Leuk ? 1 : -1);
            allData = allData.sort((first, second) => first.Leuk > second.Leuk ? 1 : -1);
            break;
        case "5-1-l":
            assignmentsData = assignmentsData.sort((first, second) => first.Leuk < second.Leuk ? 1 : -1);
            allData = allData.sort((first, second) => first.Leuk < second.Leuk ? 1 : -1);
            break;
        default:
            break;
    };

    return (
        <div>
            <div >
                <GrafBar data={assignmentsData} filter={filter} />
            </div>
            <div >
                <GrafLine data={assignmentsData} filter={filter} />
            </div>
            <Table data={allData} />
        </div>
    );
};

export default SortFunction;
