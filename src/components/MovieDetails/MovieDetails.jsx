import React, { useRef } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import s from './MovieDetails.module.css'
import { fetchMovieDetails } from 'services/api';
import { useHttp } from 'hook/useHttp';

const MovieDetails = () => {

 const { id } = useParams();


    const [movies] = useHttp(fetchMovieDetails, id)
    const location = useLocation()
     const goBackRef = useRef(location.state?.from || '/');
 

       if (!movies) {
        return <h1>Loading...</h1>;
    }

    
    return (
    <div>
          
            <Link to={goBackRef.current}> Go back</Link>
             
            <div className={s.wrapper}>
                <img
                    className={s.poster}
                    src={movies.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
                        : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`}
                    alt={movies.title}
                />
                <div className={s.about}>
                    <h2>{movies.title}</h2>
                    <p>User Score: {(movies.popularity / 100)?.toFixed(0)}%</p>
                    <h3>Overview</h3>
                    <p>{movies.overview}</p>
                    <h3>Genres</h3>
                    <ul className={s.genrelist}>
                        {movies.genres?.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='cast'>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to='reviews'>Reviews</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div> 
  )
}

export default MovieDetails
