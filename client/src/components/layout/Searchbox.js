import React, { useState } from 'react'

const Searchbox = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const [keywordCity, setKeywordCity] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      if (keywordCity.trim()) {
        history.push(`/search/${keyword}/${keywordCity}`);
        return
      }
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <form class='form search' onSubmit={submitHandler}>
      <div class='form-group'>
        <select
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          className='mr-sm-2 ml-sm-5'
        >
          <option value='0' className='text-dark'>
            What kind of Service
          </option>
          <option value='Baby sitting'>Baby sitting</option>
          <option value='Plumbing'>Plumbing</option>
          <option value='House Keeping'>House Keeping</option>
          <option value='Tutoring'>Tutoring</option>
          <option value='Electrical Services'>Electrical Services</option>
          <option value='Moving and delivery'>Moving and delivery</option>
          <option value='Personal Care'>
            Personal Care(like haicut)
          </option>
          <option value='Catering Services'>Catering Services</option>
          <option value='Other'>Other</option>
        </select>


        <div className='form-group'>
          <select name='location' value={keywordCity} onChange={(e) => setKeywordCity(e.target.value)}>
            <option value='' className='text-dark'>
              City
            </option>
            <option value='Indore'>Indore</option>
            <option value='Pune'>Pune</option>
            <option value='Bangalore'>Bangalore</option>
          </select>
        </div>
      </div>
      <input type='submit' className='btn btn-primary my-1' />
    </form>
  );
}

export default Searchbox
