const initialState = {
  dateValue: 0
};

const DateValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATE_VALUE" : {
      return {
        ...state,
        dateValue: action.payload.dateValue
      }
    }
    default: {
      return state;
    }
  }
};

export default DateValueReducer;