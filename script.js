const apiKey = '58f0b0d8e26afa8e17c650c6970e31c3';

async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        alert('Location not found');
        return;
    }

    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const city = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;

    document.getElementById('city').textContent = city;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
}
