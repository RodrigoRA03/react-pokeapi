import { clientAxios } from "../config/axiosConfig";

const getAbilities = async (params = {}) => {
  let url = "ability";
  return await clientAxios.get(url, {
    params,
  });
};

const getBerry = async (berry = "") => {
  let url = `berry/${berry}`;
  return await clientAxios.get(url);
};

/**
 * @param { pokemon: 1 or hedor } pokemon
 */
const getAbility = async (pokemon) => {
  let url = "ability/{id o nombre}";
  return await clientAxios.get(url);
};

const getPokemons = async (params = {}) => {
  let url = "pokemon";
  return await clientAxios.get(url, {
    params,
  });
};

/**
 *
 * @param {*} pokemon
 * @returns
 */
const getPokemon = async (pokemon) => {
  let url = `pokemon/${pokemon}`;
  return await clientAxios.get(url);
};

const getPrevNextPokemons = async (url) => {
  return await clientAxios.get(url);
};

export {
  getAbility,
  getAbilities,
  getBerry,
  getPokemons,
  getPokemon,
  getPrevNextPokemons,
};
