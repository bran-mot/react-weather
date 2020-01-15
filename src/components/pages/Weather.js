import React from 'react';
import { connect } from 'react-redux';
import FlexContainer from '../FlexContainer';
import NavBar from '../NavBar';
import WeatherIcon from '../WeatherIcon';
import styled from 'styled-components';
import TabBar from '../TabBar';
import Tab from '../Tab';

const StyledWeather = styled.div`
    .hi-lo div {
        padding 0 10px
    }
    .city-details{
      width: 100%;
    }
    .current-weather{
      justify-content: center;
      div{
        width: 30%;
        padding: 10px;
      }
    }
`;

function Weather(props) {
  return (
    <StyledWeather>
      <NavBar />
      {props.noCity === false ? (
        <FlexContainer className='column'>
          <FlexContainer className='city-details'>
            <h3>
              {props.city}, {props.country}
            </h3>
          </FlexContainer>
          <TabBar>
            <Tab className='active'>Current</Tab>
            <Tab>Forecast</Tab>
          </TabBar>
          <FlexContainer className='current-weather'>
            <div>
              <WeatherIcon className='main'></WeatherIcon>
              <h1>{props.temp.temp} &deg;K</h1>
              <h1>
                {props.weather.main}, {props.weather.description}
              </h1>
            </div>
            <ul>
              <li>Hi: {props.temp.temp_max}&deg;K</li>
              <li>Lo: {props.temp.temp_min}&deg;K</li>
              <li>Pressure: {props.temp.pressure}</li>
              <li>Humidity: {props.temp.humidity}</li>
            </ul>
            <ul>
              <li>Wind Speed: {props.wind.speed}</li>
              <li>Direction: {props.wind.deg}</li>
            </ul>
          </FlexContainer>
        </FlexContainer>
      ) : (
        ''
      )}
    </StyledWeather>
  );
}

const mapStateToProps = state => {
  return {
    noCity: state.weather.initial,
    city: state.weather.name,
    country: state.weather.sys.country,
    temp: state.weather.main,
    weather: state.weather.weather[0],
    wind: state.weather.wind
  };
};

export default connect(mapStateToProps)(Weather);
