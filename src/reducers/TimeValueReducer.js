const initialState = {
  timeValue: 0
};

const TimeValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TIME_VALUE': {
      return {
        ...state,
        timeValue: action.payload.timeValue
      }
    }
    default: {
      return state;
    }
  }
};

export default TimeValueReducer