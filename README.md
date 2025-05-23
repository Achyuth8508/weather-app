# Weather App

A simple web-based Weather App built with HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API. Users can enter a city name to view the current temperature, weather condition, humidity, and wind speed. The app supports searching by clicking a button or pressing the Enter key.

## Features
- Displays current weather data including temperature (°C), weather condition, humidity, and wind speed.
- Responsive design with a clean, modern UI using a gradient background and card layout.
- Supports searching by clicking the "Search" button or pressing the Enter key.
- Error handling for invalid city names or empty inputs.
- Uses the OpenWeatherMap API for real-time weather data.

## Prerequisites
- A modern web browser.
- An API key from [OpenWeatherMap](https://openweathermap.org/). The free tier is sufficient.
- A text editor (e.g., Visual Studio Code) for editing files.
  

## Installation
1. **Clone or Download the Project**
   - Clone this repository or download the project files (`index.html`, `styles.css`, `script.js`).

2. **Obtain an API Key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) and navigate to the API section.
   - Generate a free API key and copy it.

3. **Configure the API Key**
   - Open `script.js` in a text editor.
   - Replace `"YOUR_API_KEY"` in the `apiKey` constant with your actual OpenWeatherMap API key:
     ```javascript
     const apiKey = "YOUR_ACTUAL_API_KEY";
     ```

4. **Project Structure**
   Ensure the following files are in your project folder:
   ```
   weather-app/
   ├── index.html
   ├── styles.css
   ├── script.js
   ```

## Usage
1. **Run the App**
   - Open `index.html` in a web browser. You can:
     - Double-click the file to open it directly.
     - Use a local server (e.g., VS Code Live Server) for a better development experience.

2. **Interact with the App**
   - Enter a city name (e.g., "London") in the input field.
   - Click the "Search" button or press the **Enter** key to fetch weather data.
   - View the weather details (city name, temperature, condition, humidity, wind speed).
   - If an invalid city is entered, an error message will display.

## Example
- Input: "New York"
- Output:
  - Weather in New York
  - Condition: Clear
  - Temperature: 20°C
  - Humidity: 65%
  - Wind Speed: 3.5 m/s



## Technologies Used
- **HTML**: Structure of the web page.
- **CSS**: Styling with a responsive design and gradient background.
- **JavaScript**: Fetches and processes API data, handles user input, and updates the UI.
- **OpenWeatherMap API**: Provides real-time weather data.

## Acknowledgments
- Uses the [OpenWeatherMap API](https://openweathermap.org/) for weather data.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT).

## Contact

