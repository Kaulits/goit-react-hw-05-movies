import React from 'react';
import { Link } from 'react-router-dom';
import s from './NotFound.module.css'

const NotFound = () => {
  return (
      <div className={s.not_found_container}> 
      <h1 className={s.not_found_heading}>Ops, page is not found. Try again! Or not.</h1> 
      <Link to='/' className={s.not_found_link}>Go Home</Link> 
    </div>
  );
};

export default NotFound;
