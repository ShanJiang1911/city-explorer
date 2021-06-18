import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {
    render() {
        return(
            <>
                <h3>One Day forcast</h3>
                <ListGroup>
                    <ListGroup.Item variant="danger">{this.props.weather.date} : {this.props.weather.description}</ListGroup.Item>
                </ListGroup>
            </>
        )
    }
}


export default WeatherDay;