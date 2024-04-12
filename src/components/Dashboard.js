
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Navbar from "./Navbar";
import "../css/dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  if(!user) {
  return (
  <div>
  <Navbar/>
  <div className="dashboard-heading">Please log in</div>
  </div>)
  }
  else{
  return (
    <div className="container">
    <Navbar />
    
    <section className="dashboard">
    <div className="dashboard-page">
      <h3 className="dashboard-heading">Welcome, {user?.name}!</h3>
      {/* Add any additional features here */}
      </div>
      </section>
    </div>

  );
}
};

export default Dashboard;