import axioss from "axios";

const instance = axioss.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
