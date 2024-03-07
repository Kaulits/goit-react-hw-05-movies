import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = ({setSearchParams}) => {
 
    const { register, handleSubmit, reset } = useForm();
    const submit = data => {
        setSearchParams(data.queryStr ? { query: data.queryStr } : {})
         reset()
}


  return (
   
      <form onSubmit={handleSubmit(submit)}>
        <input {...register('queryStr')} type='text'       />
        <button type="submit">Search</button>
      </form>
   
  );
}

export default SearchForm;
