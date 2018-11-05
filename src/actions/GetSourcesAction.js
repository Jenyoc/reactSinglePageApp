import {sourcesParser} from "./sourcesParser";

export const getElementsList = (json) => {
  return {
    type: '@@sources/ELEMENTS_GET',
    payload: {
      sources: json || []
    }
  }
};

export const getElementsError = () => {
  alert('city not found')
};

export const getElementsJSON = (city) => {
  const uri = "https:/api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=05b4798836b87272780eca72486a4dab";
  return dispatch => {
    dispatch(getElementsList());
    return fetch(uri)
      .then(response => response.json())
      .then(post => {
        const result = sourcesParser(post);
        return dispatch(getElementsList(result))
      })
      .catch(err => dispatch(getElementsError()));
  };
};