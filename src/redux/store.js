import { legacy_createStore, applyMiddleware} from "redux";
import { rootReducer } from "./Reducer.js";
import { decrementCounter, incrementCounter } from "./ActionCreators.js";
import thunk from "redux-thunk"

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));


export default store
