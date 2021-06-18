import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

class Movie extends React.Component {

  render() {
    let movies = []
    console.log(this.props.movies)
    try {
      movies = this.props.movies.map((movie, idx)=>{
      console.log(movie);
      return<Card key ={idx}>
        <Card.Header>{movie.title}: {movie.average_votes}</Card.Header>
        <Card.Body>
          <img src={movie.image_url} alt={`${movie.title} Poster`}/>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
      </Card>});

    } catch {
      movies = <Card><Card.Title>Sorry, no movie data was available.</Card.Title></Card>
    }
    return(
      <CardColumns>
        {movies}
      </CardColumns>
  )}

}

export default Movie;