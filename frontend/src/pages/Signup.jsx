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
import signupImage from "../images/signup.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password
      });
      alert(res.data.message || "Signup successful!");
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
      <Paper elevation={3} sx={{ borderRadius: 2, width: '100%', overflow: 'hidden' }}>
        <Grid container sx={{ height: '100%' }}>
          {/* Left Side - Image */}
          <Grid item xs={12} md={6} sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0, overflow: 'hidden'
          }}>
            <Box
              component="img"
              src={signupImage}
              alt="Signup illustration"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 4 }}>
            <Box sx={{ maxWidth: 500, mx: 'auto', width: '100%' }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{
                fontWeight: 700, color: '#d70f64', textAlign: 'center'
              }}>
                Create Account
              </Typography>

              <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
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
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
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
                  Sign Up
                </Button>

                <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                  Already have an account?{" "}
                  <Link href="/login" underline="hover" sx={{
                    fontWeight: 600,
                    color: '#d70f64'
                  }}>
                    Login
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

export default Signup;
