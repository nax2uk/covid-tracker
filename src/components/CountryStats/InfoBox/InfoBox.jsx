import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
//import { prettyPrintState } from '../../utils';
import './InfoBox.css';

const InfoBox = ({ title, cases, total, onClick }) => {
    return (
        <Card className="infoBox" onClick={onClick}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className="infoBox__cases">{cases} Today</h2>
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                    </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoBox;