import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
    render() {
        return(
            <>
                <h3>Single Special Movie</h3>
                <ListGroup>
                    <ListGroup.Item variant="danger">{this.props.Movie.date} : {this.props.Movie.description}</ListGroup.Item>
                </ListGroup>
            </>
        )
    }
}

export default Movie;