import React from 'react'
import './ItemCard.css'

function ItemCard({item}) {
  const {id, name, shortDescription, image, price, toppings} = item

  console.log(`<ItemCard/> Render with ${name}`)

  return (
    <div className='ItemCard'key={id}  >
    <div className='ItemCard__header' >
    <h2>{name}</h2>
    <p>{shortDescription}</p>
    </div>
    <div className='ItemCard__pic' >
    <img src={image} alt={name} />
    </div>
    <div className='ItemCard__info'>
    <ul>
      <li>Price: ${price.toFixed(2)}</li>
      <li>Toppings: {toppings.length > 0 ? toppings.join(', ') : ''}</li>
    </ul>
    </div>
    </div>
  )
}

export default ItemCard