import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      alert(error.message);
    }
  };

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      backgroundColor: '#f0f8ff', // Light blue background
      fontFamily: 'Arial, sans-serif', // Change the font style
    },
    form: {
      backgroundColor: '#ffffff', // White background for the form
      borderRadius: '8px', // Rounded corners
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
      width: '300px', // Fixed width for the form
    },
    title: {
      fontSize: '32px', // Increase the title size
      color: '#333333', // Darker text color
      marginBottom: '20px', // Space below the title
    },
    button: {
      backgroundColor: '#007bff', // Custom button color
      border: 'none', // No border
    },
    buttonHover: {
      backgroundColor: '#0056b3', // Darker button color on hover
    },
    input: {
      border: '1px solid #007bff', // Custom border color for input fields
    },
    inputFocus: {
      borderColor: '#0056b3', // Darker border color when focused
      boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)', // Focus shadow effect
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1 style={styles.title}>Sign Up</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = styles.input.border)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
            onBlur={(e) => (e.target.style.borderColor = styles.input.border)}
          />
        </div>

        <button 
          onClick={handleSignup} 
          className="btn btn-primary" 
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Sign Up
        </button>

        <div>
          <p>
            Already have an account?{" "}
            <a href="/" className="hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
