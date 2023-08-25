
const apiKey = 'b554c7f8fa15b89c2162663cfa4f648f';
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weatherInfo');
const cityInput = document.getElementById('cityInput');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    }
});

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const weatherHtml = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;

        weatherInfo.innerHTML = weatherHtml;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
    