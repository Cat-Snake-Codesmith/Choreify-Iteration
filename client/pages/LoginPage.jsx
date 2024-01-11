import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleOAuthButton from "../components/GoogleOAuthButton.jsx";
import { useDispatch } from "react-redux";
import styles from "../stylesheets/pages/LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginModal}>
        <h2>Login here:</h2>
        <GoogleOAuthButton className={styles.loginButton} />
      </div>
    </div>
  );
}
