import React from 'react';
import './TableData.css'

const TableData = ({ countries }) => {

    return (
        <table>
            <thead><tr><th></th><th></th></tr></thead>
            <tbody>
                {
                    countries.map(({ country, cases }, index) => (
                        <tr key={index}>
                            <td>{country}</td>
                            <td><strong>{cases}</strong></td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot><tr><th></th><th></th></tr></tfoot>
        </table>
    );
};

export default TableData;