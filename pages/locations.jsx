import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Location from "../components/location";
import Error from "../components/error";

const locations = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    dataRestaurants();
  }, []);

  async function dataRestaurants() {
    const response = await fetch("http://localhost:8080/api/restaurant", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((res) => res)
      .catch((error) => {
        setIsError(true);
      });

    if (response) {
      const data = await response.json();
      setRestaurants(data);
    }
  }

  return (
    <Layout title={`Locations`} description="Locations - Smashack">
      {isError ? (
        <Error />
      ) : (
        <>
          {restaurants.map((restaurant) => {
            return <Location key={restaurant.id} restaurant={restaurant} />;
          })}
        </>
      )}
    </Layout>
  );
};

export default locations;
