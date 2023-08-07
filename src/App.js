import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading"
import ItemsList from "./Components/ItemsList/ItemsList";

import './App.css'

//API call to BACKEND
const API_URL = 'http://localhost:8888'

function App() {

//create useState for itemsList data
const [itemsData, setItemsData] = useState([])

//create useState for LOADING data 
const [loading, setLoading] = useState(true)

//create a useEffect to load itemsList data 
useEffect(() => {

  console.log(`<App/> useEffect FIRED`)

  //async request to fetch data
  async function fetchData() {

    //Show the user we are LOADING data
    setLoading(true)

    try{
      const response = await fetch(`${API_URL}/items`)

      //fetch new data and converts to json() ********** BUG#1
      const json = await response.json()

      console.log(`<App/> fetch data`, json)

      const {data} = json

      //renders new data to page ************ BUG#2
      setItemsData(data)

      //Stop LOADING data
      setLoading(false)

    }catch (err){

    }
  }
  fetchData()
}, [])

console.log(`<App/> Renders loading = ${loading} with ${itemsData.length} items`)
  return (
    <div className="App">
    {/* <h1>Our Menu</h1> */}

    {/* {loading ? <Loading /> : <ItemsList itemsData={itemsData}/>} */}


    <Loading />
    
    </div>
  );
}

export default App;
