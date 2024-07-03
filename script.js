// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = 'ec9256ad7f6e5b057aa962ebff5f3cbe';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${ec9256ad7f6e5b057aa962ebff5f3cbe}`;

// Fetch weather data from API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Check console for API response

        // Update UI with fetched data
        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('weather').textContent = data.weather[0].description;
        document.getElementById('location').textContent = data.name;
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
    });
