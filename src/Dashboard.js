import { useEffect, useState } from "react";
import "./Dashboard.css";

const [tasks, setTasks] = useState([]);

useEffect(() => {
    const fetchWeather = async () => {
        const response = await fetch('api/weather');
        const data = await response.json();
    }
    fetchWeather();
}, [])


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="farm-plot"> farm plot place holder</div>
      <div className="weather-widget"> weather widget</div>
      <div className="tasks"> task place holder</div>
    </div>
  );
}
export default Dashboard;
