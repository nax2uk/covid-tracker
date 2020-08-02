import React from 'react';
import { connect } from 'react-redux';
import InfoBox from './InfoBox/InfoBox';
import { prettyPrintStat } from '../../utils';
import { setCasesType } from '../../actions';

const CountryStats = ({ countryInfo, setCasesType, casesType }) => {
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
                isRed
                active={casesType === "cases"}
                onClick={(e) => setCasesType("cases")}
                title="Coronavirus Cases"
                total={prettyPrintStat(cases)}
                cases={prettyPrintStat(todayCases)} />
            <InfoBox
                active={casesType === "recovered"}
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                total={prettyPrintStat(recovered)}
                cases={prettyPrintStat(todayRecovered)} />
            <InfoBox
                isRed
                active={casesType === "deaths"}
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                total={prettyPrintStat(deaths)}
                cases={prettyPrintStat(todayDeaths)} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        countryInfo: state.countryInfo,
        casesType: state.casesType
    }

}

export default connect(mapStateToProps, { setCasesType })(CountryStats);