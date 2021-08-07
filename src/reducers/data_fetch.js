import {
  FETCH_FROM_API,
  TOGGLE_TEMPERATURE,
  TRIGGER_ERROR,
} from "../actions/action_type/data_fetch";

const initialState = {
  weatherData: null,
  temperature: "celsius",
  isError: false,
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FROM_API:
      return { ...state, weatherData: action.payload.data, isError: false };
    case TOGGLE_TEMPERATURE:
      return { ...state, temperature: action.payload };
    case TRIGGER_ERROR:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
}
