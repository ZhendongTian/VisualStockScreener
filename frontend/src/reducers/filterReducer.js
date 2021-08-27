import {CHANGE_SELECTIONS,ADD_A_FILTER,FETCH_FILTER,SUBMIT_FILTERS} from "../actions/types";
const initialState ={
    filters:{},
    selections:{},
    results:{}
}
export default function(state = initialState,action){
    switch(action.type){
        case CHANGE_SELECTIONS:
            const newSelections = action.payload
            return {
                ...state,
                selections:newSelections
            }
        case SUBMIT_FILTERS:
            console.log('submit over')
            return {
                ...state,
                results:action.payload
            }
        case FETCH_FILTER:
            return {
                ...state,
                filters: action.payload
            }
        default:
            return state;
    }
}