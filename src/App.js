import React, { useEffect } from "react";

import { Loading, Home } from "./pages/";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherData } from "./actions/action_creators/data_fetch";

function App() {
  const { weatherData } = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getWeatherData());
    }, 1000);
  }, [dispatch]);

  if (weatherData !== null) {
    return <Home />;
  } else {
    return <Loading />;
  }
}

export default App;
