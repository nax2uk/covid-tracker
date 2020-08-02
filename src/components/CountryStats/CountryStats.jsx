import React from 'react';
import { connect } from 'react-redux';
import InfoBox from './InfoBox/InfoBox';
import { prettyPrintStat } from '../../utils';
import { setCasesType } from '../../actions';

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
                total={prettyPrintStat(cases)}
                cases={prettyPrintStat(todayCases)} />
            <InfoBox
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                total={prettyPrintStat(recovered)}
                cases={prettyPrintStat(todayRecovered)} />
            <InfoBox
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                total={prettyPrintStat(deaths)}
                cases={prettyPrintStat(todayDeaths)} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { countryInfo: state.countryInfo }

}

export default connect(mapStateToProps, { setCasesType })(CountryStats);