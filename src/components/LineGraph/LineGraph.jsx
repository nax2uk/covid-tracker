import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import { ProcessChartData } from '../../utils';
import lineGraphOptions from './lineGraphOptions';
import axios from 'axios';

const LineGraph = ({ casesType, ...props }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https:disease.sh/v3/covid-19/historical/all?lastdays=120");
            const chartData = ProcessChartData(response.data, casesType);
            setData(chartData);
        }
        fetchData();

    }, [casesType]);

    return (
        <div>
            <h3>Line Graph</h3>
            {data &&
                <Line
                    options={lineGraphOptions}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204,16,52,0.5)",
                                borderColor: "#CC1034",
                                data: data,
                            }
                        ]
                    }}
                />}
        </div>
    );
};

export default LineGraph;