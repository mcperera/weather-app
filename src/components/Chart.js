import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function Chart({ seletctedDay }) {
  const { temperature } = useSelector((state) => state.weatherReducer);

  const onvertTime = (time24) => {
    const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const period = +sHours < 12 ? "AM" : "PM";
    const hours = +sHours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
  };

  const values = seletctedDay.map((item) => {
    const time = item.dt_txt.split(" ")[1];
    let temp = parseInt(item.main.temp);

    if (temperature === "celsius") {
      let celsius = (temp - 32) * (5 / 9);
      celsius = Math.round(celsius);
      temp = celsius;
    }

    const arrayItem = { label: onvertTime(time), value: temp };
    return arrayItem;
  });

  const data = {
    chart: {
      xAxisName: "Time",
      yAxisName: "Temperature",
      numberSuffix: `${temperature === "celsius" ? " \xB0C" : " \xB0F"}`,
      theme: "fusion",
    },
    data: values,
  };

  const chartConfigs = {
    type: "column2d",
    width: window.innerWidth > 640 ? 500 : 400,
    height: 370,
    dataFormat: "json",
    dataSource: data,
  };

  return (
    <Box mt={4} display="flex" justifyContent="center" alignItems="center">
      <ReactFC {...chartConfigs} />
    </Box>
  );
}

export default Chart;
