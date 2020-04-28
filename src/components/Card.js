import React from 'react';

export default function Card(props){
        console.log(props)
    return(
        <div className='bagel-listing'>
                <h1>{props.bagel.type}</h1>
        </div>
    )
}