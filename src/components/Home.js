import React from 'react';
import { useSelector } from 'react-redux';
import SortFilterNav from './SortFilterNav';
import SortFunction from './SortFunction';

function Home() {
    const assignments = useSelector(state => state.reducer.assignments);
    const data = useSelector(state => state.reducer.data);

    return (
        <div className="container bg-light">
            <SortFilterNav />
            <SortFunction assignments={assignments} data={data} filter="Opdracht" />
        </div>
    );
};

export default Home;