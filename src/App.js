import { useEffect, useState } from "react";
import ItemsList from "./Components/ItemsList/ItemsList";
import './App.css'

//API call to BACKEND
const API_URL = 'http://localhost:8888'



function App() {

//create useState for itemsList data
const [itemsData, setItemsData] = useState([])

//create a useEffect to load itemsList data 
useEffect(() => {

  console.log(`<App/> useEffect FIRED`)

  //async request to fetch data
  async function fetchData() {
    try{
      const response = await fetch(`${API_URL}/items`)

      //fetch new data and converts to json() **********
      const json = await response.json()

      console.log(`<App/> fetch data`, json)

      const {data} = json

      //renders new data to page ************
      setItemsData(data)
    }catch (err){

    }
  }
  fetchData()
}, [])

console.log(`<App/> Renders with ${itemsData.length} items`)
  return (
    <div className="App">
    {/* <h1>Our Menu</h1> */}
    <ItemsList itemsData={itemsData}/>
    </div>
  );
}

export default App;
