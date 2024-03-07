import React from 'react';
import { useForm } from 'react-hook-form';

const SearchForm = ({serSearchParams}) => {
 
    const { register, handleSubmit, reset } = useForm();
    const submit = data => {
        console.log(data)
        reset()
        serSearchParams(data.queryStr ? {query: data.queryStr} : {})
}


  return (
   
      <form onSubmit={handleSubmit(submit)}>
        <input {...register('queryStr')} type='text'       />
        <button type="submit">Search</button>
      </form>
   
  );
}

export default SearchForm;
