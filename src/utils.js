export const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1))
}

export const ProcessChartData = (data, casesType = "cases") => {
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
    console.log(chartData);
    return chartData;
}