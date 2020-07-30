import React from 'react';
import { Map as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet';
import { calculateRadius } from '../../utils';
import numeral from 'numeral';
import './Map.css';

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 800,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000,
    },

};

const showDataOnMap = (data, casesType = 'cases') => (
    data.map(country => (
        <Circle
            center={
                [country.countryInfo.lat, country.countryInfo.long]
            }
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={calculateRadius(country[casesType])}
        >

            <Popup>
                <div className="popup">
                    <div
                        className="popup__info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <div className="popup__info-countryname">{country.country}</div>
                    <div className="popup__info-cases">Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="popup__info-recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="popup__info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>

        </Circle>
    ))

);
const Map = ({ countries, casesType, center, zoom }) => {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">
                    OpenStreetMap</a> contributors' />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
};

export default Map;