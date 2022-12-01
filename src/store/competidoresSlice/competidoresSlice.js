import { createSlice } from "@reduxjs/toolkit";

export const competidoresSlice = createSlice({
  name: "competidores",
  initialState: {
    pokemonsTeam: [],
    competidorForm: null,
    torneoId: null,
    muteAudio: true,
    messageSuccess: "",
    success: false,
  },
  reducers: {
    onAddCompetidor: (state, { payload }) => {
      state.competidorForm = payload;
      state.success = false;
      state.message = "";
    },
    onAddPokemonsTeam: (state, { payload }) => {
      state.pokemonsTeam = [...state.pokemonsTeam, payload];
    },
    onAddTorneoCompetidor: (state, { payload }) => {
      state.torneoId = payload;
    },
    onMuteAudio: (state) => {
      state.muteAudio = !state.muteAudio;
    },
    onSuccessRegistro: (state, { payload }) => {
      state.success = true;
      state.message = payload;
    },
  },
});

export const {
  onAddCompetidor,
  onAddPokemonsTeam,
  onAddTorneoCompetidor,
  onMuteAudio,
  onSuccessRegistro,
} = competidoresSlice.actions;
