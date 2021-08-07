import {
  FETCH_FROM_API,
  TOGGLE_TEMPERATURE,
} from "../actions/action_type/data_fetch";

const initialState = {
  weatherData: null,
  temperature: "celsius",
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FROM_API:
      return { ...state, weatherData: action.payload.data };
    case TOGGLE_TEMPERATURE:
      return { ...state, temperature: action.payload };
    default:
      return state;
  }
}
