const apiKey = "2a3274e7900f1ff8d5ac3dadf2b7a4d0"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');

async function fetchWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
        errorMessage.textContent = '';
    } catch (error) {
        weatherInfo.style.display = 'none';
        errorMessage.textContent = 'Please enter a valid city name';
        console.error('Error:', error.message);
    }
}

function displayWeather(data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp } = data.main;
    const { humidity } = data.main;
    const { speed } = data.wind;

    document.getElementById('city-name').textContent = `Weather in ${name}`;
    document.getElementById('weather-description').textContent = `Condition: ${description.charAt(0).toUpperCase() + description.slice(1)}`;
    document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${speed} m/s`;
    weatherInfo.style.display = 'block';
}

searchButton.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        errorMessage.textContent = 'Please enter a city name';
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = searchInput.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            errorMessage.textContent = 'Please enter a city name';
        }
    }
});