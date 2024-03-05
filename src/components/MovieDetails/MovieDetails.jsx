import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieDetails = () => {
  return (
   <div><nav>
                <ul>
                    <li>
                        <NavLink to='cast'>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to='reviews'>Reviews</NavLink>
                    </li>
                </ul>
            </nav></div>  
  )
}

export default MovieDetails
