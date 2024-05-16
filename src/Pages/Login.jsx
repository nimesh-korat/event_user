import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "2",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    profilePic: "",
    role: "2",
    phoneNo: "",
    address: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setSignupData((prevData) => ({
      ...prevData,
      profilePic: file,
    }));
  };

  const loginMutation = useMutation({
    mutationFn: (formData) => {
      return axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/login`,
        formData
      );
    },
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(loginData);
  };

  if (loginMutation.isSuccess) {
    localStorage.setItem("token", loginMutation.data.data.token);
    toast.success("Login Successful", {
      autoClose: 1000,
      onClose: () => window.location.reload(),
    });
  }

  if (loginMutation.isError) {
    console.log("Login Err: ", loginMutation.error);
    toast.error(loginMutation.error.response.data.error, {
      autoClose: 1500,
    });
  }

  if (loginMutation.isLoading) {
    toast.info("Logging in...");
  }

  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_MONGO_BASE_URL}/login`,
  //       loginData
  //     );

  //     const { success } = response.data;
  //     if (success) {
  //       localStorage.setItem("token", response.data.token);
  //       toast.success("Login Successful", {
  //         autoClose: 1000,
  //         onClose: () => window.location.reload(),
  //       });
  //     }
  //   } catch (error) {
  //     console.log("Login Err: ", error);
  //     toast.error(error.response.data.error, { autoClose: 1500 });
  //   }
  // };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      for (const key in signupData) {
        data.append(key, signupData[key]);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/register`,
        data
      );

      const { success } = response.data;
      if (success) {
        toast.success("Signup Successful", {
          autoClose: 1000,
          onClose: () => setIsLogin(true),
        });
      }
    } catch (error) {
      console.log("signup Err: ", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message, { autoClose: 1500 });
      } else {
        toast.error(error.response.data.message, { autoClose: 1500 });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login-css d-flex justify-content-center align-items-center">
        <div className="wrapper">
          <div className="title-text">
            <div className={isLogin ? "title login" : "title signup"}>
              {isLogin ? "Login Form" : "Signup Form"}
            </div>
            <div className={!isLogin ? "title login" : "title signup"}>
              Signup Form
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input
                type="radio"
                name="slide"
                id="login"
                checked={isLogin}
                onChange={toggleForm}
              />
              <input
                type="radio"
                name="slide"
                id="signup"
                checked={!isLogin}
                onChange={toggleForm}
              />
              <label htmlFor="login" className="slide login">
                Login
              </label>
              <label htmlFor="signup" className="slide signup">
                Signup
              </label>
              <div className="slider-tab" />
            </div>
            <div className="form-inner">
              {isLogin ? (
                <form onSubmit={handleLoginSubmit} className="login">
                  <div className="field">
                    <input
                      type="text"
                      onChange={handleLoginChange}
                      name="email"
                      value={loginData.email}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      onChange={handleLoginChange}
                      name="password"
                      value={loginData.password}
                      placeholder="Password"
                      required
                    />
                  </div>
                  {/* <div className="pass-link">
                  <a href="/#">Forgot password?</a>
                </div> */}
                  <div className="field btn">
                    <div className="btn-layer" />
                    <input type="submit" defaultValue="Login" />
                  </div>
                  <div className="signup-link">
                    Not a member? <a href>Signup now</a>
                  </div>
                </form>
              ) : (
                <form
                  onSubmit={handleSignupSubmit}
                  encType="multipart/form-data"
                  className="signup"
                >
                  <div className="field">
                    <input
                      type="text"
                      onChange={handleSignupChange}
                      name="name"
                      value={signupData.name}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="email"
                      onChange={handleSignupChange}
                      name="email"
                      placeholder="Email"
                      value={signupData.email}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="tel"
                      onChange={handleSignupChange}
                      name="phoneNo"
                      placeholder="Phone No"
                      value={signupData.phoneNo}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      onChange={handleSignupChange}
                      name="address"
                      value={signupData.address}
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="file"
                      name="profilePic"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      onChange={handleSignupChange}
                      name="password"
                      value={signupData.password}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer" />
                    <input type="submit" defaultValue="Signup" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
