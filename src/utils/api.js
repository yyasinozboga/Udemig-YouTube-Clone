import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "c3202f5227mshefb2446baaf43e6p1b2232jsn6cc6e405ba66",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
