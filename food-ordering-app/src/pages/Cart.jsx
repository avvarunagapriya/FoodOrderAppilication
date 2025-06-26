"use client"

import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Paper,
  Divider,
  IconButton,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Link,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteIcon from "@mui/icons-material/Delete"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useCart } from "../contexts/CartContext"

function Cart() {
  const { cartItems, updateItemQuantity, removeFromCart, clearCart, getCartTotal } = useCart()
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDeliveryInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would submit the order to a backend
    alert("Order placed successfully!")
    clearCart()
  }

  const subtotal = getCartTotal()
  const deliveryFee = 2.99
  const total = subtotal + deliveryFee

  // Group items by restaurant
  const itemsByRestaurant = cartItems.reduce((acc, item) => {
    if (!acc[item.restaurantId]) {
      acc[item.restaurantId] = {
        name: item.restaurantName,
        items: [],
      }
    }
    acc[item.restaurantId].items.push(item)
    return acc
  }, {})

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
        Continue Shopping
      </Button>

      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Paper sx={{ p: 6, textAlign: "center", mt: 4 }}>
          <ShoppingCartIcon sx={{ fontSize: 60, color: "text.secondary", mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Add some delicious food to your cart and come back here to checkout.
          </Typography>
          <Button component={RouterLink} to="/" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Browse Restaurants
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ mb: 4 }}>
              {Object.entries(itemsByRestaurant).map(([restaurantId, restaurant]) => (
                <Box key={restaurantId}>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {restaurant.name}
                    </Typography>

                    <Stack spacing={2}>
                      {restaurant.items.map((item) => (
                        <Card key={item.id} variant="outlined" sx={{ display: "flex" }}>
                          <CardMedia
                            component="img"
                            sx={{ width: 100, height: 100, objectFit: "cover" }}
                            image={item.image || "/placeholder.svg"}
                            alt={item.name}
                          />
                          <CardContent
                            sx={{
                              flex: "1 0 auto",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                            }}
                          >
                            <Box>
                              <Typography variant="subtitle1" component="div">
                                {item.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                ${item.price.toFixed(2)}
                              </Typography>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <IconButton size="small" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                <RemoveIcon fontSize="small" />
                              </IconButton>
                              <Typography sx={{ mx: 2, minWidth: 20, textAlign: "center" }}>{item.quantity}</Typography>
                              <IconButton
                                size="small"
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                color="primary"
                              >
                                <AddIcon fontSize="small" />
                              </IconButton>

                              <Box sx={{ ml: 2, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                <Typography variant="subtitle1">${(item.price * item.quantity).toFixed(2)}</Typography>
                                <IconButton size="small" onClick={() => removeFromCart(item.id)} color="error">
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      ))}
                    </Stack>
                  </Box>
                  <Divider />
                </Box>
              ))}
            </Paper>

            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Delivery Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={deliveryInfo.firstName}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={deliveryInfo.lastName}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={deliveryInfo.address}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="City"
                    name="city"
                    value={deliveryInfo.city}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="State"
                    name="state"
                    value={deliveryInfo.state}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="ZIP Code"
                    name="zipCode"
                    value={deliveryInfo.zipCode}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={deliveryInfo.phone}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
              </Grid>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Payment Method
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
                  <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                  <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
                </RadioGroup>
              </FormControl>

              {paymentMethod === "credit-card" && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Card Number" placeholder="1234 5678 9012 3456" margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Expiry Date" placeholder="MM/YY" margin="normal" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="CVV" placeholder="123" margin="normal" />
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: 100 }}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>

                <Box sx={{ mt: 2 }}>
                  {cartItems.map((item) => (
                    <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="body2">
                        {item.quantity} × {item.name}
                      </Typography>
                      <Typography variant="body2">${(item.price * item.quantity).toFixed(2)}</Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2">Subtotal</Typography>
                  <Typography variant="body2">${subtotal.toFixed(2)}</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2">Delivery Fee</Typography>
                  <Typography variant="body2">${deliveryFee.toFixed(2)}</Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Total
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    ${total.toFixed(2)}
                  </Typography>
                </Box>

                <Button variant="contained" color="primary" fullWidth size="large" onClick={handleSubmit}>
                  Place Order
                </Button>

                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                  By placing your order, you agree to our{" "}
                  <Link href="#" underline="hover">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" underline="hover">
                    Privacy Policy
                  </Link>
                  .
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default Cart;

