import axios from "axios";

const API_KEY = "60f93fd8";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (search, page = 1, type = "") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: search,
        page,
        type,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    return { Error: "Failed to fetch movies." };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    return { Error: "Failed to fetch details." };
  }
};
