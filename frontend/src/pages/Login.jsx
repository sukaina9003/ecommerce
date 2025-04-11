import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { 
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Paper
} from "@mui/material";
import loginImage from "../images/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData; // ✅ Extract values

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      if (res.status === 200) {
        localStorage.setItem('authToken', res.data.token);
        alert(res.data.message || "Login successful!");
        navigate('/menu');
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 6,
      display: 'flex',
      alignItems: 'center',
      minHeight: '80vh'
    }}>
      <Paper elevation={3} sx={{ 
        borderRadius: 2,
        width: '100%',
        overflow: 'hidden'
      }}>
        <Grid container sx={{ height: '100%' }}>
          {/* Left Side - Image */}
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 0,
            overflow: 'hidden'
          }}>
            <Box
              component="img"
              src={loginImage}
              alt="Login illustration"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={6} sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 4
          }}>
            <Box sx={{ maxWidth: 500, mx: 'auto', width: '100%' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ 
                fontWeight: 700,
                color: '#d70f64',
                textAlign: 'center'
              }}>
                Welcome Back
              </Typography>
              
              <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'right' }}>
                    <Link href="/forgot-password" underline="hover" sx={{ 
                      fontSize: '0.875rem',
                      color: '#d70f64'
                    }}>
                      Forgot Password?
                    </Link>
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    backgroundColor: "#d70f64",
                    "&:hover": { backgroundColor: "#b50e55" }
                  }}
                >
                  Login
                </Button>

                <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                  Don't have an account?{" "}
                  <Link href="/signup" underline="hover" sx={{ 
                    fontWeight: 600,
                    color: '#d70f64'
                  }}>
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
