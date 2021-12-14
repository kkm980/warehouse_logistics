import * as types from "../actions/actionTypes"

const initial = {
    lists:[],
    specific:{},
    loading:true
}

const arrReducers = (state=initial, actions)=>{
    switch(actions.type){
        case types.GET_LISTS:
             return{...state, lists:actions.payload, loading:false}
        case types.GET_SINGLE_DATA:
             return{...state, specific:actions.payload, loading:false}
        case types.EDIT_DATA:
             return{...state, specific:actions.payload, loading:false}
        case types.SEARCH_INDIVIDUALS:
             return{...state, lists:actions.payload, loading:false}
        default: 
             return state;
    }
}

export default arrReducers;