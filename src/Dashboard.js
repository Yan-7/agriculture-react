// Dashboard.js
import { useEffect, useState } from "react";
import "./Dashboard.css";
import VirtualFarmPlot from "./VirtualFarmPlot";

const WeatherWidget = ({ weather }) => (
  <div className="weather-widget">
    {weather ? (
      <>
        <h3>Weather Info</h3>
        <p> city: {weather.city}</p>
        <p>Temperature: {weather.temp}°C</p>
        <p>Condition: {weather.condition}</p>
      </>
    ) : (
      <p>Loading weather...</p>
    )}
  </div>
);

const TaskScheduler = ({ tasks, addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(""); // Reset task input
  };

  return (
    <div className="task-scheduler">
      <h3>Tasks</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

const Dashboard = () => {
  const [plots, setPlots] = useState([]);

  // Initialize weather state to match the expected structure or null
  const [weather, setWeather] = useState(null);

  const [tasks, setTasks] = useState(["harvest tomatoes", "water lettuce"]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const key = "05635c36859cc1ad617f0c7cbb493a9e";
      const city = "Hadera";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      // Parse and set weather data as needed for your WeatherWidget
      const parsedWeather = {
        city: city,
        temp: data.main.temp,
        condition: data.weather[0].main,
      };
      setWeather(parsedWeather);
    };

    fetchWeather();

    const fetchPlots = async () => {
      try {
        const response = await fetch("http://localhost:5000/plots"); // Adjust the URL/port as needed
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPlots(data);
      } catch (error) {
        console.error("Could not fetch plots:", error);
      }
    };

    fetchPlots();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="dashboard">
      <VirtualFarmPlot plots={plots} />
      <WeatherWidget weather={weather} />
      <TaskScheduler tasks={tasks} addTask={addTask} />
    </div>
  );
};

export default Dashboard;
