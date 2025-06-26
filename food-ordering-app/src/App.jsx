import { Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { CartProvider } from "./contexts/CartContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import RestaurantMenu from "./pages/RestaurantMenu"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"

function App() {
  return (
    <CartProvider>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, pt: { xs: 8, sm: 9 }, pb: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </CartProvider>
  )
}

export default App;

