import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { applyMiddleware } from 'redux';

const middleware = [thunk, logger];
export default composeWithDevTools(applyMiddleware(...middleware))