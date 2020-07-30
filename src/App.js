import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent
} from '@material-ui/core';
import InfoBox from './components/InfoBox/InfoBox';
import Map from './components/Map/Map';
import TableData from './components/TableData/TableData';
import LineGraph from './components/LineGraph/LineGraph';
import { sortData } from './utils';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getWorldwideData = async () => {
      try {
        const data = await axios.get("https://disease.sh/v3/covid-19/all");
        setCountryInfo(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getWorldwideData();
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const data = await axios.get("https://disease.sh/v3/covid-19/countries");
        const arrCountries = data.data.map(item => ({
          name: item.country,
          value: item.countryInfo.iso2,
        }))
        setTableData(sortData(data.data))
        setCountries(arrCountries);
      } catch (error) {
        console.error(error);
      }
    }

    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;


    const url = (countryCode === "worldwide")
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    const data = await axios.get(url);
    setCountry(countryCode);
    setCountryInfo(data.data)
    console.log(data.data.countryInfo)

  }
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map(({ value, name }, index) => (
                <MenuItem key={index} value={value}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div >
        <div className="app__stats">
          <InfoBox title="Coronavirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
          <InfoBox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
          <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} />
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <TableData countries={tableData} />
          <h3>Worldwide New Cases</h3>
          <LineGraph />
        </CardContent>
      </Card>

    </div >
  );
}

export default App;
