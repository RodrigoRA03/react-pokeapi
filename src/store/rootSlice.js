import { authSlice } from "./authSlice/authSlice";
import { competidoresSlice } from "./competidoresSlice/competidoresSlice";
import { pokemonSlice } from "./pokemonSlice/pokemonSlice";
import { uiSlice } from "./uiSlice/uiSlice";

export const rootSlice = {
  ui: uiSlice.reducer,
  auth: authSlice.reducer,
  pokemons: pokemonSlice.reducer,
  competidor: competidoresSlice.reducer,
};
