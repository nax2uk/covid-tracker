import React, { useState } from 'react';
import { Line } from "react-chartjs-2";
import { useEffect } from 'react';
import axios from 'axios';

const LineGraph = () => {
    const [data, setData] = useState({});
    //
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https:disease.sh/v3/covid-19/historical/all?lastdays=120");
            console.log(response.data);
        }
        fetchData();
    }, [])
    return (
        <div>
            <h3>Line Graph</h3>
            {/*      <Line
                data
                options
      />*/}
        </div>
    );
};

export default LineGraph;