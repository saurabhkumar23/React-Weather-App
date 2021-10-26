import React, {useState,Component} from "react";
import "./weather.css";
import {connect} from 'react-redux'
import {set_city} from '../redux/action'
import {set_country} from '../redux/action'
import {set_weather} from '../redux/action'

class Weather extends Component {

    constructor(props){
        super(props);
    }

    fetchWeather = () => {
        if(this.props.state.city.trim() == '' || this.props.state.country.trim() == ''){
            alert('fill both the fields!')
            return
        }
        console.log(this.props.state.city)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.state.city},${this.props.state.country}&APPID=f72d3208d111d02f19aabb823be0c462`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            data.main.temp = ((data.main.temp - 32) * 5/9).toFixed(2)
            data.main.temp_min = ((data.main.temp_min - 32) * 5/9).toFixed(2)
            data.main.temp_max = ((data.main.temp_max - 32) * 5/9).toFixed(2)
            this.props.setWeather(data)
        })
        .catch((e) => alert(e))
	}

    render() {

        const {setWeather,setCity,setCountry} = this.props
        const {city,country,weather} = this.props.state

        return (
            <div className='container'>
                <h1>REACT WEATHER APP</h1>
                <input  type='text'
                        placeholder='City'
                        name='city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                <input
                        type='text'
                        placeholder='Country'
                        name='country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                <button className='getweather' onClick={(e) => this.fetchWeather(e)}>Submit</button>
                {
                    weather ? 
                    <div className='display'>
                        <div className='main-temp'>
                            <h1>{weather.main.temp}&deg;</h1>
                            <h5>Temperature</h5>
                        </div>
                        <div className='sec-temp'>
                            <div>
                                <h1>{weather.main.temp_min}&deg;</h1>
                                <h5>Min. Temperature</h5>
                            </div>
                            <div>
                                <h1>{weather.main.temp_max}&deg;</h1>
                                <h5>Max. Temperature</h5>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        'setCity' : (payload) => {
            dispatch(set_city(payload))
        },
        'setCountry' : (payload) => {
            dispatch(set_country(payload))
        },
        'setWeather' : (payload) => {
            dispatch(set_weather(payload))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Weather);
