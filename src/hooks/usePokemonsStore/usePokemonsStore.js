import { useDispatch, useSelector } from "react-redux";
import {
  getPokemon,
  getPokemons,
  getPrevNextPokemons,
} from "../../services/pokeapiServices";
import {
  onAddPokemons,
  onLoading,
  onNext,
  onPrevious,
  onResetListPokemons,
} from "../../store/pokemonSlice/pokemonSlice";

export const usePokemonsStore = () => {
  const dispatch = useDispatch();
  const { pokemons, previous, next, loading } = useSelector(
    (state) => state.pokemons
  );

  const startGetPokemons = (params = {}) => {
    getPokemons(params)
      .then(async ({ data }) => {
        if (data.results.length) {
          await data.results.map((pokemon) => {
            startGetDetailPokemon(pokemon.name);
            addPrevious(data.previous);
            addNext(data.next);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const startGetDetailPokemon = (name) => {
    getPokemon(name)
      .then(({ data }) => {
        dispatch(onAddPokemons(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const startGetNexPrevPokemons = (url) => {
    getPrevNextPokemons(url)
      .then(async ({ data }) => {
        dispatch(onResetListPokemons());
        if (data.results.length) {
          await data.results.map((pokemon) => {
            startGetDetailPokemon(pokemon.name);
            addPrevious(data.previous);
            addNext(data.next);
            startLoading();
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPrevious = (previous) => dispatch(onPrevious(previous));
  const addNext = (next) => dispatch(onNext(next));
  const startLoading = () => dispatch(onLoading());

  return {
    pokemons,
    previous,
    next,
    loading,
    startGetPokemons,
    startGetDetailPokemon,
    startGetNexPrevPokemons,
    startLoading,
  };
};
