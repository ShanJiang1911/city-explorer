import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Weather from './Weather.js'
import Movies from './Movies.js'

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weather: '',
            displayName: '',
            displayLat: '',
            displayLon: '',
            movies: '',
        };
    }

    handleChange = (e) => {
        this.setState({ city: e.target.value })
    }



    handleSubmit = async (e) => {
        e.preventDefault();

        try {
        //use submitted city name to get name and coordinates
        const key = process.env.REACT_APP_CITY_KEY;
        let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`
        const response = await axios.get(URL);

        //show the data and render map for the city
        const cityInformation = response.data[0];

        let displayName = cityInformation.display_name;

        let displayLat = cityInformation.lat;

        let displayLon = cityInformation.lon;

        this.setState({displayLat});

        this.setState({displayLon});

        this.setState({displayName});

        const server = process.env.REACT_APP_BACK_END_SERVER;
        
        //get weather data from server
        let weatherData = await axios.get(`${server}/weather?lat=${displayLat}&lon=${displayLon}&searchQuery=${displayName.split(',')[0]}`);
        console.log(weatherData);

        //get movie data from server
        let movieData = await axios.get(`${server}/movies?city=${this.state.city}`)
        console.log(movieData)

        this.setState({
            weather: weatherData.data,
            movies: movieData.data
        });

        console.log(cityInformation);

        }
        
        catch(err) {
            e.preventDefault();
            this.setState({
                errorMessage: `${err.message}: ${err.response.data.error}`
            })
        }

    }

    render() {
        return(
            <>
                <div>Please type in a city name</div>
                <Form onSubmit={this.handleSubmit}>
                    <input name="city" onChange={this.handleChange} />
                    <Button variant="primary" type="submit">Explore!</Button>
                </Form>
                
                { this.state.errorMessage ? <h3>{this.state.errorMessage}</h3> : ''}

                <h2>{this.state.displayName}</h2>

                {this.state.weather ? <Weather weather={this.state.weather} /> : ''}

                {this.state.city ? <h3>{this.state.city} is located at {this.state.displayLat} by {this.state.displayLon}</h3> : ''}

                <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.displayLat},${this.state.displayLon}&zoom=15`} alt={this.state.city} />

                {this.state.movies ? <Movies movies={this.state.movies} /> : ''}
            </>
        )
    }
}

export default City;