import React from "react";
import { useDispatch } from "react-redux";
import {
  getWeatherData,
  toggleTemp,
} from "../actions/action_creators/data_fetch";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

function RadioButtons() {
  const dispatch = useDispatch();
  const [selectTemp, setSelectTemp] = React.useState("celsius");

  const handleRefresh = () => {
    dispatch(getWeatherData());
  };

  const handleTempRadios = (event) => {
    setSelectTemp(event.target.value);
    dispatch(toggleTemp(event.target.value));
  };

  return (
    <Box
      my={3}
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <RadioGroup
        aria-label="temperature"
        name="temperature"
        value={selectTemp}
        onChange={handleTempRadios}
        row={true}>
        <FormControlLabel value="celsius" control={<Radio />} label="Celsius" />
        <FormControlLabel
          value="fahrenheit"
          control={<Radio />}
          label="Fahrenheit"
        />
      </RadioGroup>
      <Tooltip title="Refresh">
        <IconButton
          aria-label="refresh"
          component="span"
          onClick={handleRefresh}>
          <RefreshIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default RadioButtons;
