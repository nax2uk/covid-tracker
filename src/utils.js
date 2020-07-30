export const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1))
}

export const ProcessChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;
    data[casesType].cases.forEach((date) => {
        if (lastDataPoint) {
            const newDataPoint = {
                x: data,
                y: data[casesType][date] - lastDataPoint,
            }
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    })
    return chartData;
}