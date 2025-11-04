import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Grid, Link, InputAdornment, InputLabel, OutlinedInput, Stack, FormHelperText } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

export default function AuthLogin({ isDemo = false }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
       navigate('/dashboard/default');
    // const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    // console.log("API Base URL:", ROOT_URL);
  
    // try {
    //   const response = await axios.post(`${ROOT_URL}/admin/login`, values);
    //   console.log("API Response:", response.data);
  
    //   if (response.data.token) { // Checking token instead of success
    //     sessionStorage.setItem('token', response.data.token);
    //     sessionStorage.setItem('userEmail', values.email);
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    //     navigate('/dashboard/default');
    //   } else {
    //     setErrors({ submit: response.data.message || 'Login failed' });
    //   }
    // } catch (error) {
    //   console.error("Login Error:", error);
    //   setErrors({ submit: error.response?.data?.message || 'Something went wrong' });
    // }
    // setSubmitting(false);
  };
  
  return (
    <Formik
      // initialValues={{ email: '', password: '' }}
      // validationSchema={Yup.object().shape({
      //   email: Yup.string().email('Must be a valid email').required('Email is required'),
      //   password: Yup.string().required('Password is required')
      // })}
    >
      {({ errors, handleBlur, handleChange, isSubmitting, touched }) => (
        <form noValidate >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-login">Email Address</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  name="email"
                  // value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-login">Password</InputLabel>
                <OutlinedInput
                  id="password-login"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  // value={values.password}
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  placeholder="Enter password"
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {touched.password && errors.password && (
                  <FormHelperText error>{errors.password}</FormHelperText>
                )}
              </Stack>
            </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Link component={RouterLink} to="#" variant="body2">
                  Forgot Password?
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleSubmit}>
                  {/* {isSubmitting ? 'Logging in...' : 'Login'} */}Login
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

AuthLogin.propTypes = { isDemo: PropTypes.bool };
