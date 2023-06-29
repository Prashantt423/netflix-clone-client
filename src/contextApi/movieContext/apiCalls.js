import axios from 'axios';
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  getOneMovieStart,
  getOneMovieSuccess,
  getOneMovieFailure,
} from './MovieActions';

// Get one movie by id
export const getOneMovie = async (id, dispatch) => {
  dispatch(getOneMovieStart());
  try {
    const res = await axios.get(
      `https://netflix-clone-api-xrxw.onrender.com/api/movies/find/${id}`,
      {
        headers: {
          token:
            'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        },
      }
    );
    dispatch(getOneMovieSuccess(res.data));
  } catch (err) {
    dispatch(getOneMovieFailure());
  }
};

// Get all Movies
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get(
      'https://netflix-clone-api-xrxw.onrender.com/api/movies',
      {
        headers: {
          token:
            'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        },
      }
    );
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(
      'https://netflix-clone-api-xrxw.onrender.com/api/movies',
      movie,
      {
        headers: {
          token:
            'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        },
      }
    );
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete(
      'https://netflix-clone-api-xrxw.onrender.com/api/movies/' + id,
      {
        headers: {
          token:
            'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        },
      }
    );
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
