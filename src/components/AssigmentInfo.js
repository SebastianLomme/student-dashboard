import React from 'react';
import { useSelector } from 'react-redux';
import SortFilterNavAssigment from './SortFilterNavAssigment';
import SortFunction from './SortFunction';

function AssigmentInfo(props) {
    const { opdracht } = props.match.params;
    const data = useSelector(state => state.reducer.data);
    const filterData = data.filter(assigment => assigment.Opdracht === opdracht);

    return (
        <div className="container bg-light">
            <h1>{opdracht}</h1>
            <SortFilterNavAssigment />
            <SortFunction assigments={filterData} data={filterData} filter="Naam" />
        </div>
    );
};

export default AssigmentInfo;
