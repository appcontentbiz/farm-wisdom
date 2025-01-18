import WeatherComponent from '../components/Weather/WeatherComponent';
import '../styles/WeatherDashboard.css';

export default function WeatherDashboard() {
  return (
    <div className="weather-dashboard">
      <header className="dashboard-header">
        <h1>Weather Dashboard</h1>
        <p>Plan your farming activities with accurate weather data</p>
      </header>

      <div className="dashboard-content">
        <WeatherComponent location="San Francisco" />
        {/* Additional components like scheduling, planning, and Farmer's Almanac can be added here */}
      </div>
    </div>
  );
}
