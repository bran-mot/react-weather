import React from 'react';
import { connect } from 'react-redux';
import FlexContainer from '../FlexContainer';
import NavBar from '../NavBar';
import WeatherIcon from '../WeatherIcon';
import styled from 'styled-components';
import TabBar from '../TabBar';
import Tab from '../Tab';
import { tempConverter, speedConverter } from '../../utils/convert';
import { getDirection } from '../../utils/direction';
import { getDatestring, getDateString } from '../../utils/dateTime';
import { getWeatherIcon } from '../../utils/weather';

const StyledWeather = styled.div`
    .hi-lo div {
        padding 0 10px
    }
    .city-details{
      width: 100%;
      text-align: center;
    }
    .current-weather{
      img{
        width: 180px;
        height: auto;
      }
      justify-content: center;
      align-items:center;
      div:first-child{
        text-align: center;
      }
      & > div{
        width: 30%;
        padding: 10px;
        .hi-lo{
          justify-content: space-evenly;
          width: 100%;
          .div{
            width: 50%;
          }
        }
      }
    }
    .weather-details{
      width: 100%;
      justify-content: center;
    }
    table{
      tr{
        td{
          padding: 5px;
        }
        td:first-child{
          text-align: right;
          font-weight: bold;
        } 
      }
    }
`;

function Weather(props) {
  return (
    <StyledWeather>
      <NavBar />
      {props.noCity === false ? (
        <FlexContainer className='column'>
          <div className='city-details'>
            <h2>
              {props.city}, {props.country}
            </h2>
            <h5>{getDateString(props.timestamp, props.units)}</h5>
          </div>
          <FlexContainer className='current-weather'>
            <div>
              <img src={`/assets/${getWeatherIcon(props.weather.id)}`} />
              <h1>{tempConverter(props.temp.temp, props.units)}</h1>
              <h3>
                {props.weather.main}, {props.weather.description}
              </h3>
            </div>
            <div>
              <FlexContainer className='hi-lo'>
                <div>
                  <h5>Hi:</h5>
                  <h3>{tempConverter(props.temp.temp_max, props.units)}</h3>
                </div>
                <div>
                  <h5>Lo:</h5>
                  <h3>{tempConverter(props.temp.temp_min, props.units)}</h3>
                </div>
              </FlexContainer>
              <FlexContainer className='weather-details fluid'>
                <table>
                  <tbody>
                    <tr>
                      <td>Pressure</td>
                      <td>{props.temp.pressure}</td>
                    </tr>
                    <tr>
                      <td>Humidity</td>
                      <td>{props.temp.humidity}</td>
                    </tr>
                    <tr>
                      <td>Wind Speed</td>
                      <td>
                        {getDirection(props.wind.deg) +
                          ' ' +
                          speedConverter(props.wind.speed, props.units)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </FlexContainer>
            </div>
          </FlexContainer>
        </FlexContainer>
      ) : (
        <h1>Search for a city to get started</h1>
      )}
    </StyledWeather>
  );
}

const mapStateToProps = state => {
  return {
    timestamp: state.weather.dt,
    units: state.weather.units,
    noCity: state.weather.initial,
    city: state.weather.name,
    country: state.weather.sys.country,
    temp: state.weather.main,
    weather: state.weather.weather[0],
    wind: state.weather.wind
  };
};

export default connect(mapStateToProps)(Weather);
