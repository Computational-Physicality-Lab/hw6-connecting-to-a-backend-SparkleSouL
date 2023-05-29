import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = 'YOUR_GOOGLE_CLIENT_ID';

  const handleSuccess = (response) => {
    // 使用者成功登入 Google，將資料傳遞給父元件處理
    onSuccess(response.profileObj);
  };

  const handleFailure = (error) => {
    // 登入失敗的處理
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId="1070706871462-8uorati5evcge9qkr0n5fs972j8a5tf9.apps.googleusercontent.com"
      buttonText="使用 Google 登入"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;