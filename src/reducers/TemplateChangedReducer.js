const initialState = {
  templateChanged: false
};

const TemplateChangedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEMPLATE_CHANGED": {
      return {
        ...state,
        templateChanged: action.payload.templateChanged
      }
    }
    default: {
      return state
    }
  }
};

export default TemplateChangedReducer;