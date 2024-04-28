import axios from "axios";


const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmIyZTYyOGRhZGZkMDdiMzg0MmY2NGI5MjhmOTMyYyIsInN1YiI6IjY2MjY1ODU5MmRkYTg5MDE2NGUxYjkxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YxUFFlUHFYY_Pe1JiWzvWq75pC7O-MKcIHmXlhz9Th4"
  },
};

export async function fetchMovies() {
  try {
    const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    const res = await axios.get( url, options)
    return res.data.results ;
  } catch (error) {
    console.log(error.message);
    console.log(res.data.results)
  }
}

export async function fetchMovieById(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    const res = await axios.get(url, options)
    return res.data;

  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieCastById(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const res = await axios.get(url, options);
  
    return res.data.cast;

  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieReviewById(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`
  const res = await axios.get(url, options);

  return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMoviesBySearchQuery(query, page) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
    const res = await axios.get(url, options);
    return res.data.results;

  } catch (error) {
    console.log(error.message);
  }
}
