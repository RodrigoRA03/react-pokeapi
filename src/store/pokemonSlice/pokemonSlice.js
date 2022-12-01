import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "ui",
  initialState: {
    pokemons: [],
    next: null,
    previous: null,
    loading: false,
  },
  reducers: {
    onAddPokemons: (state, { payload }) => {
      state.pokemons = [...state.pokemons, payload];
    },
    onPrevious: (state, { payload }) => {
      state.previous = payload;
    },
    onNext: (state, { payload }) => {
      state.next = payload;
    },
    onResetListPokemons: (state) => {
      state.pokemons = [];
    },
    onLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const {
  onAddPokemons,
  onPrevious,
  onNext,
  onResetListPokemons,
  onLoading,
} = pokemonSlice.actions;
