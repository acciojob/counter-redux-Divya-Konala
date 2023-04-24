import {legacy_createStore} from 'redux'

let initialState={
    count:0,
}

let countReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT': return {...state,count:state.count+1}
        case 'DECREMENT': return {...state,count:state.count-1}
        default: return state
    }
}

const store=legacy_createStore(countReducer);

// store.subscribe(()=>console.log("updated value",store.getState()));

export default store
