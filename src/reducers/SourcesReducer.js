const initialState = {
  sources: null
};

const SourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@@sources/ELEMENTS_GET": {
      return {
        ...state,
        sources: action.payload.sources
      }
    }
    default: {
      return state
    }
  }
};

export default SourcesReducer;