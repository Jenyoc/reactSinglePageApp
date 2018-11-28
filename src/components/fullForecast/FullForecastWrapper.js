import React from 'react'
import {connect} from 'react-redux'


const withViewFullForecast=Component=>{
  const WrappedComponent = props=>{
    return <Component sources={props.sources}/>
  };

  const mapStateToProps = (state) => {
    return {
      sources: state.sources
    };
  };

  return connect(
    mapStateToProps,
    null
  )(WrappedComponent);
};

export default  withViewFullForecast;