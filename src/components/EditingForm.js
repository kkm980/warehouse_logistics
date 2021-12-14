import React from 'react'
import { useState, useEffect } from "react"
import "./EditingForm.css"
import { useDispatch} from "react-redux"
import { editGivenData } from '../redux/actions/action';

function EditingForm({ e, isEditing, editing }) {

    //  {
        //  Storing the form elements to be updated by patch request
    //  }

    let dispatch = useDispatch();
    let [state, setState] = useState({});

    useEffect(() => {
        setState({ ...e });
    }, [e])


    // {
    //        making the input fields as controlled components
    // }
    const handleChange = (eve) => {
        const { name, value } = eve.target;
        setState({ ...state, [name]: value });
    }
    // {
    //        on clicking update button, send the request, hide the form by updating the editing state
    // }
    const Update = () => {
        dispatch(editGivenData(e.id, state));
        isEditing(false);
    }
    return (
        <div style={{ display: editing ? "block" : "none" }} className='editingFormMain'>

            <div className='mainBox'>
                <div className='cancel' onClick={() => isEditing(false)}>Cancel</div>


                <div className='update' onClick={() => Update()}>Update</div>


                <div>Name: <input value={state.name} name="name" onChange={(eve) => { handleChange(eve) }} /></div>
                <div> Code: <input value={state.code} name="code" onChange={(eve) => { handleChange(eve) }} /></div>
                <div>Type: <input value={state.type} name="type" onChange={(eve) => { handleChange(eve) }} /></div>
                <div> Cluster: <input value={state.cluster} name="cluster" onChange={(eve) => { handleChange(eve) }} /></div>
                <div> City: <input value={state.city} name="city" onChange={(eve) => { handleChange(eve) }} /></div>
                <div> Live: <input value={state.is_live} name="is_live" onChange={(eve) => { handleChange(eve) }} /></div>
                <div> Registered: <input value={state.is_registered} name="is_registered" onChange={(eve) => { handleChange(eve) }} /></div>
                <div>Space: <input value={state.space_available} name="space_available" onChange={(eve) => { handleChange(eve) }} /></div>
            </div>
        </div>
    )
}

export default EditingForm
