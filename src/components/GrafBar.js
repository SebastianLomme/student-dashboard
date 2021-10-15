import React from 'react';
import { useSelector } from 'react-redux';
import { 
    VictoryBar, 
    VictoryChart, 
    VictoryAxis, 
    VictoryGroup, 
    VictoryVoronoiContainer,
    VictoryLegend,
} from 'victory';

function GrafBar(props) {
    const { filter, data } = props;
    const students = useSelector(state => state.reducer.students);
    const assignments = useSelector(state => state.reducer.assignments);
    const showInGraf = useSelector(state => state.reducer.showInGraf);
    const getNumber = (data) => 300 / (data.length * 2);
    let newData = []

    switch (filter) {
        case "Naam":
            const filterStudent = students.filter(student => student.IsFilter === true).map(student => student.Naam)
            newData = data.filter(item => filterStudent.includes(item.Naam))
            break
        case "Opdracht":
            const filterAssignment = assignments.filter(assignment => assignment.IsFilter === true).map(assignment => assignment.Opdracht)
            newData = data.filter(item => filterAssignment.includes(item.Opdracht))
            break
        default: newData = data
    }
    const number = getNumber(newData);
    return (
        <div className="chart">
            <VictoryChart
                domainPadding={number}
                containerComponent={
                    <VictoryVoronoiContainer
                        height={400}
                    />
                }
            >
                <VictoryLegend x={250} y={0}
                    orientation="horizontal"
                    gutter={10}
                    data={[
                        { name: "Moeilijk", symbol: { fill: "#CB997E", type: "star" } },
                        { name: "Leuk", symbol: { fill: "#6B705C", type: "star" } }
                    ]}
                />
                <VictoryGroup
                    offset={number}
                >
                    {showInGraf.includes("m") ?
                        <VictoryBar

                            color={"#CB997E"}
                            barWidth={number}
                            data={newData}
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={newData.map(avg => avg[filter])}
                            x={filter}
                            y="Moeilijk"
                        />
                        : null
                    }
                    {showInGraf.includes("l") ?
                        <VictoryBar
                            color={"#6B705C"}
                            barWidth={number}
                            data={newData}
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={newData.map(avg => avg[filter])}
                            x={filter}
                            y="Leuk"
                        />
                        : null
                    }
                </VictoryGroup>
                <VictoryAxis
                    tickFormat={newData.map(avg => avg[filter])}
                    tickValues={[1, 2, 3, 4, 5]}
                    style={{
                        tickLabels: { angle: 90, textAnchor: 'start', fontSize: 6 },
                        ticks: { stroke: "grey", size: 5 },
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={[1, 2, 3, 4, 5]}
                    style={{
                        tickLabels: { fontSize: 10 },
                        ticks: { stroke: "grey", size: 5 }
                    }}
                />
            </VictoryChart>
        </div >
    );
};

export default GrafBar;