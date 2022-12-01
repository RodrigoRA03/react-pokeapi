import { laravelApiAxios } from "../config/axiosConfig";

/**             AUTH                  */
const postLogin = async (body) => {
  let url = "/admin/auth/login";
  return await laravelApiAxios.post(url, body);
};

const postLogout = async () => {
  let url = "/admin/auth/logout";
  return await laravelApiAxios.post(url);
};

const getUser = async () => {
  let url = "/admin/auth/user";
  return await laravelApiAxios.get(url);
};

/**     competidor            */

const postRegistrarEntrenador = async (body) => {
  let url = "/entrenador/auth/register";
  return await laravelApiAxios.post(url, body);
};

export { postLogin, postLogout, getUser, postRegistrarEntrenador };
