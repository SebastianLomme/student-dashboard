import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip } from 'victory';

function GrafBar(props) {
    console.log("Propsdata: ", props.data)
    const getNumber = (props) => 300 / (props.data.slice(0, 10).length * 2)
    const number = getNumber(props)
    return (
        <div className="chart">

            <VictoryChart
                containerComponent={
                    <VictoryVoronoiContainer
                        height={400}
                    />
                }

            >

                <VictoryGroup
                    offset={number}
                    colorScale={["gray", "blue"]}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                >

                    <VictoryBar
                        // barWidth={2}
                        labelComponent={<VictoryTooltip />}
                        labels={props.data.map(avg => {
                            return `Moeilijkheid: ${avg.Moeilijk} Leuk: ${avg.Leuk}`
                        })}

                        barWidth={number}
                        data={props.data.slice(0, 10)}
                        // padding={20}
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={props.data.map(avg => avg.Opdracht)}
                        // alignment="start"

                        x="Opdracht"
                        y="Moeilijk"
                    />
                    <VictoryBar
                        // barWidth={2}
                        labelComponent={<VictoryTooltip />}
                        labels={props.data.map(avg => {
                            return `Moeilijkheid: ${avg.Moeilijk} Leuk: ${avg.Leuk}`
                        })}
                        data={props.data.slice(0, 10)}
                        barWidth={number}
                        padding={20}
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={props.data.map(avg => avg.Opdracht)}
                        // alignment="start"

                        x="Opdracht"
                        y="Leuk"
                    />

                </VictoryGroup>

                <VictoryAxis
                    tickFormat={props.data.map(avg => avg.Opdracht)}
                    tickValues={[1, 2, 3, 4, 5]}
                    style={{
                        tickLabels: { angle: 90, textAnchor: 'start', fontSize: 6 },
                        ticks: { stroke: "grey", size: 2 },
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

        </div>
    )
}

export default GrafBar