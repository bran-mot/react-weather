import React from 'react';
import Form from './Form';
import Input from './input';
import Button from './Button';
import { connect } from 'react-redux';
import { requestWeather } from '../actions/weather';

class CitySearch extends React.Component {
  constructor(props) {
    super();
    this.state = { city: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    const city = this.state.city;
    this.props.requestWeather(city);
    console.log('submitted');
  }

  onChange(event) {
    this.setState({ city: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input type='text' onChange={this.onChange} placeholder='London' />
        <Button type='submit'>Get Weather</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    requestWeather: city => {
      dispatch(requestWeather(city));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
