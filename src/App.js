import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,
  Select,
  MenuItem
} from '@material-ui/core';
import './App.css';

//

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);
  const [country, setCountry] = useState('worldwide');
  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const data = await axios.get("https://disease.sh/v3/covid-19/countries");
        const arrCountries = data.data.map(item => ({

          name: item.country,
          value: item.countryInfo.iso2,

        }))
        setCountries(arrCountries);
      } catch (error) {
        console.error(error);
      }
    }

    getCountriesData();
  }, [])

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }
  return (
    <div className="app">
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

      </div>
    </div >
  );
}

export default App;
