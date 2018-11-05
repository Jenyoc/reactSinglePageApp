import React, {Fragment, Component} from "react";
import FullForecast from './fullForecast/fullForecast';
import SingleForecast from './singleForecast/SingleForecast';
import appWrapper from './AppWrapper'

class App extends Component {

  componentDidMount() {
    if (!this.props.sources.sources) {
      this.props.getElementsJSON('Minsk')
    }
  }

  render() {
    return (
      <Fragment>
        <div className="inputBox">
        <button className='changeTemplateButton'
                onClick={this.props.changeTemplate}
                checked={false}>Change forecast view
        </button>
        <input type="text"
               placeholder="enter your city"
               className="cityInput"
               onKeyPress={this.props.setCity}/>
        </div>
        {!this.props.templateChanged.templateChanged ? <SingleForecast/> : <FullForecast/>}
      </Fragment>
    )
  };
}


export default appWrapper(App);

