import {combineReducers} from "redux"
import {INCREMENT_COUNTER,DECREMENT_COUNTER} from "./Action.js"


const intitialState={
    count:0
}

const countReducer=(state=intitialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNTER: return{
            ...state,count:state.count+action.payload
        }
        case DECREMENT_COUNTER: return {
            ...state,count:state.count-action.payload
        }
        default: return state
    }
}

export const rootReducer=combineReducers({
    count:countReducer
})
