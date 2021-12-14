import React, { useEffect, useState } from 'react'
import "./SingleDataGetting.css"
import { useParams } from "react-router-dom";
import { getSingleData } from '../redux/actions/action';
import { useDispatch, useSelector } from "react-redux"
import loadPic from "../components/images/loadPic.gif"
import EditingForm from '../components/EditingForm';

function SingleDataGetting() {

        // {
    //        making the editing state to take care of the form display
    // }
    const [editing, isEditing] = useState(false);

        // {
    //        get id value from params to target specific patch request
    // }
    let { id } = useParams();
    let dispatch = useDispatch();
        // {
    //        we need one data object only for showing one object. It is stored in "specific" key
    // }
    const { specific, loading } = useSelector(state => state.data);
         // {
    //        convert string to number for mathematical manipulation further
    // }
    id = +id;
    // {
    //        fetch request dependent on editing state, everytime a warehouse details is updated, request is made
    // }
    useEffect(() => {
        dispatch(getSingleData(id));
    }, [editing])

    return (
        <>
            <div className="_singleContainer">
                <h1>Hover to Edit</h1>
                <div className="_flexDesk">
                 {
                    //        if data not loaded, show svg dummy icon
                     }
                    {loading ? <img src={loadPic} alt="loading" /> : Object.entries(specific).map(([key, value]) => {
                        if (key !== "is_registered" && key !== "is_live" && key !== "id") {
                            return <div className='_eachOne'>
                                <p className='_key'>{key}: </p>
                                <p className='_value'>{value}</p>
                            </div>
                        }
                        if (key === "is_registered") {
                            return value === "true" || value === true ? <p className='_value _rightSide'>Registered</p> : <p className='_value _rightSide'>Not Registered</p>
                        }
                        if (key === "is_live") {
                            return value === "true" || value === true ? <p className='_value _rightSide'>Live</p> : <p className='_value _rightSide'>Offline</p>
                        }


                    })}
                </div>

                <div className='_editBtn' onClick={() => { isEditing(!editing) }}>EDIT</div>

            </div>
            <EditingForm e={specific} isEditing={isEditing} editing={editing} />
        </>
    )
}

export default SingleDataGetting
