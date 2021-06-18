import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
// import Movie from './Movie.js';

class Movies extends React.Component {

  render() {
    let movies = []
    console.log(this.props.movies)
    try {
      movies = this.props.movies.map((movie, idx)=>{
      return<Card key ={idx}>
        <Card.Header>{movie.title}: {movie.average_votes}</Card.Header>
        <Card.Body>
          <img src={movie.image_url} alt={`${movie.title} Poster`}/>
          <Card.Text>{movie.overview}</Card.Text>
        </Card.Body>
      </Card>});

    } catch {
      movies = <Card><Card.Title>Sorry nothing here.</Card.Title></Card>
    }
    return(
      <CardColumns>
        {/* <Movie /> */}
        {movies}
      </CardColumns>
  )}

}

export default Movies;