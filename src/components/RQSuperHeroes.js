import { useQuery } from "react-query";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroes = () => {
const onSuccess = (data) => {
  console.log(data);
}

const onError = (error) => { 
  console.log(error);
}


  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);
  
    if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>Click</button>
      
      {/* {data.map((hero) => {
        return <div key= {hero}>{hero}</div>;
      })} */}


      {data?.data.map((hero) => {
        return <div key={hero.id}>
          <Link to ={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
