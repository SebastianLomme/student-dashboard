import React from 'react';
import { useSelector } from 'react-redux';
import SortFilterNav from './SortFilterNav';
import SortFunction from './SortFunction';

function Home() {
    const assigments = useSelector(state => state.reducer.assigments);
    const data = useSelector(state => state.reducer.data);

    return (
        <div className="container bg-light">
            <SortFilterNav />
            <SortFunction assigments={assigments} data={data} filter="Opdracht" />
        </div>
    );
};

export default Home;