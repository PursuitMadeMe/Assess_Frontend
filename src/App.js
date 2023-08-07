import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";
import Error from "./Components/Error/Error";
import ItemsList from "./Components/ItemsList/ItemsList";

import "./App.css";

const API_URL = "http://localhost:8888";

function App() {
  const [itemsData, setItemsData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    console.log(`<App/> useEffect FIRED`);

    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(`${API_URL}/items`);

        const json = await response.json();

        console.log(`<App/> fetch data`, json);

        const { data, error } = json;

        if (response.ok) {
          setItemsData(data);

          setLoading(false);
        } else {
          setLoading(false);
          setError(error);
        }

        //ERROR - remove
        // data.split(', ')
      } catch (err) {
        console.log(`<App/> useEffect error: ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <ItemsList itemsData={itemsData} />;
    }
  };

  console.log(
    `<App/> Renders error = ${error} loading = ${loading} with ${itemsData.length} items`
  );
  return (
    <div className="App">
      {/* <h1>Our Menu</h1> */}

      {renderContent()}
    </div>
  );
}

export default App;
