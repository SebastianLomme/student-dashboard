import React from 'react';
import { useSelector } from "react-redux";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip, VictoryLegend } from 'victory';



function GrafLine(props) {
    const data = props.data.filter(item => item.IsFilter === true)
    const {filter} = props
    const showInGraf = useSelector(state => state.reducer.showInGraf)
    return (
        <div className="chart">
            <VictoryChart
                containerComponent={
                    <VictoryVoronoiContainer
                        height={400}
                    />
                }
                colorScale={["blue", "gray"]}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
            >
                                <VictoryLegend x={250} y={0}
                    orientation="horizontal"
                    gutter={10}
                    data={[
                        { name: "Moeilijk", symbol: { fill: "blue", type: "star" } },
                        { name: "Leuk", symbol: { fill: "gray", type: "star" } }
                    ]}
                />

                    {showInGraf.includes("m") ?
                        <VictoryLine
                            labelComponent={<VictoryTooltip />}
                            labels={data.map(avg => {
                                return `Moeilijkheid: ${avg.Moeilijk}`
                            })}
                        style={{ data: { stroke: "blue", strokeWidth: 2, } }}
                            data={data}
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={data.map(avg => avg[filter])}
                            x={filter}
                            y="Moeilijk"
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 1000 }
                            }}
                        />
                        : null

                    }
                    {showInGraf.includes("l") ?
                        <VictoryLine
                            labelComponent={<VictoryTooltip />}
                            labels={data.map(avg => {
                                return `Leuk: ${avg.Leuk}`
                            })}
                            style={{ data: { stroke: "gray", strokeWidth: 2, } }}
                            data={data}
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={data.map(avg => avg[filter])}
                            x={filter}
                        y="Leuk"
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        />
                        : null
                    }

                <VictoryAxis
                    tickFormat={data.map(avg => avg[filter])}
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

        </div>
    )
}

export default GrafLine