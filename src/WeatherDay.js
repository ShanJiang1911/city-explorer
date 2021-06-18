import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class WeatherDay extends React.Component {
    render() {
        return(
            <>
                <h3>One Day forcast</h3>
                <ListGroup>
                {/* {this.props.weather.map((weather, i) =>  */}
                    <ListGroup.Item variant="danger">{this.props.weather.date} : {this.props.weather.description}</ListGroup.Item>
                {/* )} */}
                </ListGroup>
            </>
        )
    }
}

{/* <ListGroup>
                {this.props.weather.map((weather, i) => 
                    <ListGroup.Item key={i} variant="danger">{weather.date} : {weather.description}</ListGroup.Item>
                )}
                </ListGroup> */}


export default WeatherDay;