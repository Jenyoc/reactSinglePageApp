import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getElementsJSON, setCity} from "../actions/GetSourcesAction";
import {changeTemplate} from "../actions/ChamgeTemplateAction";

const AppWrapper = Component => {
  const WrappedComponent = props => {
    return <Component sources={props.sources}
                      getElementsJSON={props.getElementsJSON}
                      changeTemplate={props.changeTemplate}
                      templateChanged={props.templateChanged}
                      setCity={props.setCity}/>
  };

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getElementsJSON: getElementsJSON,
        changeTemplate: changeTemplate,
        setCity: setCity
      },
      dispatch
    );
  const mapStateToProps = (state) => {
    return {
      sources: state.sources,
      templateChanged: state.templateChanged
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default AppWrapper;