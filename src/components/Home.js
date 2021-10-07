
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const assigments = useSelector(state => state.reducer.assigments)
    const [checked, setChecked] = useState({})

    assigments.forEach(item => console.log(item.Opdracht))

    console.log(assigments)
    const handleChange = (e) => {
        const {id} = e.target
        setChecked({
            ...checked,
            [id]: !checked[id]
        })
        console.log(assigments[0])
        console.log(checked)
        console.log(e.target)
    }

    useEffect(() => {
        if (assigments.length !== 0) {
            console.log("Opdrachten", assigments)
        }
    }, [assigments])

    const assigmentsSwitch = assigments.map((item, index) => {
        return (<div className="form-check form-switch" key={uuidv4()}>
            <input className="form-check-input" type="checkbox" role="switch" onChange={handleChange} id={`${assigments[index].Opdracht}`} checked={checked[assigments[index].Opdracht]} />
            <label className="form-check-label" htmlFor={`${assigments[index].Opdracht}}`}>{item.Opdracht}</label>
        </div>)
    }
    )

    return (
        <div className="container">
            {assigmentsSwitch}
        </div>

=======
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