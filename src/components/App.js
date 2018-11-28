import React, {Fragment, Component} from "react";
import FullForecast from './fullForecast/FullForecast';
import SingleForecast from './singleForecast/SingleForecast';
import appWrapper from './AppWrapper';
import '../styles/App.less';

class App extends Component {

  setCity(event){
    if (event.key === 'Enter') {
      this.props.getElementsJSON(event.target.value)
    }
  }

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
               className={"cityInput"}
               onKeyPress={this.setCity.bind(this)}/>
        </div>
        {!this.props.templateChanged.templateChanged ? <SingleForecast/> : <FullForecast/>}
      </Fragment>
    )
  };
}


export default appWrapper(App);

