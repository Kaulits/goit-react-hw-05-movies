import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import Movies from "pages/Movies/Movies";
import Layout from "components/Layout/Layout";


export const App = () => {
  return (
    
    <Routes>
<Route path='/' element={<Layout />}>
         <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
      </Route>
      <Route path='*' element={<NotFound/>} />
   </Routes>
   
  );
};

