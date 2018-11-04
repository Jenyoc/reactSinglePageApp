export const dateValue = (value) => {
  return {
    type: "DATE_VALUE",
    payload: {
      dateValue: value
    }
  }
};

export const dayNext = (event) => {
  event.target.dataset.date < 5 ? event.target.dataset.date++ : alert('NO DATA');
  return dateValue(event.target.dataset.date);
};

export const dayBefore = (event) => {
  event.target.dataset.date > 0 ? event.target.dataset.date-- : alert('NO DATA');
  return dateValue(event.target.dataset.date);
};