import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import Movies from "pages/Movies/Movies";
import Layout from "components/Layout/Layout";
import MovieDetails from "components/MovieDetails/MovieDetails";
import Cast from "components/Cast/Cast"
import Reviews from "components/Reviews/Reviews";

export const App = () => {
  return (
    
    <Routes>
<Route path='/' element={<Layout />}>
         <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} >
          <Route path='cast' element={<Cast />} />
             <Route path='reviews' element={<Reviews />} />
          </Route>
           
      </Route>
      <Route path='*' element={<NotFound/>} />
   </Routes>
   
  );
};

