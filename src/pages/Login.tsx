import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import Dashboard from './Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { postLoginUser } from '../hooks/api/user/post-login-user';

//=================================================================
// Login Component
//=================================================================

interface LoginFormState {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

export const Login: React.FC = () => {
  //-----------------------------------------------------------------
  // State
  //-----------------------------------------------------------------

  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  });

  //-----------------------------------------------------------------
  // Event Handlers
  //-----------------------------------------------------------------

  // Handle changes in form inputs
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Validate the form inputs
  const validateForm = useCallback((): boolean => {
    let isValid = true;
    const errors = {
      email: '',
      password: '',
    };

    // Check if email is empty or in invalid format
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    // Check if password is empty
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    // Update form data with errors
    setFormData(prevData => ({
      ...prevData,
      errors,
    }));

    return isValid;
  }, [formData]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If form is valid, attempt login
    if (validateForm()) {
      try {
        // Perform login actions
        await postLoginUser({ email: formData.email, password: formData.password });
        toast.success("Successfully logged in");
        setLoggedIn(true);
      } catch (error) {
        // Handle error
        console.error(error);
        toast.error("Failed to log in");
      }
    }
  }, [validateForm, formData.email, formData.password]);

  //-----------------------------------------------------------------
  // Render
  //-----------------------------------------------------------------

  return (
    <div>
      <ToastContainer />
      {loggedIn ? (
        <Dashboard email={formData.email} password={formData.password} />
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {formData.errors.email && <div className="error">{formData.errors.email}</div>}
          {formData.errors.password && <div className="error">{formData.errors.password}</div>}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
