import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchWorldwideInfo, fetchCountryInfo } from './actions';
import axios from 'axios';
import { Card, CardContent } from '@material-ui/core';
import InfoBox from './components/InfoBox/InfoBox';
import Map from './components/Map/Map';
import TableData from './components/TableData/TableData';
import LineGraph from './components/LineGraph/LineGraph';
import SelectCountry from './components/SelectCountry/SelectCountry';
import { sortData } from './utils';
import "leaflet/dist/leaflet.css";
import './App.css';

function App({
  fetchWorldwideInfo,
  fetchCountryInfo,
  countryInfo, ...props }) {
  const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState('worldwide');
  // const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  // const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  // const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  /* useEffect(() => {
      const getWorldwideData = async () => {
        try {
          const response = await axios.get("https://disease.sh/v3/covid-19/all");
          setCountryInfo(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      getWorldwideData();
    }, []);
    */

  useEffect(() => {
    fetchWorldwideInfo();
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const response = await axios.get("https://disease.sh/v3/covid-19/countries");
        const arrCountries = response.data.map(item => ({
          name: item.country,
          value: item.countryInfo.iso2,
        }))
        setTableData(sortData(response.data));
        setMapCountries(response.data);
        setCountries(arrCountries);
      } catch (error) {
        console.error(error);
      }
    }

    getCountriesData();
  }, [])

  /* const onCountryChange = async (event) => {
     const countryCode = event.target.value;
     const url = (countryCode === "worldwide")
       ? "https://disease.sh/v3/covid-19/all"
       : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
 
     try {
       const response = await axios.get(url);
       setCountry(countryCode);
       setCountryInfo(response.data);
 
       if (countryCode !== "worldwide") {
         setMapCenter([response.data.countryInfo.lat, response.data.countryInfo.long]);
         setMapZoom(4);
       } else {
         setMapCenter([34.80746, -40.4796]);
         setMapZoom(3);
       }
 
     } catch (error) {
       console.error(error);
     }
   }
 */

  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    if (countryCode === "worldwide") {
      fetchWorldwideInfo();
    } else {
      fetchCountryInfo(countryCode);
    }
  }
  const { cases, todayCases, recovered, todayRecovered, deaths, todayDeaths } = countryInfo.data

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <SelectCountry country={countryInfo.country} countries={countries} onCountryChange={onCountryChange} />
        </div >
        <div className="app__stats">
          <InfoBox
            title="Coronavirus Cases"
            total={cases}
            cases={todayCases} />
          <InfoBox
            title="Recovered"
            total={recovered}
            cases={todayRecovered} />
          <InfoBox
            title="Deaths"
            total={deaths}
            cases={todayDeaths} />
        </div>
        <Map countries={mapCountries} center={countryInfo.mapCenter} zoom={countryInfo.mapZoom} />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <TableData countries={tableData} />
          <h3>Worldwide New Cases</h3>
          <LineGraph casesType={casesType} />
        </CardContent>
      </Card>

    </div >
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { countryInfo: state.countryInfo };

}

export default connect(
  mapStateToProps,
  {
    fetchWorldwideInfo,
    fetchCountryInfo
  })
  (App);
