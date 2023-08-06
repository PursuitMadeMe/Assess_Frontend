import React from 'react'
import './ItemsList.css'
import ItemCard from "../ItemCard/ItemCard"

function ItemsList({itemsData}) {

  console.log(`<ItemsList/> Renders`)
  
  return (
    <div className='ItemsList'>

    {itemsData.map((item) => (
      <ItemCard key={item.id} item={item} />
    ))}
    </div>
  )
}

export default ItemsList