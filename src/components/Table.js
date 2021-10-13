import React from 'react'
import { v4 as uuidv4 } from 'uuid';


function Table({data}) {
    const dataArray = data.map(item => {
        return (
            <tr key={uuidv4()}>
                <th scope="row">{item.Naam}</th>
                <td>{item.Opdracht}</td>
                <td>{item.Moeilijk}</td>
                <td>{item.Leuk}</td>
            </tr>
        )

    })

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Student</th>
                        <th scope="col">Opdracht</th>
                        <th scope="col">Score Moeilijk</th>
                        <th scope="col">Score Leuk</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray}
                </tbody>
            </table>
        </div>
    )
}

export default Table
