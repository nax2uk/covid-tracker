import React from 'react';
import { connect } from 'react-redux';
import './TableData.css'

const TableData = ({ countries }) => {

    return (
        <div className="table__container">
            <h3>Live Cases by Country</h3>
            <div className="table__data">
                <table>
                    <thead><tr><th></th><th></th></tr></thead>
                    <tbody>
                        {
                            countries.data.map(({ country, cases }, index) => (
                                <tr key={index}>
                                    <td>{country}</td>
                                    <td><strong>{cases}</strong></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot><tr><th></th><th></th></tr></tfoot>
                </table>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { countries: state.countries };
}
export default connect(mapStateToProps)(TableData);