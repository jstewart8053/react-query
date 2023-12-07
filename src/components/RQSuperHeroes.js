import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery("super-heroes", () => { 
    return axios.get("http://localhost:4000/superheroes")
  });

  console.log(isFetching, isLoading)

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((superHero) => {
        return <div key={superHero.id}>{superHero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
