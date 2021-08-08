import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Current } from "../country/CountryCard";

interface WeatherInfoModalProps{
    open : boolean,
    capitalWeatherInfo : Current,
    handleClose: () => void;
}

const WeatherInfoModal = (props : WeatherInfoModalProps) => {
    const { open, handleClose, capitalWeatherInfo } = props;

    return (
        <div>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title">
                    Weather Information
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Temperature - {capitalWeatherInfo.temperature}
                    </Typography>
                    {capitalWeatherInfo.weather_icons?.map((weatherIcon) => {
                        return <img src={weatherIcon} key={weatherIcon} alt="weather_icons" />;
                    })}
                    <Typography gutterBottom>
                        Wind Speed - {capitalWeatherInfo.wind_speed}
                    </Typography>
                    <Typography gutterBottom>
                        Precip - {capitalWeatherInfo.precip}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        fullWidth
                        variant="contained"
                        autoFocus
                        onClick={handleClose}
                        color="primary"
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default WeatherInfoModal;
