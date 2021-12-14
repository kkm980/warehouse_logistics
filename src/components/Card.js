import React from 'react'
import "./Card.css"

import { useNavigate } from 'react-router-dom';

function Card({e,i}) {

    const navigate = useNavigate();
   
    return (

    //  {
    //     Migrate to single data page
    // }
        <div className="_wrapper" onClick={()=>navigate(`../pages/SingleDataGetting/${e.id}`)}>
            <div className='_smallCards'>
            <h3>{i+1}</h3>
            <div className='_top'> 
            <h2>{e.name}</h2>
            <h4>{e.code}</h4>
            </div>
            <div className='_top'> 
            <h2>{e.city}</h2>
            <h3>{e.space_available}</h3>
            </div>
            
            <div className='_top'> 
            <h3>{e.cluster}</h3>
             <h3>{e.type}</h3>
            </div>
            <div className='_top'> 
            {
                // taking care of type coercision of booleans
            }
            <h3>{e.is_live===true||e.is_live==="true"?"Live":"Offline"}</h3>
             <h4>{e.is_registered===true||e.is_registered==="true"?"Registered":"Not Registered"}</h4>
            </div>
            </div>
        </div>
    )
}

export default Card
