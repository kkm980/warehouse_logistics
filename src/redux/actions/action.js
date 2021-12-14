import * as types from "./actionTypes"
import axios from "axios"

      // {
    //        action function signature object to get all the data of warehouse
    // }


const getList=(list)=>({
    type:types.GET_LISTS,
    payload:list
});

 // {
    //        pure function signature to get single data
    // }


const getData=(specific)=>({
    type:types.GET_SINGLE_DATA,
    payload:specific
});

// {
    //        pure function signature to get editing done
    // }


const edits=(specific)=>({
    type:types.EDIT_DATA,
    payload:specific
})

// {
    //        action function to get all the data of warehouse with search, filter
    // }

export const loadList=(navVal, filterData)=>{
    
    return function(dispatch){
        // {
    //        axios call
    // }
        axios.get("http://localhost:5000/lists").then(resp=>{

        // {
    //        making temp array to handle queries
    // }
            let dataArrays=[];
            // {
    //        k is nothing, just a variable to be manipulated for conditional operator, it is nullable
    // }
            let k; 
            // {
    //        if city parameter has any input given then only check that else move ahead. similarly for other parameters
    // }
            filterData.city!==""?resp.data= resp.data.filter(e=>{
                let xx=e.city.toLowerCase();
                return xx.includes(filterData.city.toLowerCase());
             }):k=0;
            filterData.cluster!==""?resp.data= resp.data.filter(e=>{
               return e.cluster.includes(filterData.cluster);
            }):k=0;
           filterData.minspc!==""?resp.data= resp.data.filter(e=>{
              return  e.space_available>=(+filterData.minspc);
            }):k=0;
           filterData.maxspc!==""?resp.data= resp.data.filter(e=>{
              return  e.space_available<=(+filterData.maxspc);
            }):k=0;
// {
    //       finally push the curated data to the temp array to be used.
    // }
            
            resp.data.map(el=>{
                el.name.includes(navVal) && dataArrays.push(el);
            });
            return dispatch(getList(dataArrays));  
        }).catch(err=>console.log(err.message));
    }
}



// {
    //        action function to get one of the data of warehouse
    // }
export const getSingleData=(id)=>{
    return function(dispatch){
        axios.get(`http://localhost:5000/lists/${id}`).then(resp=>{
            dispatch(getData(resp.data));
        }).catch(err=>console.log(err.message));
    }
}

 // {
    //        action function to edit the data of a warehouse and patch  the  request
    // }


export const editGivenData = (id, state) => {
     axios.patch(`http://localhost:5000/lists/${id}`, { ...state }).then(resp => {
    }).catch(err => console.log(err.message));
    return function (dispatch) {
        axios.get(`http://localhost:5000/lists/${id}`).then(resp => {
            dispatch(edits(resp.data));
        }).catch(err => console.log(err.message));
    }
}


