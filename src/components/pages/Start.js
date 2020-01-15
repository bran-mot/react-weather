import React from 'react';
import CitySearch from '../CitySearch';
import { connect } from 'react-redux';

export default function Start(props) {
  return (
    <div className='start'>
      <p>Enter your Zipcode to get started</p>
      <CitySearch />
    </div>
  );
}
