import React, { useState } from 'react';
import "./LoginPage.css";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginPage = () => {
    const [user, setUser] = useState(null);

  const handleGoogleLoginSuccess = (userData) => {
    // 處理使用者登入成功後的動作，儲存用戶資料等
    setUser(userData);
  };

  const handleGoogleLoginFailure = (error) => {
    // 處理使用者登入失敗的動作
    console.log('Google 登入失敗:', error);
  };

  return (
    <div>
      {user ? (
        <div>
          Logout as {user.name}
        </div>
      ) : (
        <div>
            <GoogleLoginButton
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            />
        </div>
      )}
    </div>
  );
};

export default LoginPage;