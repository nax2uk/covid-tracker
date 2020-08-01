import React from 'react';
import numeral from 'numeral';
import { Map as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet';
import { calculateRadius } from '../../utils';
import { casesTypeColors } from './map.options';
import './Map.css';

const showDataOnMap = (data, casesType = 'cases') => (
    data.map((country, index) => (
        <Circle
            center={
                [country.countryInfo.lat, country.countryInfo.long]
            }
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={calculateRadius(country[casesType])}
            key={index}
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