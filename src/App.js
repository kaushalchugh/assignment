// App.js
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
