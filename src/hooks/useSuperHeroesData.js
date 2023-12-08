import {useQuery} from "react-query";
import axios from "axios";

const fetchSuperHereos = () => {
  return axios.get("http://localhost:4000/superheroes");
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHereos, {
    onSuccess: onSuccess,
    onError: onError,
//     select: (data) => {
//     const superHeroes = data.data.map((hero) => hero.name);
//     return superHeroes;
// }
  });
};