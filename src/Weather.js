import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
    render() {
        return(
            <>
                <h3>Weather!</h3>
                {/* <WeatherDay /> */}
                <ListGroup>
                {this.props.weather.map((weather, i) => 
                    <ListGroup.Item key={i} variant="danger">{weather.date} : {weather.description}</ListGroup.Item>
                )}
                </ListGroup>
            </>
        )
    }
}

export default Weather;