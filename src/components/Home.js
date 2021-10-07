import React from 'react';
import GrafBar from './GrafBar';
import { useSelector } from 'react-redux'

function Home() {
    const data = useSelector(state => state.reducer.assigments)

    return (
        <div className="container">
            <h1>Home</h1>
            <GrafBar data={data} />
        </div>
    )
    
}


export default Home