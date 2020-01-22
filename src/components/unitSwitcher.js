import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TabBar from './TabBar';
import Tab from './Tab';
import { switchUnits } from '../actions/weather';

function UnitSwitcher(props) {
  console.log(props);
  return (
    <TabBar>
      <Tab
        className={props.currentUnits === 'metric' ? 'active' : ''}
        onClick={() => props.switchUnits('metric')}
      >
        &deg;C
      </Tab>
      <Tab
        className={props.currentUnits === 'imperial' ? 'active' : ''}
        onClick={() => props.switchUnits('imperial')}
      >
        &deg;F
      </Tab>
    </TabBar>
  );
}

const mapStateToProps = state => {
  return {
    currentUnits: state.weather.units
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchUnits: unit => {
      dispatch(switchUnits(unit));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitSwitcher);
