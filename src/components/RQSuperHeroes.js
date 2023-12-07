import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroes = () => {
const onSuccess = (data) => {
  console.log(data);
}

const onError = (error) => { 
  console.log(error);
}


  const { isLoading, data, isError, error, isFetching, refetch } = useQuery("super-heroes", () => { 
    return axios.get("http://localhost:4000/superheroes")
    },
    {
     onSuccess: onSuccess,
     onError: onError
    }
  );

  console.log(isFetching, isLoading)

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
      {data?.data.map((superHero) => {
        return <div key={superHero.id}>{superHero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
