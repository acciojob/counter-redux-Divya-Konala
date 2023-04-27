import {INCREMENT_COUNTER,DECREMENT_COUNTER} from "./Action.js"


export const  incrementCounter=()=>{
    return {
        type: INCREMENT_COUNTER,
        payload:1
    }
}

export const decrementCounter=()=>{
    return {
        type:DECREMENT_COUNTER,
        payload:1
    }
}




