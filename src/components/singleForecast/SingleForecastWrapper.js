import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {dayBefore, dayNext} from "../../actions/DateAction";
import {resetTime, setTime} from "../../actions/TimeAction";

const withViewSingleForecast = Component => {
  const WrappedComponent = props => {
    return <Component sources={props.sources}
                      dateValue={props.dateValue}
                      dayNext={props.dayNext}
                      dayBefore={props.dayBefore}
                      timeValue={props.timeValue}
                      setTime={props.setTime}
                      resetTime={props.resetTime}/>
  };

  const mapStateToProps = (state) => {
    return {
      sources: state.sources,
      dateValue: state.dateValue,
      timeValue: state.timeValue
    };
  };

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
      dayNext: dayNext,
      dayBefore: dayBefore,
      setTime: setTime,
      resetTime: resetTime
    }, dispatch);

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withViewSingleForecast;