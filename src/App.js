import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";
import Error from "./Components/Error/Error";
import ItemsList from "./Components/ItemsList/ItemsList";

import "./App.css";
import Containter from "./Components/Container/Containter";

const API_URL = "http://localhost:8888";

function App() {
  const [itemsData, setItemsData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setError("");
      setLoading(true);

      try {
        const response = await fetch(`${API_URL}/items`);

        const json = await response.json();

        const { data, error } = json;

        if (response.ok) {
          setItemsData(data);

          setLoading(false);
        } else {
          setLoading(false);
          setError(error);
        }
      } catch (err) {
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

  return (
    <div className="App">
      <Containter center={Boolean(error || loading)}>
      <h1>Our Menu</h1>
      {renderContent()}
      </Containter>
    </div>
  );
}

export default App;
