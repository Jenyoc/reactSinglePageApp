export const sourcesParser = (json) => {
  const result = {};
  const times = [];
  let date = json.list[0].dt_txt.split(" ")[0];
  let maxTemp = -1;

  for (let i = 0, idVal=0; i <= json.list.length; i++) {

    if (!json.list[i] || date !== json.list[i].dt_txt.split(" ")[0]) {
      let temp = parseInt(maxTemp - 273);
      result[date] = {
        times: [...times],
        maxTemp: temp>0 ? '+' + temp : temp,
        city: json.city.name
      };

      if (json.list[i]) {
        times.length = 0;
        date = json.list[i].dt_txt.split(" ")[0];
        maxTemp = -1;
      }

      idVal=0;
    }

    if (json.list[i]) {
      let temp = parseInt(json.list[i].main.temp - 273);

      times.push({
        key:i,
        id:idVal,
        time: json.list[i].dt_txt.split(" ")[1],
        temp: temp > 0 ? "+" + temp : temp,
        windSpeed: json.list[i].wind.speed,
        description: json.list[i].weather[0].description,
        icon: json.list[i].weather[0].icon
      });

      idVal++;

      if (maxTemp < json.list[i].main.temp) {
        maxTemp = json.list[i].main.temp;
      }
    }
  }

  return result;
};