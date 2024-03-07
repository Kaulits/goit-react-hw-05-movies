import s from './SearchList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useHttp } from 'hook/useHttp';
import { fetchMovies } from 'services/api'; // Імпортуємо функцію fetchMovies

const SearchList = ({ query }) => { // Приймаємо параметр query
  const [movies] = useHttp(() => fetchMovies(query)); // Викликаємо функцію fetchMovies з параметром query
  const location = useLocation();
  
  return (
    <div className={s.card}>
      <ul className={s.list}>
        {movies?.map(movie => (
          <li key={movie.id} className={s.li}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`} className={s.link}>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`}
                alt={movie.title}
                className={s.poster}
              />
              <h2 className={s.title}>{movie.title || 'Default Title'}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
