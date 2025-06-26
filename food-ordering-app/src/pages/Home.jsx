"use client"

import { useState } from "react"
import { Container, Typography, Box, Grid, TextField, Button, Chip, Paper, InputAdornment, Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import RestaurantItem from "../components/RestaurantItem"
import restaurants from "../data/restaurants"

function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("all")

  // Get unique cuisines for filter
  const cuisines = ["all", ...new Set(restaurants.map((restaurant) => restaurant.cuisine))]

  // Filter restaurants based on search term and selected cuisine
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCuisine = selectedCuisine === "all" || restaurant.cuisine === selectedCuisine

    return matchesSearch && matchesCuisine
  })

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: "grey.50", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Delicious food delivered to your door
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Order from your favorite restaurants and enjoy a hassle-free delivery experience.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <TextField
                  fullWidth
                  placeholder="Search for restaurants or cuisines..."
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button variant="contained" color="primary">
                          Find Food
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ maxWidth: 500 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src="/src/assets/image24.jpg"
                  alt="Food delivery"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    height: "auto",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Restaurants Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Restaurants
        </Typography>

        <Box sx={{ mb: 4, mt: 3 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {cuisines.map((cuisine) => (
              <Chip
                key={cuisine}
                label={cuisine === "all" ? "All Cuisines" : cuisine}
                onClick={() => setSelectedCuisine(cuisine)}
                color={selectedCuisine === cuisine ? "primary" : "default"}
                variant={selectedCuisine === cuisine ? "filled" : "outlined"}
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>
        </Box>

        <Grid container spacing={3}>
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Grid item key={restaurant.id} xs={12} sm={6} md={4} lg={3}>
                <RestaurantItem restaurant={restaurant} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" color="text.secondary">
                  No restaurants found. Try a different search term or cuisine.
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: "grey.50", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            How It Works
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h1" color="primary" sx={{ mb: 2, opacity: 0.8 }}>
                  🔍
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Find
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse restaurants and cuisines near you
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h1" color="primary" sx={{ mb: 2, opacity: 0.8 }}>
                  🛒
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Order
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Select your favorite dishes and add to cart
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h1" color="primary" sx={{ mb: 2, opacity: 0.8 }}>
                  🚚
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Deliver
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get your food delivered to your doorstep
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h1" color="primary" sx={{ mb: 2, opacity: 0.8 }}>
                  😋
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Enjoy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enjoy your delicious meal!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* App Promo Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Get the FoodExpress App
            </Typography>
            <Typography variant="body1" paragraph>
              Download our mobile app for a better experience. Order food, track delivery, and get exclusive offers.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" size="large" startIcon={<Typography variant="h6">🍎</Typography>}>
                App Store
              </Button>
              <Button variant="outlined" size="large" startIcon={<Typography variant="h6">🤖</Typography>}>
                Google Play
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src="/src/assets/image25.jpg"
                alt="Mobile app"
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  height: "auto",
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home;

