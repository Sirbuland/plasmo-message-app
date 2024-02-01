import React from 'react';
import './login.css';
import Button from '~app/components/button';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-content">
        <div>Login</div>
        <Button label="SSO Login with mock user" onClick={() => navigate('/home')} />
      </div>
    </div>
  );
}

export default Login;
