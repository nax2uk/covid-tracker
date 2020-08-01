import React, { useEffect } from 'react';
import { Line } from "react-chartjs-2";
import { ProcessChartData } from '../../utils';
import lineGraphOptions from './lineGraph.options';
import { connect } from 'react-redux';
import { fetchLineGraphData } from '../../actions/';

const LineGraph = ({ casesType, lineGraphData, fetchLineGraphData }) => {

    useEffect(() => {
        fetchLineGraphData();
    }, [fetchLineGraphData]);

    return (
        <div>
            <h3>Line Graph</h3>
            {lineGraphData &&
                <Line
                    options={lineGraphOptions}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204,16,52,0.5)",
                                borderColor: "#CC1034",
                                data: ProcessChartData(lineGraphData, casesType)
                            }
                        ]
                    }}
                />}
        </div>
    );
};

const mapStateToProps = (state) => {

    return { lineGraphData: state.lineGraphData }
}
export default connect(mapStateToProps,
    { fetchLineGraphData })
    (LineGraph);