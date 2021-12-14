import React from 'react'
import "./Filter.css"
import {useDispatch} from "react-redux"
import {loadList} from "../../redux/actions/action"

    // {
    //        filtering the details will comply with the searched value from input box in nav bar
    // }
function Filtering({navVal,filterData,setFilterData}) {
    let dispatch = useDispatch();
     const handleChange=(e)=>{
        const {name, value} = e.target;
        setFilterData({...filterData, [name]:value});
     }

         // {
    //        taking care of alphabetical errors on the way while comparing warehoue names
    // }
    const handleApply = () => {
        let cities = filterData.city.charAt(0).toUpperCase() + filterData.city.slice(1);
        if ((+filterData.minspc) > (+filterData.maxspc)) {
            alert("Please enter Minimum space lower Than Maximum space");
        }
        if (cities !== "Mumbai" || cities !== "Kolkata" || cities !== "Delhi" || cities !== "Guwahati" || cities !== "Chennai" || "Indore" || cities !== "Bangalore") {
            alert("We only have valid cities as Chennai, Bangalore, Delhi, Mumbai, Gowahati, Indore");
        }
    }
     const handleClear=()=>{
         setFilterData({city:"",minspc:"",maxspc:"",cluster:""});
        dispatch(loadList(navVal));
     }
    return (<>
        
         <div className='_filterBox'>
        <h1>Filter your search</h1>
        <div className='clears' onClick={()=>{handleClear()}}>Clear All</div>
        <p>Enter City Name</p>
        <input name="city" value={filterData.city} onChange={(e)=>{handleChange(e)}}/>
        <p>Minimum space</p>
        <input name="minspc" value={filterData.minspc} onChange={(e)=>{handleChange(e)}}/>
        <p>Maximum space</p>
        <input name="maxspc" value={filterData.maxspc} onChange={(e)=>{handleChange(e)}}/>
        <p>Cluster Type</p>
        <input name="cluster" value={filterData.cluster} onChange={(e)=>{handleChange(e)}}/>
       </div>
        </>
      

    )
}

export default Filtering;
