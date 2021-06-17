import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Weather from './Weather.js'

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            displayName: '',
            displayLat: '',
            displayLon: '',
        };
    }

    handleChange = (e) => {
        this.setState({ city: e.target.value })
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //inside the try is what we want to happen, in the good/working case
        const key = process.env.REACT_APP_CITY_KEY;

        let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`

        const response = await axios.get(URL);

        const cityInformation = response.data[0];

        let displayName = cityInformation.display_name;

        let displayLat = cityInformation.lat;

        let displayLon = cityInformation.lon;

        this.setState({displayLat});

        this.setState({displayLon});

        this.setState({displayName});

        let weatherData = await axios.get(`http://localhost:3001/weather?lat=${displayLat}&lon=${displayLon}&searchQuery=${displayName.split(',')[0]}`);
        console.log(weatherData);

        this.setState({
            weather: weatherData.data
        });

        } catch(err) {
            e.preventDefault();
            // debugger;
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

                <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.displayLat},${this.state.displayLon}&zoom=10`} alt={this.state.city} />
            </>
        )
    }
}

export default City;