import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    margin: "5px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function WeatherCard({ day }) {
  const classes = useStyles();
  const { weatherData, temperature } = useSelector(
    (state) => state.weatherReducer
  );
  const dayData = weatherData.list[day];

  const options = {
    day: "numeric",
    weekday: "long",
    year: "numeric",
    month: "long",
  };
  const today = new Date(day).toLocaleDateString("en-US", options);

  const handleTTemperature = () => {
    const fahTemp = parseInt(dayData[0].main.temp);

    if (temperature === "celsius") {
      let celsius = (fahTemp - 32) * (5 / 9);
      celsius = Math.round(celsius);
      return `${celsius} \xB0C`;
    } else {
      return `${fahTemp} \xB0F`;
    }
  };

  const makeFirstUppercase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const cardData = {
    date: today,
    temp: handleTTemperature(),
    weather: makeFirstUppercase(dayData[0].weather[0].main),
    desc: makeFirstUppercase(dayData[0].weather[0].description),
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          align="center"
          gutterBottom>
          {`${cardData.date}`}
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-around"
          alignItems="center">
          <Typography className={classes.pos} color="textSecondary">
            {`${cardData.temp}`}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {`${cardData.weather}`}
          </Typography>
        </Box>
        <Typography variant="body2" component="p" align="center">
          {cardData.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
