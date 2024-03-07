import SearchForm from '../../components/SearchForm/SearchForm';
import React from 'react'
import { fetchMovies } from 'services/api';

import MovieList from 'components/MovieList/MovieList';

import { useHttp } from 'hook/useHttp';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
   

    const [searchParams, serSearchParams] = useSearchParams();
    const query = searchParams.get('query') || ''
const [movies, setMovies] = useHttp(fetchMovies, query)
  return (
    <div>
       
          <SearchForm serSearchParams={ serSearchParams} />
          <ul>{movies?.map(movie => (<MovieList movies={movie} key={movie.id} />))}
          </ul>
          
        
   </div>
 
  );
}

export default Movies
