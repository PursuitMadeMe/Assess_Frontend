import React from 'react'
import './ItemCard.css'

function ItemCard({item}) {
  console.log(`<ItemCard/> Render with ${name}`)

  const {name, shortDescription, image, price, toppings} = item

  return (
    <div className='ItemCard' >
    <div className='ItemCard__info' >
    <h1>{name}</h1>
    <h4>{shortDescription}</h4>
    </div>
    <div className='ItemCard__pic' >
    <img src={image} alt={name} />
    </div>
    <div className='ItemCard__details'>
    <ul>
      <li>Price: ${price}</li>
      <li>Toppings: {toppings}</li>
    </ul>
    </div>
    
    </div>
  )
}

export default ItemCard