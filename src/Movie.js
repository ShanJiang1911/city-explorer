import React from 'react';
import Card from 'react-bootstrap/Card';


class Movie extends React.Component {
    render() {
        return(
            <>
                <h3>Single Special Movie</h3>
                <Card>
                <Card.Header>{this.props.movie.title}: {this.props.movie.average_votes}</Card.Header>
                <Card.Body>
                <img src={this.props.movie.image_url} alt={`${this.props.movie.title} Poster`}/>
                <Card.Text>{this.props.movie.overview}</Card.Text>
                </Card.Body>
                </Card>
            </>
        )
    }
}

export default Movie;