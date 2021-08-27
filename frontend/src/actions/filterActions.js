import store from '../store'
import {ADD_A_FILTER,CHANGE_SELECTIONS,FETCH_FILTER,SUBMIT_FILTERS } from "./types";

export const fetchFilters =()=>dispatch=>{
    fetch('http://194.163.166.72:8000/getAllFilters')
        .then(res=>res.json())
        .then(filters=>dispatch(
            {
                type:FETCH_FILTER,
                payload:filters
            }
        ))
}
export const changeSelections = (selection) => dispatch => {
    dispatch({
        type:CHANGE_SELECTIONS,
        payload:selection
    })
}
export const submitFilters = postData =>dispatch=>{
    fetch('http://194.163.166.72:8000/onCriteriaChange',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(postData)
      })
        .then(res=>res.json())
        .then(results=>{
            console.log('submit over')
            console.log(results)
            dispatch(
                {
                    type:SUBMIT_FILTERS,
                    payload:results
                }
            )
        })
}
export const addFilter = (filterName) => dispatch=>{
    fetch('http://194.163.166.72:8000/getFilterData?name='+filterName)
        .then(res=>res.json())
        .then(filter => 
            dispatch({
            type: ADD_A_FILTER,
            payload:filter
        })
        //     {
        //   let map = JSON.parse(data['map']) 
        //   let data1 =JSON.parse(data['data']) 
        //     this.setState({
        //       data:data1,
        //       perc2value:map})
        //   }
          )
          
    }