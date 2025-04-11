import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import NavbarWithImage from "./components/NavbarWithImage"; // Corrected import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Restaurants from "./pages/Restaurants";
import Dishes from "./pages/Dishes";
import Reviews from "./pages/Reviews";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import { AuthProvider } from "./context/AuthContext"; 
import Favorites from './pages/Favorites';
import OrderHistory from './pages/OrderHistory';
// PrivateRoute Component (for protecting routes)
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    // Redirect to login if no token found
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />

        {/* Routes with different layouts */}
        <Routes>
          {/* Main layout with navbar */}
          <Route element={
            <>
              <NavbarWithImage />
              <Box component="main" sx={{ flex: 1, py: 4 }}>
                <Outlet />
              </Box>
            </>
          }>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
          </Route>
          
          {/* Auth pages without navbar (Login & Signup) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Route for Menu */}
          <Route 
            path="/menu" 
            element={
              <PrivateRoute>
                <Menu />
              </PrivateRoute>
            } 
          />
          
          <Route path="/restaurants/:cuisine" element={<Restaurants />} />
          <Route path="/dishes/:restaurantId" element={<Dishes />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
