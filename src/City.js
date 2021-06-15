import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

        const key = process.env.REACT_APP_CITY_KEY;

        let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`

        const response = await axios.get(URL);

        const cityInformation = response.data[0];

        let displayName = cityInformation.display_name;

        let displayLat = cityInformation.lat;

        let displayLon = cityInformation.lon;

        this.setState({displayName});

        this.setState({displayLat});

        this.setState({displayLon});

        console.log(cityInformation);
    }

    render() {
        return(
            <>
                <div>Please type in a city name</div>
                <Form onSubmit={this.handleSubmit}>
                    <input name="city" onChange={this.handleChange} />
                    <Button variant="primary" type="submit">Explore!</Button>
                </Form>
                
                <h2>{this.state.displayName}</h2>
                <h3>{this.state.city} is located at {this.state.displayLat} by {this.state.displayLon}</h3>
            </>
        )
    }
}

export default City;