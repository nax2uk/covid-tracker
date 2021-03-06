import numeral from 'numeral';
export const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1))
}

export const ProcessLineGraphData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint = 0;
    for (let date in data[casesType]) {
        //console.log('data[casesType][date] >>> ' + data[casesType][date]);

        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            }
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
}

export const calculateRadius = (totalCase) => {
    return Math.sqrt((totalCase / Math.PI)) * 1000;

}

export const prettyPrintStat = (stat) =>
    stat ? `${numeral(stat).format("0.0a")}` : "0";

export const capitalise = (str) =>
    `${str[0].toUpperCase()}${str.substring(1)}`;
