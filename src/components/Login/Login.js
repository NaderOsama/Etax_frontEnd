import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo/eTaxNewLogo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    // Reset validation errors
    setValidationErrors({
      email: "",
      password: "",
    });

    // Validate input fields
    let isValid = true;
    const errors = { ...validationErrors };

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errors.email = "البريد الإلكتروني غير صالح";
      isValid = false;
    }

    if (!isValid) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // Store the token in localStorage
        localStorage.setItem("token", token);

        // User registered successfully
        alert("User login successfully");
        window.location.replace("/welcome");
      } else {
        // Handle login error
        alert("Login failed");
      }
    } catch (error) {
          console.error("An error occurred during login", error);

    }
  };
  return (
    <>
      <div className="login">
        <div className="d-flex">
          <div className="col-lg-4">
            <div className="content-section">
              <div className="logo text-center">
                <img src={logo} alt="Logo" />
              </div>
              <h2>تسجيل الدخول</h2>
              <p>لا املك بريد إلكترونى على هذه المنظومة</p>
              <Link to="/register" className="create-account">
                إنشاء حساب
              </Link>
              {validationErrors.email && (
                <p className="error-message">{validationErrors.email}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleInputChange}
              />


              <input
                type="password"
                name="password"
                placeholder="كلمة المرور"
                value={formData.password}
                onChange={handleInputChange}
              />

              <button className="submit-button" onClick={handleLogin}>
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
