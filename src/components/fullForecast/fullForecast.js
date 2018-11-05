import React,{Component} from "react";
import  withViewFullForecast from './fullForecastWrapper'

const FullForecast =(props)=> {

    let arrKeys = props.sources.sources ? Object.keys(props.sources.sources) : [];

    return (
      <div className="fullForecast weatherBox">
          <h1>{props.sources.sources[arrKeys[0]] ? props.sources.sources[arrKeys[0]].city : 'loading...'}</h1>
        <div className="fullForecastInner">
        {
          arrKeys.map(day=>
            <div className="dayBlock" key={day}>
              <h1 className="head1">{day}</h1>
              <h2 className="head2">{props.sources.sources[day].maxTemp}</h2>
              <div className="timeBox">{props.sources.sources[day].times.map(time=>
                <div className="timeBlock" key={time.key}><button className="fullWeatherTimeBtn">{time.time}</button>
                <div className="hiddenInfo">
                  <p>{time.temp}</p>
                  <p>wind speed: {time.windSpeed}</p>
                  <p>{time.description}</p>
                </div>
                </div>
              )}
              </div>
            </div>
          )
        }
        </div>
      </div>
    )
  };

export default withViewFullForecast(FullForecast);