Weather App
A simple web-based Weather App built with HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API. Users can enter a city name to view the current temperature, weather condition, humidity, and wind speed. The app supports searching by clicking a button or pressing the Enter key.
Features

Displays current weather data including temperature (°C), weather condition, humidity, and wind speed.
Responsive design with a clean, modern UI using a gradient background and card layout.
Supports searching by clicking the "Search" button or pressing the Enter key.
Error handling for invalid city names or empty inputs.
Uses the OpenWeatherMap API for real-time weather data.

Prerequisites

A modern web browser (e.g., Chrome, Firefox, Edge).
An API key from OpenWeatherMap. The free tier is sufficient.
A text editor (e.g., Visual Studio Code) for editing files.
Optional: A local server (e.g., VS Code Live Server extension) for testing.

Installation

Clone or Download the Project

Clone this repository or download the project files (index.html, styles.css, script.js).


Obtain an API Key

Sign up at OpenWeatherMap and navigate to the API section.
Generate a free API key and copy it.


Configure the API Key

Open script.js in a text editor.
Replace "YOUR_API_KEY" in the apiKey constant with your actual OpenWeatherMap API key:const apiKey = "YOUR_ACTUAL_API_KEY";




Project StructureEnsure the following files are in your project folder:
weather-app/
├── index.html
├── styles.css
├── script.js



Usage

Run the App

Open index.html in a web browser. You can:
Double-click the file to open it directly.
Use a local server (e.g., VS Code Live Server) for a better development experience.




Interact with the App

Enter a city name (e.g., "London") in the input field.
Click the "Search" button or press the Enter key to fetch weather data.
View the weather details (city name, temperature, condition, humidity, wind speed).
If an invalid city is entered, an error message will display.



Example

Input: "New York"
Output:
Weather in New York
Condition: Clear
Temperature: 20°C
Humidity: 65%
Wind Speed: 3.5 m/s



Customization

Change Units: To display temperatures in Fahrenheit, modify the apiUrl in script.js by changing units=metric to units=imperial.
Enhancements: Add features like:
Weather icons (use OpenWeatherMap's icon URLs).
5-day forecast (requires a different API endpoint).
Geolocation to fetch weather based on the user's location.



Troubleshooting

Invalid API Key: Ensure your OpenWeatherMap API key is correct and active. It may take a few minutes for a new key to activate.
City Not Found: Verify the city name is spelled correctly (e.g., "Paris" instead of "Pariss").
CORS Issues: If testing locally, use a local server to avoid CORS errors. Direct file access (file://) may restrict API calls.

Technologies Used

HTML: Structure of the web page.
CSS: Styling with a responsive design and gradient background.
JavaScript: Fetches and processes API data, handles user input, and updates the UI.
OpenWeatherMap API: Provides real-time weather data.

Acknowledgments

Inspired by weather app tutorials from DEV Community and GeeksforGeeks.
Uses the OpenWeatherMap API for weather data.

License
This project is licensed under the MIT License. Feel free to use and modify it for personal or educational purposes.
Contact
For questions or suggestions, please open an issue on the repository or contact the developer.
Last updated: May 23, 2025
