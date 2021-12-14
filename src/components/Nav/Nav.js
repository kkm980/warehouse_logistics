import React, { useState } from 'react'
import "./Nav.css"
import search from "../images/search.gif"
import {useDispatch} from "react-redux"

import {loadList} from "../../redux/actions/action"
    // {
    //        importing the navigation search state from Home.jsx to update on input parameters
    // }
function Nav({navVal,setNavVal}) {
    
    let dispatch = useDispatch();

       // {
    //        handling input box onchange values
    // }

    const [text, setText] = useState("");
    const handleChange=(e)=>{
         setText(e.target.value);
    }

       // {
    //        triggering the search function once user clicks on magnifier icon after entering the input values
    // }

         // {
    //        taking care of humanly typed mistakes
    // }


    const handleSearch=()=>{
        let newText =  text.replace(/^\s+|\s+$/gm,'');
        setNavVal(newText);
    }
    return (
        <div className="_NavBarMain">
            <img alt="logo" src="https://stockarea.io/assets/user/images/header/logo.png" onClick={()=>{setText("");dispatch(loadList(navVal=""))}}/>
            <div className='_inputArea'>
            <input type="text" name="textField" placeholder='Search by name' onChange={(e)=>{handleChange(e)}} value={text}/>
            <img alt="search" src={search} onClick={()=>{handleSearch()}}/>
            </div>
            
        </div>
    )
}

export default Nav
