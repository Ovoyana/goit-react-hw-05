import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmIyZTYyOGRhZGZkMDdiMzg0MmY2NGI5MjhmOTMyYyIsInN1YiI6IjY2MjY1ODU5MmRkYTg5MDE2NGUxYjkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YxUFFlUHFYY_Pe1JiWzvWq75pC7O-MKcIHmXlhz9Th4",
  },
};

export async function fetchMovies() {
  try {
    const res = await axios.get("/trending/movie/day", options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieById(movieId) {
  try {
    const res = await axios.get(`/movie/${movieId}`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieCastById(movieId) {
  try {
    const res = await axios.get(`/movie/${movieId}/credits`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieReviewById(movieId) {
  try {
    const res = await axios.get(`/movie/${movieId}/reviews`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesBySearchQuery(query) {
  try {
    const res = await axios.get(`/search/movie?query=${query}`, options);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}