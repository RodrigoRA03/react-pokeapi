import { useDispatch, useSelector } from "react-redux";
import { postRegistrarEntrenador } from "../../services/laravelServices";
import {
  onAddCompetidor,
  onAddPokemonsTeam,
  onAddTorneoCompetidor,
  onMuteAudio,
  onSuccessRegistro,
} from "../../store/competidoresSlice/competidoresSlice";

export const useCompetidorStore = () => {
  const dispatch = useDispatch();
  const {
    pokemonsTeam,
    competidorForm,
    torneoId,
    muteAudio,
    messageSuccess,
    success,
  } = useSelector((state) => state.competidor);

  const startSaveEntrenadorRegistro = () => {
    const pokemons = pokemonsTeam.map((pokemon) => {
      let body = {
        pokemon_id: pokemon.id,
        nombrePokemon: pokemon.name,
        defensa: 20,
      };

      pokemon.stats.map((estadisticas) => {
        switch (estadisticas.stat.name) {
          case "speed":
            body.velocidad = estadisticas.base_stat;
            break;
          case "attack":
            body.ataque = estadisticas.base_stat;
            break;
          case "hp":
            body.hp = estadisticas.base_stat;
            break;
          case "defense":
            body.defensa = estadisticas.base_stat;
            break;
          default:
            break;
        }
      });

      return body;
    });
    let body = {
      ...competidorForm,
      torneo_id: torneoId,
      pokemones: pokemons,
    };
    postRegistrarEntrenador(body)
      .then(({ data }) => {
        successRegistro("Tu registro se ha guardado exitosamente");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCompetidor = (data) => dispatch(onAddCompetidor(data));
  const addPokemonToList = (pokemon) => dispatch(onAddPokemonsTeam(pokemon));
  const addTorneoCompetidor = (torneo) =>
    dispatch(onAddTorneoCompetidor(torneo));
  const statusMuteAudio = () => dispatch(onMuteAudio());
  const successRegistro = (message) => dispatch(onSuccessRegistro(message));

  return {
    muteAudio,
    pokemonsTeam,
    messageSuccess,
    success,
    addCompetidor,
    addPokemonToList,
    addTorneoCompetidor,
    statusMuteAudio,
    startSaveEntrenadorRegistro,
  };
};
