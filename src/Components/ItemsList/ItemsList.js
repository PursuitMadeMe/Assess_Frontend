import React from "react";
import "./ItemsList.css";
import ItemCard from "../ItemCard/ItemCard";
import GridLayout from "../GridLayout/GridLayout";

function ItemsList({ itemsData }) {
  return (
    <div className="ItemsList">
      <GridLayout>
        {itemsData.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </GridLayout>
    </div>
  );
}

export default ItemsList;
