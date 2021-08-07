import {
  FETCH_FROM_API,
  TOGGLE_TEMPERATURE,
  TRIGGER_ERROR,
} from "../action_type/data_fetch";

//import data from "../../mockData";

const axios = require("axios");

const getWeatherData = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c714f87ec1e66ee0a71a17880ac6fc19"
      )
      .then(({ data }) => {
        let splitToDate = {};

        for (const i in data.list) {
          const i_textDate = data.list[i].dt_txt.split(" ")[0];
          if (!(i_textDate in splitToDate)) {
            for (const j in data.list) {
              const currentItem = data.list[j];
              const j_textDate = currentItem.dt_txt.split(" ")[0];
              if (i_textDate === j_textDate) {
                if (i_textDate in splitToDate) {
                  splitToDate[i_textDate].push(currentItem);
                } else {
                  splitToDate[i_textDate] = [currentItem];
                }
              }
            }
          }
        }

        dispatch({
          type: FETCH_FROM_API,
          payload: { data: { city: data.city, list: splitToDate } },
        });
      })
      .catch((err) => {
        console.error("Error-->", err);
        dispatch({
          type: TRIGGER_ERROR,
          payload: true,
        });
      });
  };
};

// const getWeatherData = () => {
//   return (dispatch) => {
//     let splitToDate = {};

//     for (const i in data.list) {
//       const i_textDate = data.list[i].dt_txt.split(" ")[0];
//       if (!(i_textDate in splitToDate)) {
//         for (const j in data.list) {
//           const currentItem = data.list[j];
//           const j_textDate = currentItem.dt_txt.split(" ")[0];
//           if (i_textDate === j_textDate) {
//             if (i_textDate in splitToDate) {
//               splitToDate[i_textDate].push(currentItem);
//             } else {
//               splitToDate[i_textDate] = [currentItem];
//             }
//           }
//         }
//       }
//     }
//     dispatch({
//       type: FETCH_FROM_API,
//       payload: { data: { city: data.city, list: splitToDate } },
//     });
//   };
// };

const toggleTemp = (temperature) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_TEMPERATURE,
      payload: temperature,
    });
  };
};

const triggerError = () => {
  return (dispatch) => {
    dispatch({
      type: TRIGGER_ERROR,
      payload: true,
    });
  };
};

export { getWeatherData, toggleTemp, triggerError };
