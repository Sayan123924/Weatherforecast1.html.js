// const apiKey = '17979f41718e81f87596320b69c4ea01';

// async function getWeather() {
//     const city = document.getElementById('stateInput').value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`City not found: ${response.statusText}`);
//         }
//         const weather = await response.json();
//         updateWeatherInfo(weather);
//         updateVideoBackground(weather.weather[0].main);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         alert(error.message);
//     }
// }

// function updateWeatherInfo(weather) {
//     const temperature = weather.main.temp;
//     const condition = weather.weather[0].main;
//     const humidity = weather.main.humidity;
//     const windSpeed = weather.wind.speed;

//     document.getElementById('temperature').innerText = `${temperature}°C`;
//     document.getElementById('condition').innerText = condition;
//     document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
//     document.getElementById('windSpeed').innerText = `Wind Speed: ${windSpeed} Km/H`;

//     let iconPath = '';
//     switch (condition.toLowerCase()) {
//         case 'clear':
//             iconPath = 'clear.png';
//             break;
//         case 'clouds':
//             iconPath = 'cloud.png';
//             break;
//         case 'mist':
//             iconPath = 'mist.png';
//             break;
//         case 'rain':
//             iconPath = 'rain.png';
//             break;
//         case 'snow':
//             iconPath = 'snow.png';
//             break;
//         case 'haze':
//             iconPath = 'haze.png';
//             break;
//         default:
//             iconPath = 'default.png';
//     }
//     document.getElementById('weatherIcon').src = iconPath;
// }

// function updateVideoBackground(condition) {
//     const videoElement = document.getElementById('backgroundVideo');
//     let videoSource = '';

//     switch (condition.toLowerCase()) {
//         case 'clear':
//             videoSource = 'clear_1.mp4';
//             break;
//         case 'clouds':
//             videoSource = 'cloud_3.mp4';
//             break;
//         case 'mist':
//             videoSource = 'cloud_4.mp4';
//             break;
//         case 'rain':
//             videoSource = 'rain_1.mp4';
//             break;
//         case 'snow':
//             videoSource = 'snow_2.mp4';
//             break;
//         case 'haze':
//             videoSource = 'haze_2.mp4';
//             break;
//         default:
//             videoSource = 'default.mp4';
//     }

//     videoElement.src = videoSource;
// }

const apiKey = '17979f41718e81f87596320b69c4ea01';

async function getWeather() {
    const city = document.getElementById('stateInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`City not found: ${response.statusText}`);
        }
        const weather = await response.json();
        updateWeatherInfo(weather);
        updateVideoBackground(weather.weather[0].main);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert(error.message);
    }
}

function updateWeatherInfo(weather) {
    const temperature = weather.main.temp;
    const condition = weather.weather[0].main;
    const humidity = weather.main.humidity;
    const windSpeed = weather.wind.speed;

    document.getElementById('temperature').innerText = `${temperature}°C`;
    document.getElementById('condition').innerText = condition;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('windSpeed').innerText = `Wind Speed: ${windSpeed} Km/H`;

    let iconPath = '';
    switch (condition.toLowerCase()) {
        case 'clear':
            iconPath = 'clear.png';
            break;
        case 'clouds':
            iconPath = 'cloud.png';
            break;
        case 'mist':
            iconPath = 'mist.png';
            break;
        case 'rain':
            iconPath = 'rain.png';
            break;
        case 'snow':
            iconPath = 'snow.png';
            break;
        case 'haze':
            iconPath = 'haze.png';
            break;
        case 'thunderstorm':
            iconPath = 'thunderstorm.png';
            break;
        default:
            iconPath = 'default.png';
    }
    document.getElementById('weatherIcon').src = iconPath;
}

function updateVideoBackground(condition) {
    const videoElement = document.getElementById('backgroundVideo');
    let videoSource = '';

    switch (condition.toLowerCase()) {
        case 'clear':
            videoSource = 'clear_1.mp4';
            break;
        case 'clouds':
            videoSource = 'cloud_3.mp4';
            break;
        case 'mist':
            videoSource = 'cloud_4.mp4';
            break;
        case 'rain':
            videoSource = 'rain_1.mp4';
            break;
        case 'snow':
            videoSource = 'snow_2.mp4';
            break;
        case 'haze':
            videoSource = 'haze_2.mp4';
            break;
        case 'thunderstorm':
            videoSource = 'thunderstorm.mp4';
            break;
        default:
            videoSource = 'default.mp4';
    }

    videoElement.src = videoSource;
}
