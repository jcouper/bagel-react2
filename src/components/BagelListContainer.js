import React from 'react'
import Card from './Card'

export default function BagelListContainer(props){
    const bagels = props.bagels.map(bagel => {
        return <Card bagel={bagel}/>
    })

    return (
        <section className='bagels'>
            {bagels}
        </section>
    )

}