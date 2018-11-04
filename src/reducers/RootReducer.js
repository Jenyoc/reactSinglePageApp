import {combineReducers} from 'redux';

import SourcesReducer from './SourcesReducer';
import TemplateChangedReducer from './TemplateChangedReducer'
import DateValueReducer from "./DateValueReducer";
import TimeValueReducer from "./TimeValueReducer";

const RootReducer = combineReducers({
  sources: SourcesReducer,
  templateChanged: TemplateChangedReducer,
  dateValue: DateValueReducer,
  timeValue: TimeValueReducer
});

export default RootReducer;