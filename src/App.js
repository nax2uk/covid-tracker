import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
}) {

  useEffect(() => {
    fetchWorldwideInfo();
    fetchCountries();
  }, [fetchCountries, fetchWorldwideInfo])


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
        <Header onCountryChange={onCountryChange} />
        <CountryStats />
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <LineGraph />
          <TableData />
        </CardContent>
      </Card>

    </div >
  );
}

export default connect(
  null,
  {
    fetchWorldwideInfo,
    fetchCountryInfo,
    fetchCountries,
  })
  (App);
