import React from 'react';
import { useSelector } from 'react-redux';
import { 
    VictoryLine, 
    VictoryChart, 
    VictoryAxis, 
    VictoryVoronoiContainer, 
    VictoryTooltip, 
    VictoryLegend,
} from 'victory';

function GrafLine(props) {
    const { filter, data } = props;
    const students = useSelector(state => state.reducer.students);
    const assignments = useSelector(state => state.reducer.assignments);
    const showInGraf = useSelector(state => state.reducer.showInGraf);
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


console.log("newData: ",newData)
    return (
        <div className="chart">
            <VictoryChart
                containerComponent={
                    <VictoryVoronoiContainer
                        height={400}
                    />
                }
                // animate={{
                //     duration: 2000,
                //     onLoad: { duration: 1000 }
                // }}
            >
                <VictoryLegend x={250} y={0}
                    orientation="horizontal"
                    gutter={10}
                    data={[
                        { name: "Moeilijk", symbol: { fill: "#CB997E", type: "star" } },
                        { name: "Leuk", symbol: { fill: "#6B705C", type: "star" } }
                    ]}
                />
                {showInGraf.includes("m") ?
                    <VictoryLine
                        labelComponent={<VictoryTooltip />}
                        labels={data.map(avg => {
                            return `Moeilijkheid: ${avg.Moeilijk}`
                        })}
                        style={{ data: { stroke: "#CB997E", strokeWidth: 2, } }}
                        data={newData}
                        tickValues={[0, 1, 2, 3, 4, 5]}
                        tickFormat={newData.map(avg => avg[filter])}
                        x={filter}
                        y="Moeilijk"
                        // animate={{
                        //     duration: 2000,
                        //     onLoad: { duration: 1000 }
                        // }}
                    />
                    : null
                }
                {showInGraf.includes("l") ?
                    <VictoryLine
                        // labelComponent={<VictoryTooltip />}
                        // labels={data.map(avg => {
                        //     return `Leuk: ${avg.Leuk}`
                        // })}
                        style={{ data: { stroke: "#6B705C", strokeWidth: 2, } }}
                        data={newData}
                        tickValues={[0, 1, 2, 3, 4, 5]}
                        tickFormat={newData.map(avg => avg[filter])}
                        x={filter}
                        y="Leuk"
                        // animate={{
                        //     duration: 2000,
                        //     onLoad: { duration: 1000 }
                        // }}
                    />
                    : null
                }
                <VictoryAxis
                    tickFormat={newData.map(avg => avg[filter])}
                    tickValues={[0, 1, 2, 3, 4, 5]}
                    style={{
                        tickLabels: { angle: 90, textAnchor: 'start', fontSize: 6 },
                        ticks: { stroke: "grey", size: 5 },
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    tickValues={[0, 1, 2, 3, 4, 5]}
                    tickFormat={[0, 1, 2, 3, 4, 5]}
                    style={{
                        tickLabels: { fontSize: 10 },
                        ticks: { stroke: "grey", size: 5 }
                    }}
                />
            </VictoryChart>
        </div>
    );
};

export default GrafLine;