import React from 'react'
import './ItemCard.css'

function ItemCard({item}) {
  const {id, name, shortDescription, image, price, toppings} = item

  console.log(`<ItemCard/> Render with ${name}`)

  return (
    <div className='ItemCard'key={id}  >
    <div className='ItemCard__header' >
    <h1>{name}</h1>
    <h4>{shortDescription}</h4>
    </div>
    <div className='ItemCard__pic' >
    <img src={image} alt={name} />
    </div>
    <div className='ItemCard__info'>
    <ul>
      <li>Price: ${price.toFixed(2)}</li>
      <li>Toppings: {toppings.length > 0 ? toppings.join(', ') : 'None'}</li>
    </ul>
    </div>
    </div>
  )
}

export default ItemCard