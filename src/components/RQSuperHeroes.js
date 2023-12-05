import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroes = () => {
 const { isLoading, data} = useQuery("super-heroes", () => { 
  return axios.get("http://localhost:4000/super-heroes")
 });


if(isLoading) {
  return <h2>Loading...</h2>
}

<div>RQSuperHeroes</div>;
};

export default RQSuperHeroes;
