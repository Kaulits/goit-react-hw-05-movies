import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchActors } from 'services/api';
import s from './Cast.module.css';
import { useHttp } from 'hook/useHttp';

const Cast = () => {
    const { id } = useParams();
  
    const [actors] = useHttp(fetchActors, id)

    if (!actors) {
        return <h2>Loading...</h2>;
    }
   
    return (
        <div className={s.wrapper}>
            {actors.map(actor => (
                <div key={actor.id}><ul className={s.actorslist}><li key={actor.id}>
                    <img className={s.actorimg} src={actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                        : `https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-1.jpg`}
                        alt={actor.name} />
                    <h2 className={s.name}>Actor: {actor.name}</h2>
                    <p className={s.character}>Character: {actor.character}</p>
                </li></ul></div>
                
            ))}
        <Outlet/>
        </div>
    );
}

export default Cast;
