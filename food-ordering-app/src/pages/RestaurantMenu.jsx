"use client"

import { useState, useEffect } from "react"
import { useParams, Link as RouterLink } from "react-router-dom"
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Tabs,
  Tab,
  CardMedia,
  Rating,
  Divider,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import FoodItem from "../components/FoodItem"
import restaurants from "../data/restaurants"

function RestaurantMenu() {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState(null)
  const [activeCategory, setActiveCategory] = useState("")
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    // Find restaurant by id
    const foundRestaurant = restaurants.find((r) => r.id === Number.parseInt(id))

    if (foundRestaurant) {
      setRestaurant(foundRestaurant)
      // Set first category as active by default
      if (foundRestaurant.menu && foundRestaurant.menu.length > 0) {
        setActiveCategory(foundRestaurant.menu[0].category)
      }
    }

    setLoading(false)
  }, [id])

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue)
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <Typography variant="h6" color="text.secondary">
          Loading...
        </Typography>
      </Box>
    )
  }

  if (!restaurant) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Restaurant not found
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" color="primary" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Container>
    )
  }

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height={250}
          image={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          sx={{ filter: "brightness(0.7)" }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          }}
        >
          <Container maxWidth="lg">
            <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />} sx={{ color: "white", mb: 2 }}>
              Back to Restaurants
            </Button>
            <Typography variant="h3" component="h1" color="white" gutterBottom>
              {restaurant.name}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 1 }}>
              <Chip label={restaurant.cuisine} size="small" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }} />
              <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
                <Rating value={restaurant.rating} precision={0.1} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  {restaurant.rating}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" color="white" sx={{ maxWidth: 600 }}>
              {restaurant.description}
            </Typography>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box sx={{ position: "sticky", top: 100 }}>
              <Typography variant="h6" gutterBottom>
                Restaurant Info
              </Typography>
              <Paper sx={{ p: 2, mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <AccessTimeIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2">Delivery Time: {restaurant.deliveryTime}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                  <AttachMoneyIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2">Minimum Order: {restaurant.minOrder}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                  <Typography variant="body2">123 Main St, Anytown, USA</Typography>
                </Box>
              </Paper>

              <Typography variant="h6" gutterBottom>
                Menu
              </Typography>
              <Paper>
                <List disablePadding>
                  {restaurant.menu.map((category) => (
                    <ListItem key={category.category} disablePadding>
                      <ListItemButton
                        selected={activeCategory === category.category}
                        onClick={() => setActiveCategory(category.category)}
                      >
                        <ListItemText primary={category.category} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            {isMobile && (
              <Tabs
                value={activeCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 3 }}
              >
                {restaurant.menu.map((category) => (
                  <Tab key={category.category} label={category.category} value={category.category} />
                ))}
              </Tabs>
            )}

            {restaurant.menu.map((category) => (
              <Box
                key={category.category}
                sx={{
                  display: activeCategory === category.category ? "block" : "none",
                  mb: 4,
                }}
                id={category.category.toLowerCase().replace(/\s+/g, "-")}
              >
                <Typography variant="h5" component="h2" gutterBottom>
                  {category.category}
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {category.items.map((item) => (
                    <FoodItem key={item.id} item={item} restaurantId={restaurant.id} restaurantName={restaurant.name} />
                  ))}
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default RestaurantMenu

