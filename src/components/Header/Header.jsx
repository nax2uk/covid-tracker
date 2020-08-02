import React from 'react';
import { connect } from 'react-redux';
import SelectCountry from './SelectCountry/SelectCountry';

const Header = ({ onCountryChange, countries, countryInfo }) => {
    return (
        <div className="app__header">
            <h1>COVID-19 TRACKER</h1>
            <SelectCountry country={countryInfo.country} countries={countries.nameAndValue} onCountryChange={onCountryChange} />
        </div >
    );
};

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        countryInfo: state.countryInfo,
    }
}

export default connect(mapStateToProps)(Header);