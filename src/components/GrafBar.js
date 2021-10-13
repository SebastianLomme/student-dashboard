import React from 'react';
import { useSelector } from "react-redux";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLegend } from 'victory';



function GrafBar(props) {
    const data = props.data.filter(item => item.IsFilter === true)
    const { filter } = props
    const getNumber = (data) => 300 / (data.length * 2)
    const number = getNumber(data)
    const showInGraf = useSelector(state => state.reducer.showInGraf)
    return (
        <div className="chart">
            <VictoryChart
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
                        { name: "Moeilijk", symbol: { fill: "blue", type: "star" } },
                        { name: "Leuk", symbol: { fill: "gray", type: "star" } }
                    ]}
                />
                <VictoryGroup
                    offset={number}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                >
                    {showInGraf.includes("m") ?
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            labels={data.map(avg => {
                                return `Moeilijkheid: ${avg.Moeilijk}`
                            })}
                            color={"blue"}
                            barWidth={number}
                            padding={20}
                            data={data}
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={data.map(avg => avg[filter])}
                            x={filter}
                            y="Moeilijk"
                        />
                        : null

                    }
                    {showInGraf.includes("l") ?
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            labels={data.map(avg => {
                                return `Leuk: ${avg.Leuk}`
                            })}
                            color={"gray"}
                            barWidth={number}
                            padding={20}
                            data={data}
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={data.map(avg => avg[filter])}
                            x={filter}
                            y="Leuk"
                        />
                        : null
                    }
                </VictoryGroup>

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


        </div >
    )
}

export default GrafBar