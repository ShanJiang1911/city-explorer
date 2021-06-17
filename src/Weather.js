import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
    render() {
        return(
            <>
                <h3>Weather!</h3>
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