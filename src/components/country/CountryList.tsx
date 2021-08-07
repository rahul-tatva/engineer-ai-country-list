import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { CountriesData } from '../../App';
import CountryCard from './CountryCard';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

interface CountryListProp{
    countriesList : CountriesData[]
}

const CountryList = (props : CountryListProp) => {
    const classes = useStyles();

    const { countriesList } = props;
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {countriesList.map((country) => {
                        return (
                            <Grid item key={country.name} xs={12} sm={6} md={4}>
                                <CountryCard country={country} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    );
};

export default CountryList;
