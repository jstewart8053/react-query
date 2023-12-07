import React, { useEffect, useState } from "react";
import axios from "axios";
//Without React Query

export const SuperHeroes = () => {
 const [superHeroes, setSuperHeroes] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState("");

 useEffect(() => {
  getSuperHeroes();
}, []); 
 
const getSuperHeroes = async () => { await axios.get("http://localhost:4000/superheroes").then((response) => { 
  setSuperHeroes(response.data); 
  setIsLoading(false); 
}).catch((error) => { 
  setError(error.message); 
  setIsLoading(false);
})};

if (isLoading) { return <h2>Loading...</h2>; }

if (error) { return <h2>{error}</h2>; }
  return (
    <>
      <h2>SuperHeroes</h2>
      {superHeroes.map((superHero) => {
        return <div key={superHero.id}>{superHero.name}</div>;
      })}
    </>
  );
  };
export default SuperHeroes;
