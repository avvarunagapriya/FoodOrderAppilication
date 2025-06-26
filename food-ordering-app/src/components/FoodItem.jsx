"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { useCart } from "../contexts/CartContext"

function FoodItem({ item, restaurantId, restaurantName }) {
  const { id, name, description, price, image } = item
  const [quantity, setQuantity] = useState(0)
  const { addToCart, removeFromCart, getItemQuantity } = useCart()

  // Get the current quantity from the cart context
  const cartQuantity = getItemQuantity(id)

  // Update local state when cart changes
  useEffect(() => {
    setQuantity(cartQuantity)
  }, [cartQuantity])

  const handleIncrement = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    addToCart({
      id,
      name,
      price,
      image,
      restaurantId,
      restaurantName,
      quantity: 1,
    })
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      removeFromCart(id)
    }
  }

  return (
    <Card sx={{ display: "flex", mb: 2, overflow: "visible" }}>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {description}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
            ${price.toFixed(2)}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            {quantity > 0 ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="small"
                  onClick={handleDecrement}
                  sx={{
                    bgcolor: "grey.200",
                    "&:hover": { bgcolor: "grey.300" },
                    width: 32,
                    height: 32,
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ mx: 2, minWidth: 20, textAlign: "center" }}>{quantity}</Typography>
                <IconButton
                  size="small"
                  onClick={handleIncrement}
                  color="primary"
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": { bgcolor: "primary.dark" },
                    width: 32,
                    height: 32,
                  }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            ) : (
              <Button variant="outlined" startIcon={<AddIcon />} onClick={handleIncrement} size="small">
                Add
              </Button>
            )}
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120, objectFit: "cover", m: 2, borderRadius: 2 }}
        image={image || "/placeholder.svg"}
        alt={name}
      />
    </Card>
  )
}

export default FoodItem

