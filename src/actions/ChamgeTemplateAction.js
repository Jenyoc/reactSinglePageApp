export const templateChanged = (value) => {
  return {
    type: 'TEMPLATE_CHANGED',
    payload: {
      templateChanged: value
    }
  }
};

export const changeTemplate = (event) => {
  event.target.checked = !event.target.checked;
  return templateChanged(event.target.checked)
};