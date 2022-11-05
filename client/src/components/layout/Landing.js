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
          <div className='buttons'>
            <Link to='/profiles' className='btn btn-primary'>
              Buy Services
            </Link>
            <a href='/register' className='btn btn-light'>
              Sell Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing
