import React from 'react';
import './TableData.css'

const TableData = ({ countries }) => {

    return (
        <div className="table">
            {countries.map(({ country, cases }) => (
                <tr>
                    <td>{country}</td>
                    <td><strong>{cases}</strong></td>
                </tr>
            ))}

        </div>
    );
};

export default TableData;