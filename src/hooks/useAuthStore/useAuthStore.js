import { useDispatch, useSelector } from "react-redux";
import { getUser, postLogin, postLogout } from "../../services/laravelServices";
import {
  onChecking,
  onLogin,
  onResetState,
} from "../../store/authSlice/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const startLogin = (body) => {
    dispatch(onChecking());
    postLogin(body)
      .then(({ data }) => {
        localStorage.setItem("token", data.access_token);
        startGetUser();
      })
      .catch((err) => {
        console.log(data);
      });
  };

  const startGetUser = () => {
    getUser()
      .then(({ data }) => {
        dispatch(onLogin(data));
      })
      .catch((err) => {
        localStorage.removeItem("token");
        dispatch(onResetState());
        console.log(err);
      });
  };

  const startLogout = () => {
    postLogout()
      .then(({ data }) => {
        console.log(data);
        localStorage.removeItem("token");
        dispatch(onResetState());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { status, user, errorMessage, startLogin, startGetUser, startLogout };
};
