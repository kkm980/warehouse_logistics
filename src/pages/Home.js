import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from "react-redux"
import { loadList } from "../redux/actions/action"
import Nav from '../components/Nav/Nav'
import Card from '../components/Card'
import Filter from "../components/Filtering/Filter"
import loadPic from "../components/images/loadPic.gif"
function Home() {
    let dispatch = useDispatch();

    const { lists, loading } = useSelector(state => state.data);
    //  {
    //     Array of warehouse details and loading status
    // }

    const [navVal, setNavVal] = useState("");

    //  {
    //     Search value from navbar
    // }

   //  {
    //     Filter options initial values
    // }

    const [filterData, setFilterData] = useState({
        city: "",
        minspc: "",
        maxspc: "",
        cluster: ""
    });

    
    //  {
    //     fetch request from db on update in search parameters/filter options
    // }


    useEffect(() => {
        dispatch(loadList(navVal, filterData));
    }, [navVal, filterData]);

    return (

        <div>
            <Nav navVal={navVal} setNavVal={setNavVal} />
            <Filter navVal={navVal} filterData={filterData} setFilterData={setFilterData} />
            <div className="_container">
                {loading ? <img src={loadPic} alt="loading" /> : lists.map((e, i) => (
                    <Card e={e} i={i} navVal={navVal} />
                ))}

            </div>

        </div>
    )
}

export default Home
