

// import { fetchMovies } from 'services/api';
import { useEffect, useState } from 'react';
import s from './MovieList.module.css'
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/api';



const MovieList = () => {
 
const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrending()
      .then(data => setMovies(data))
      .catch(err => setError(err.message));
  }, []);

    console.log(error)
    
  return (
    <div className={s.card}>
          <ul  className={s.list}> {movies?.map(movie => <li key={movie.id } className={s.li}><Link to={`/movies/${movie.id}`} className={s.link}>
        <img
           src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`}
          alt={movie.title}
          className={s.poster}
        />
        <h2 className={s.title}>{movie.title || 'Default Title'}</h2>
      </Link></li>)}
                
          </ul>
                     
    </div>
  );
}

export default MovieList;