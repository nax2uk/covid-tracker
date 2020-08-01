import React, { useEffect } from 'react';
import { Line } from "react-chartjs-2";
import { ProcessLineGraphData } from '../../utils';
import lineGraphOptions from './lineGraph.options';
import { connect } from 'react-redux';
import { fetchLineGraphData } from '../../actions/';

const LineGraph = ({ lineGraphData, fetchLineGraphData }) => {

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
                                data: lineGraphData,
                            }
                        ]
                    }}
                />}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {

    return { lineGraphData: ProcessLineGraphData(state.lineGraphData, ownProps.casesType) }
}

export default connect(mapStateToProps,
    { fetchLineGraphData })
    (LineGraph);