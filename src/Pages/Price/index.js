import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Price = () => {
  const apiKey = "31478A1D-B334-4E36-9C56-4D078F6BE8BB";
  const params = useParams();
  const symbol = params.symbol;
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCoin();
    };

    fetchData();
  }, []); // Add getCoin to the dependency array

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  }
};

export default Price;