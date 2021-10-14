import React from 'react';
import { useSelector } from 'react-redux';
import SortFilterNavAssignment from './SortFilterNavAssignment';
import SortFunction from './SortFunction';

function AssignmentInfo(props) {
    const { opdracht } = props.match.params;
    const data = useSelector(state => state.reducer.data);
    const filterData = data.filter(assignment => assignment.Opdracht === opdracht);

    return (
        <div className="container bg-light">
            <h1>{opdracht}</h1>
            <SortFilterNavAssignment />
            <SortFunction assignments={filterData} data={filterData} filter="Naam" />
        </div>
    );
};

export default AssignmentInfo;
