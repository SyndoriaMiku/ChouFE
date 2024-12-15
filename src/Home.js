import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Home = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const GOOGLE_MAP_API_KEY = "AIzaSyBz3U_sP8oqwtpu8BpnvWOIxYIbvs4uwFQ"; //Your Google Map API key


    //Fetch weather data
    

    //Update time per minute
    useEffect(() => {
        //Get current time
        setCurrentTime(new Date());

        //Set interval to update time per minute
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Weather App</h1>
            <h3>{currentTime.toLocaleString()}</h3>

            <div class="map-container">
            
            </div>

            <div class="info-container">
                

                <div class="weather-info">
                    <p>Nhiệt độ: {weatherData.temp}</p>
                    <p>Độ ẩm: {weatherData.humidity}</p>
                    <p>Áp suất: {weatherData.pressure}</p>
                    <p>Nồng độ CO: {weatherData.co}</p>
                    <p>Nồng độ CO2: {weatherData.co2}</p>
                </div>

            </div>

            <div class="time-info">
                <p>Thời gian: {currentTime.toLocaleString()}</p>
            </div>
        
        
            </div>
        );
    };

export default Home;