import React from 'react';
import Card from './components/Card'

export default function Favorites(props){
    const bagels = props.favorites.map(bagel => {
        return <Card bagel={bagel}/>
    })

    return (
        <section className='favorites'>
            <h1>Favorites!!!!</h1>
            {bagels}
        </section>
    )
}