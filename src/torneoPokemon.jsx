import { Provider } from "react-redux";
import { AppRoutes } from "./routes/appRoutes";
import store from "./store/store";
import "./styles/styles.css";
import "animate.css";

export const TorneoPokemon = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};
