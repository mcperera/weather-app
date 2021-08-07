import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";
import { RadioButtons, Carousel, Chart } from "../components/";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    margin: "25px auto",
  },
});

function Home() {
  const classes = useStyles();
  const { weatherData } = useSelector((state) => state.weatherReducer);
  const [seletctedDay, setSelectedDay] = useState(
    weatherData.list[Object.keys(weatherData.list)[0]]
  );

  const handleSelectDay = (value) => {
    setSelectedDay(value);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h3" align="center">
        {`Weather in ${weatherData?.city.name},  ${weatherData?.city.country}`}
      </Typography>
      <RadioButtons />
      <Carousel handleSelectDay={handleSelectDay} />
      <Chart seletctedDay={seletctedDay} />
    </Container>
  );
}

export default Home;
