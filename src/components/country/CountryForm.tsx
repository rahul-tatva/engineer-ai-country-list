import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import http from '../../services/http.service';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { CssBaseline } from '@material-ui/core';
import { CountriesData } from '../../App';
import { AxiosResponse } from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface CountryFormProp{
    onCountriesSearched : (CountriesData : CountriesData[]) => void
}

const CountryForm = (props: CountryFormProp) => {
    const { onCountriesSearched } = props;
    const classes = useStyles();
    const history = useHistory();
    const [countryNameInput, setCountryNameInput] = useState('');

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form
                        className={classes.form}
                        noValidate
                        autoComplete="off"
                        onSubmit={(event) => {
                            event.preventDefault();
                            // call api with country name
                            http.get(`name/${countryNameInput}`)
                                .then((response : AxiosResponse<CountriesData[]>) => {
                                    onCountriesSearched(response.data);
                                    history.push('/countries-list');
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }}
                    >
                        <TextField
                            value={countryNameInput}
                            required
                            fullWidth
                            autoFocus
                            label="Enter Country"
                            variant="outlined"
                            onChange={(event) => {
                                const { value } = event.target;
                                setCountryNameInput(value);
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={countryNameInput.length > 0 ? false : true}
                            type="submit"
                            fullWidth
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default CountryForm;
