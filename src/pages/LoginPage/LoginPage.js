import React, { useState } from 'react';
import "./LoginPage.css";
import { Button } from "reactstrap";
import googleLogo from "../../assets/images/google-logo.png";

import { Spinner } from "reactstrap";

import { useContext } from "react";
import { AuthUserContext } from "../../context/AuthUserContext";

import { auth, provider } from "../../index";
import { signInWithPopup } from "firebase/auth";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const handleSignIn = (setLoading, navigate) => {
  setLoading(true);
  signInWithPopup(auth, provider)
    .then((result) => {
      setLoading(false);
      const user = result.user;

      console.log(user);
      navigate("/");
    })
    .catch((error) => {
      setLoading(false);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};


const handleSignOut = (navigate) => {
  if (window.confirm("Are you sure you want to log out?")) {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        navigate("/");
      })
      .catch((error) => {});
  }
};


const LoginPage = () => {
  const { authUser } = useContext(AuthUserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="loginPage">
      {loading ? (
        <Spinner color="danger" />
      ) : (
        <>
          {authUser ? (
            <Button
              outline
              color="secondary"
              onClick={() => handleSignOut(navigate)}
            >
              <span>Log out as {authUser.displayName}</span>
            </Button>
          ) : (
            <Button
              outline
              color="danger"
              onClick={() => handleSignIn(setLoading, navigate)}
            >
              <img
                src={googleLogo}
                style={{ width: "30px", marginRight: "5px" }}
                alt="Google Logo"
              />
              <span>Log In with Google</span>
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default LoginPage;