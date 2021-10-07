import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip } from 'victory';

function GrafBar(props) {
    const data = props.data.filter(item => item.IsFilter === true)
    console.log("DataGraf: ", data)
    const getNumber = (data) => 300 / (data.slice(0, 10).length * 2)
    const number = getNumber(data)
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
                        labels={data.map(avg => {
                            return `Moeilijkheid: ${avg.Moeilijk} Leuk: ${avg.Leuk}`
                        })}

                        barWidth={number}
                        data={data.slice(0, 10)}
                        // padding={20}
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={data.map(avg => avg.Opdracht)}
                        // alignment="start"

                        x="Opdracht"
                        y="Moeilijk"
                    />
                    <VictoryBar
                        // barWidth={2}
                        labelComponent={<VictoryTooltip />}
                        labels={data.map(avg => {
                            return `Moeilijkheid: ${avg.Moeilijk} Leuk: ${avg.Leuk}`
                        })}
                        data={data.slice(0, 10)}
                        barWidth={number}
                        padding={20}
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={data.map(avg => avg.Opdracht)}
                        // alignment="start"

                        x="Opdracht"
                        y="Leuk"
                    />

                </VictoryGroup>

                <VictoryAxis
                    tickFormat={data.map(avg => avg.Opdracht)}
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