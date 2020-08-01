import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const SelectCountry = ({ countries, country, onCountryChange }) => {

    return (
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

    );
};

export default SelectCountry;
