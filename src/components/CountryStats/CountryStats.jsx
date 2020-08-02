import React from 'react';
import { connect } from 'react-redux';
import InfoBox from './InfoBox/InfoBox';

const CountryStats = ({ countryInfo, setCasesType }) => {
    const {
        cases,
        todayCases,
        recovered,
        todayRecovered,
        deaths,
        todayDeaths } = countryInfo.data

    return (
        <div className="app__stats">
            <InfoBox
                onClick={(e) => setCasesType("cases")}
                title="Coronavirus Cases"
                total={cases}
                cases={todayCases} />
            <InfoBox
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                total={recovered}
                cases={todayRecovered} />
            <InfoBox
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                total={deaths}
                cases={todayDeaths} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { countryInfo: state.countryInfo }

}

export default connect(mapStateToProps)(CountryStats);