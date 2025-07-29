#Weather App
This is a sleek and responsive "Weather App" built with HTML, CSS, and JavaScript. It fetches real-time weather data using the OpenWeatherMap API (https://openweathermap.org/api) and displays it in a clean UI.

![Weather App Screenshot]
<img width="377" height="377" alt="photo png" src="https://github.com/user-attachments/assets/eba9a14f-c245-4eca-b299-f04fac1438ae" />
<img width="330" height="330" alt="photo2 png" src="https://github.com/user-attachments/assets/944f1a4f-ae25-4ad6-ae2f-6a81b62bb799" />

#Features
Search for any city in the world
Displays temperature in Celsius
Shows weather description
Displays humidity percentage
Shows wind speed
Weather condition icon display
User-friendly error handling
Fully responsive design

#Tech Stack
HTML5 – Semantic markup for structure  
CSS3 – Custom styling with gradients and shadows  
JavaScript (Vanilla) – Dynamic content and API integration  
OpenWeatherMap API – Real-time weather data

#Installation
Clone the repository:
   git clone https://github.com/dsahu-03/webApp.git

Navigate to the project folder:
cd webApp

Open index.html in our browser:
We can simply double-click the file or use Live Server in VS Code

API Setup:
You need an API key from OpenWeatherMap:
Sign up for a free account.
const API_KEY = "4a681026df8f1f3940b5f58a88fe39f2";

File Structure
webApp

index.html     
style.css        
script.js     
bg.jpg         
README.md  

How It Works:
The user enters a city name.
On clicking the search button, the app calls the weather API.
Data like temperature, humidity, wind speed, and weather icon are shown.
If the city is not found, the app displays a friendly alert.
