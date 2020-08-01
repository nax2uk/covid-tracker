import React from 'react';
import { connect } from 'react-redux';
import InfoBox from './InfoBox/InfoBox';

const CountryStats = ({ countryInfo }) => {
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
    );
};

const mapStateToProps = (state) => {
    return { countryInfo: state.countryInfo }

}

export default connect(mapStateToProps)(CountryStats);