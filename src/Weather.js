import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
    render() {
        return(
            <>
                <h3>Weather!</h3>
                
                <ListGroup>
                {this.props.weather.map((weather, i) => 
                    <WeatherDay weather={weather}/>
                )}
                </ListGroup>
            </>
        )
    }
}

export default Weather;