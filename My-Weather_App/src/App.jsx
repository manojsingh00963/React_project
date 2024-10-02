//App.js

import { MagnifyingGlass } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function MyWeatherApp() {
	const [input, setInput] = useState('');
	const [weather, setWeather] = useState({
		loading: false,
		data: {},
		error: false,
	});

	// Fetch weather by geolocation
	useEffect(() => {
		const getWeatherByLocation = (lat, lon) => {
			const url = 'https://api.openweathermap.org/data/2.5/weather';
			const api_key = 'f00c38e0279b7bc85480c3fe775d518c'; // Your API key
			setWeather({ ...weather, loading: true });
			axios
				.get(url, {
					params: {
						lat: lat,
						lon: lon,
						units: 'metric',
						appid: api_key,
					},
				})
				.then((res) => {
					setWeather({ data: res.data, loading: false, error: false });
				})
				.catch((error) => {
					setWeather({ ...weather, data: {}, error: true });
					console.log('error', error);
				});
		};

		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const { latitude, longitude } = position.coords;
						getWeatherByLocation(latitude, longitude);
					},
					() => {
						// Error handling for location access denied
						setWeather({ ...weather, error: true });
					}
				);
			} else {
				// Geolocation not supported
				setWeather({ ...weather, error: true });
			}
		};

		// Call the function to get weather automatically
		getLocation();
	}, []);

	const toDateFunction = () => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const WeekDays = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const currentDate = new Date();
		const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
		return date;
	};

	const search = async (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			setInput('');
			setWeather({ ...weather, loading: true });
			const url = 'https://api.openweathermap.org/data/2.5/weather';
			const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
			await axios
				.get(url, {
					params: {
						q: input,
						units: 'metric',
						appid: api_key,
					},
				})
				.then((res) => {
					setWeather({ data: res.data, loading: false, error: false });
				})
				.catch((error) => {
					setWeather({ ...weather, data: {}, error: true });
					setInput('');
					console.log('error', error);
				});
		}
	};

	return (
    <div className=" container mx-auto ">

		<div className="App wedcard  ">
			<h1 className="app-name">My Weather App</h1>
			<div className="search-bar">
				<input
					type="text"
					className="city-search"
					placeholder="Enter City Name.."
					name="query"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					onKeyPress={search}
				/>
			</div>
			{weather.loading && (
				<>
					<br />
					<br />
					<MagnifyingGlass visible={true}  height="80"  width="80"  ariaLabel="magnifying-glass-loading"  wrapperStyle={{}}  wrapperClass="magnifying-glass-wrapper"  glassColor="#a281b86a"  color="#011627"  />
				</>
			)}
			{weather.error && (
				<>
					<br />
					<br />
					<span className="error-message">
						<FontAwesomeIcon icon={faFrown} />
						<span style={{ fontSize: '20px' }}>City not found or location denied</span>
					</span>
				</>
			)}
			{weather && weather.data && weather.data.main && (
				<div>
					<div className="city-name">
						<h2>
							{weather.data.name}, <span>{weather.data.sys.country}</span>
						</h2>
					</div>
					<div className="date">
						<span>{toDateFunction()}</span>
					</div>
					<div className="icon-temp">
						<img
							className=""
							src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
							alt={weather.data.weather[0].description}
						/>
						{Math.round(weather.data.main.temp)}
						<sup className="deg">°C</sup>
					</div>
					<div className="des-wind">
						<p>{weather.data.weather[0].description.toUpperCase()}</p>
						<p>Wind Speed: {weather.data.wind.speed}m/s</p>
					</div>
				</div>
			)}
		</div>
    </div>
	);
}

export default MyWeatherApp;
