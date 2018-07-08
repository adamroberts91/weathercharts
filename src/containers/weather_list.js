import React, { Component } from 'React';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => (weather.main.temp - 273.15).toFixed(2));
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return(
        <tr key={name}>
            <td><GoogleMap lat={lat} lon={lon} /></td>
            <td><Chart data={temps} colour="red" unit="&deg;C"/></td>
            <td><Chart data={pressures} colour="blue" unit="hPa"/></td>
            <td><Chart data={humidities} colour="orange" unit="%" /></td>
        </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (&deg;C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather }; // weather === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);