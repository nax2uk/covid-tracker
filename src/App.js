import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchWorldwideInfo, fetchCountryInfo, fetchCountries } from './actions';
import { Card, CardContent } from '@material-ui/core';
import CountryStats from './components/CountryStats/CountryStats';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import TableData from './components/TableData/TableData';
import LineGraph from './components/LineGraph/LineGraph';
import './App.css';

function App({
  fetchWorldwideInfo,
  fetchCountryInfo,
  fetchCountries,
  countryInfo,
  countries }) {

  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetchWorldwideInfo();
    fetchCountries();
  }, [])


  const onCountryChange = (e) => {
    const countryCode = e.target.value;
    if (countryCode === "worldwide") {
      fetchWorldwideInfo();
    } else {
      fetchCountryInfo(countryCode);
    }
  }

  return (
    <div className="app">
      <div className="app__left">
        <Header countries={countries.nameAndValue} country={countryInfo.country} onCountryChange={onCountryChange} />
        <CountryStats />
        <Map countries={countries.data} center={countryInfo.mapCenter} zoom={countryInfo.mapZoom} casesType={casesType} />
      </div>

      <Card className="app__right">
        <CardContent>
          <LineGraph casesType={casesType} />
          <TableData />
        </CardContent>
      </Card>

    </div >
  );
}

const mapStateToProps = (state) => {

  return {
    countryInfo: state.countryInfo,
    countries: state.countries,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchWorldwideInfo,
    fetchCountryInfo,
    fetchCountries,
  })
  (App);
