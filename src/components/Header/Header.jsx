import React from 'react';
import SelectCountry from '../SelectCountry/SelectCountry';

const Header = ({ onCountryChange, countries, country, ...props }) => {
    return (
        <div className="app__header">
            <h1>COVID-19 TRACKER</h1>
            <SelectCountry country={country} countries={countries} onCountryChange={onCountryChange} />
        </div >
    );
};

export default Header;