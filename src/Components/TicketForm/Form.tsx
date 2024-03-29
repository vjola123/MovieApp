import React, { useState } from "react";
import "./Form.css";
import { useLocation, useNavigate, Link } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  phone: string;
}

const Form: React.FC = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let movieBookingUserDetails = {
      movieName: Location.state.movieName,
      userData
    };

    let localData = localStorage.movieBookingUserDetails;
    if (!localData) {
      localStorage.setItem('movieBookingUserDetails', JSON.stringify([movieBookingUserDetails]));
    } else {
      let parseArray = JSON.parse(localData);
      let newDataArray = [
        ...parseArray, movieBookingUserDetails
      ];
      localStorage.setItem('movieBookingUserDetails', JSON.stringify(newDataArray));
    }
    setUserData({
      name: "",
      email: "",
      phone: ""
    });
  }

  return (
    <div className="Form">
      <h1 className="movie-name">{Location.state.movieName}</h1>
      <form onSubmit={handleSubmit}>
        <div className="name input-item">
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            name="name"
            type="text"
            value={userData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="email input-item">
          <label htmlFor="email">Email : </label>
          <input
            id="email"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="email input-item">
          <label htmlFor="phone">Phone Number : </label>
          <input
            id="phone"
            type="text"
            value={userData.phone}
            maxLength={10}
            placeholder="Mobile number"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="book-btn"
            type="submit"
          >
            Book Ticket
          </button>
        </div>
      </form>
      <Link to={'/'} className="home-btn">Go to Home</Link>
    </div>
  );
};

export default Form;