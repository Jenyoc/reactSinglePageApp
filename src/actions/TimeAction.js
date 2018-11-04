export const timeValue = (value) => {
  return {
    type: 'TIME_VALUE',
    payload:{
      timeValue: value
    }
  }
};

export const resetTime=()=>{
  return timeValue(0)
};

export const setTime = (event) => {
  for(let item of document.getElementsByClassName('timeBtn')) {
    item.classList.remove('btnActive');
  }
  event.target.classList.add('btnActive');
  return timeValue(event.target.id)
};