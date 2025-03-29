import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState({ snacks: 0, drinks: 0 });

  useEffect(() => {
    async function fetchCounts() {
      const snacks = await axios.get("http://localhost:5000/snacks");
      const drinks = await axios.get("http://localhost:5000/drinks");
      setData({ snacks: snacks.data.length, drinks: drinks.data.length });
    }
    fetchCounts();
  }, []);

  return (
    <div>
      <h1>Welcome to Snack or Booze!</h1>
      <p>We have {data.snacks} snacks and {data.drinks} drinks available.</p>
    </div>
  );
}

export default Home;
