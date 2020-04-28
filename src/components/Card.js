import React from 'react';

export default function Card(props){
    const {bagel, addToFavorites} = props

    function handleClick(){
        addToFavorites(bagel)
    }
    return(
        <div className='bagel-listing' onClick={handleClick} >
                <h1>{bagel.type}</h1>
        </div>
    )
}