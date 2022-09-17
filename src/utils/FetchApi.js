import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": "5c8169a702msha8b4a34fabe7281p125c75jsn08f2b5b8d966",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const FetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
