import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Navbar from "./Navbar";
import "../css/UserProfile.css";

const UserProfile = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock update operation
    setUser({ ...user, name, email });
    setEditing(false);
  };

  if(!user){
    return (
      <>
        <Navbar/>
        <div>Please login to view your profile!</div>
      </>
    )
  }
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      {!editing && (
        <>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={logout}>Logout</button>
        </>
      )}
      {editing && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;