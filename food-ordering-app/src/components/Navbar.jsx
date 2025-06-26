import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import { useCart } from "../contexts/CartContext"
import CartIcon from "./CartIcon"

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartItems } = useCart()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Restaurants", path: "/" },
    { name: "My Orders", path: "/orders" },
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
        <RestaurantIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div">
          FoodExpress
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <RouterLink
                to="/"
                style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
              >
                <RestaurantIcon sx={{ mr: 1 }} />
                <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 700 }}>
                  FoodExpress
                </Typography>
              </RouterLink>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button key={item.name} component={RouterLink} to={item.path} sx={{ mx: 1 }}>
                  {item.name}
                </Button>
              ))}
              <IconButton component={RouterLink} to="/cart" color="inherit" sx={{ ml: 1 }}>
                <CartIcon count={cartItemCount} />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <IconButton component={RouterLink} to="/cart" color="inherit" sx={{ mr: 1 }}>
                <CartIcon count={cartItemCount} />
              </IconButton>
              <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar;

