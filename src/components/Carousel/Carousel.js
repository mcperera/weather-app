import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { WeatherCard } from "../";
import { carouselWrap, cardItem, selectedItem } from "./Carousel.module.css";

function Carousel({ handleSelectDay }) {
  const { weatherData } = useSelector((state) => state.weatherReducer);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const currentItemRef = useRef([]);

  const objLength = Object.keys(weatherData.list).length;

  useEffect(() => {
    if (weatherData.list && weatherData.list[0]) {
      currentItemRef.current = currentItemRef?.current?.slice(0, objLength);

      setSelectedItemIndex(0);
      handleSelectDay(weatherData.list[Object.keys(weatherData.list)[0]]);
    }
  }, [weatherData.list, objLength, handleSelectDay]);

  const handleSelectedItemChange = (newIdx) => {
    if (weatherData.list && objLength > 0) {
      setSelectedItemIndex(newIdx);
      handleSelectDay(weatherData.list[Object.keys(weatherData.list)[newIdx]]);
      if (currentItemRef?.current[newIdx]) {
        currentItemRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  const handleLeftClick = () => {
    if (weatherData.list && objLength > 0) {
      let newIdx = selectedItemIndex - 1;
      if (newIdx < 0) {
        newIdx = objLength - 1;
      }
      handleSelectedItemChange(newIdx);
    }
  };

  const handleRightClick = () => {
    if (weatherData.list && objLength > 0) {
      let newIdx = selectedItemIndex + 1;
      if (newIdx >= objLength) {
        newIdx = 0;
      }
      handleSelectedItemChange(newIdx);
    }
  };

  const Controls = ({ type }) => {
    const oprions = {
      handler: type === "left" ? handleLeftClick : handleRightClick,
      icon: type === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />,
    };

    return (
      <IconButton
        aria-label="refresh"
        component="span"
        onClick={oprions.handler}>
        {oprions.icon}
      </IconButton>
    );
  };

  return (
    <Box my={3} display="flex" alignItems="center">
      <Box width={60}>{selectedItemIndex > 0 && <Controls type="left" />}</Box>
      <div className={carouselWrap}>
        {weatherData.list &&
          objLength > 0 &&
          Object.keys(weatherData.list).map((day, index) => (
            <div
              key={day}
              ref={(el) => (currentItemRef.current[index] = el)}
              className={`${cardItem} ${
                selectedItemIndex === index && selectedItem
              }`}>
              <WeatherCard day={day} />
            </div>
          ))}
      </div>
      <Box width={60}>
        {selectedItemIndex !== objLength - 1 && <Controls type="right" />}
      </Box>
    </Box>
  );
}

export default Carousel;
