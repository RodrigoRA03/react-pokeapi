import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore/useAuthStore";
import { LoginScreen } from "../pages/auth/LoginScreen";
import { HomeScreen } from "../pages/homeScreen/homeScreen";
import { PokemonsListScreen } from "../pages/pokemonListScreen/pokemonsListScreen";
import { RegisterTournamentScreen } from "../pages/RegisterTournamentScreen/registerTournamentScreen";
import { TournamentScreen } from "../pages/tournametScreen/tournamentScreen";
import { AdminRoutes } from "./adminRoutes";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export const AppRoutes = () => {
  const { startGetUser } = useAuthStore();

  useEffect(() => {
    startGetUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="auth/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="login" element={<LoginScreen />} />
                <Route path="/*" element={<Navigate to="/auth/login" />} />
              </Routes>
            </PublicRoutes>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoutes>
              <AdminRoutes />
            </PrivateRoutes>
          }
        />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/pokemon-teams" element={<PokemonsListScreen />} />
        <Route path="/tournaments" element={<TournamentScreen />} />
        <Route
          path="/register-tournament"
          element={<RegisterTournamentScreen />}
        />
        {/* <Route path="/*" element={<Navigate to="/dashboard/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
