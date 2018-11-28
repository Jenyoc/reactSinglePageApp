import React from "react";
import '../../styles/SingleForecast.less'

import withViewSingleForecast from './SingleForecastWrapper';

const SingleForecast = (props) => {

  let clickHandle =(event)=>{
    props.resetTime();
    if(event.target.classList.contains('left')){ props.dayBefore(event)}
    else props.dayNext(event);
  };

    let arrKeys = props.sources.sources ? Object.keys(props.sources.sources) : [];

    const {sources} = props.sources;

    let dateValue = props.dateValue.dateValue,
      timeValue = props.timeValue.timeValue;

    return (
      <div className="singleForecast weatherBox">
        {arrKeys.length ?
          <div className="singleWeatherWrapper">
            <div className="flexRow">
              <div className="arrowBox"
                   onClick={clickHandle}>
                <div className="arrow left"
                     data-date={props.dateValue.dateValue}
                     data-time={props.timeValue.timeValue}>  &lt; </div>
              </div>
              <div className="singleWeatherWindow">
                <h1 className="head1">{sources[arrKeys[dateValue]].city}</h1>
                <h2 className="head2">{arrKeys[dateValue]}</h2>
                <p className="string"> {sources[arrKeys[dateValue]].times[timeValue].time}</p>
                <p className="string">{sources[arrKeys[dateValue]].times[timeValue].temp}</p>
                <p className="string">wind speed: {sources[arrKeys[dateValue]].times[timeValue].windSpeed}</p>
                <p className="string">{sources[arrKeys[dateValue]].times[timeValue].description}</p>
              </div>
              <div className="arrowBox"
                   onClick={clickHandle}>
                <div className="arrow right"
                     data-date={props.dateValue.dateValue}
                      data-time={props.timeValue.timeValue}>  &gt; </div>
              </div>
            </div>
            <div className="timeButtons">
              {
                sources[arrKeys[dateValue]].times.map(el => <button className="timeBtn"
                                                                    key={el.key}
                                                                    id={el.id}
                                                                    onClick={props.setTime}>{el.time}
                </button>)
              }
            </div>
          </div> : <div className="loaderBox"><p className="loaderText">Loading</p><div className="loader"> </div></div>}
      </div>
    )
};

export default withViewSingleForecast(SingleForecast);
