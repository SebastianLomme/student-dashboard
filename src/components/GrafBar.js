import React from 'react';
import {  VictoryBar, VictoryChart, VictoryAxis } from 'victory';

function GrafBar(props) {
    console.log("Props: ", props.data.assigments)
    return (
        <div className="chart">
            <VictoryChart
                domainPadding={{ x: [10, -10], y: 5 }}
                groupComponent={<g transform="translate(10, 10)" />}
            >
                <VictoryBar
                    horizontal={true}
                    barWidth={({ index }) => index * 2 + 5}
                    data={props.data.assigments}
                    x="Opdracht"
                    y="Moeilijk"
                />

                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickFormat={ props.data.assigments.Opdracht}
                    style={{
                        tickLabels: { angle: 45, textAnchor: 'start', fontSize: 6 },
                        ticks: { stroke: "grey", size: 5 }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={[1, 2, 3, 4, 5]}
                    style={{
                        tickLabels: { fontSize: 10 },
                        ticks: { stroke: "grey", size: 5 }
                    }}
                />

            </VictoryChart>
        </div>
    )
}

export default GrafBar