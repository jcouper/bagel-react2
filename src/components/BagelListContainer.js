import React from 'react'
import Card from './Card'

export default function BagelListContainer(props){
    const bagels = props.bagels.map(bagel => {
        return <Card bagel={bagel} action={props.action}/>
    })

    return (
        <section className='bagels'>
            {bagels}
        </section>
    )
}