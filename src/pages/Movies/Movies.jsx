import React, { useMemo } from 'react';
import { useHttp } from 'hook/useHttp';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchList from '../../components/SearchList/SearchList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const queryParams = useMemo(() => ({ q: query }), [query]);
  const [movies] = useHttp(fetchMovies, queryParams);

console.log(movies)
    
  return (
    <div>
      <SearchForm setSearchParams={setSearchParams} />
      <SearchList query={query} /> {/* Передаємо значення query до SearchList */}
    </div>
  );
}

export default Movies;
