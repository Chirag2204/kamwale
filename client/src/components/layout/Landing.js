import React from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchBox from '../layout/Searchbox';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='large'>Kamwale</h1>
          <p className='lead'>
            Buy and Sell all kind of Household Services from plumbing to
            Baby-sitting.
          </p>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </div>
      </div>
    </section>
  );
};

export default Landing
