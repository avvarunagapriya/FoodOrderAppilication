"use client"

import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Divider,
  Chip,
  Stack,
} from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

function Orders() {
  const [activeTab, setActiveTab] = useState("all")

  // Sample orders data - in a real app
  const orders = [
    {
      id: "ORD-1234",
      date: "April 1, 2025",
      restaurant: "Burger Palace",
      items: [
        { name: "Classic Burger", quantity: 1, price: 8.99 },
        { name: "French Fries", quantity: 1, price: 3.99 },
        { name: "Soda", quantity: 1, price: 1.99 },
      ],
      total: 14.97,
      status: "delivered",
      deliveryAddress: "123 Main St, Anytown, USA",
    },
    {
      id: "ORD-1235",
      date: "March 28, 2025",
      restaurant: "Pizza Heaven",
      items: [
        { name: "Pepperoni Pizza", quantity: 1, price: 12.99 },
        { name: "Garlic Bread", quantity: 1, price: 4.99 },
      ],
      total: 17.98,
      status: "delivered",
      deliveryAddress: "123 Main St, Anytown, USA",
    },
    {
      id: "ORD-1236",
      date: "March 25, 2025",
      restaurant: "Sushi World",
      items: [
        { name: "California Roll", quantity: 2, price: 9.99 },
        { name: "Miso Soup", quantity: 1, price: 2.99 },
      ],
      total: 22.97,
      status: "delivered",
      deliveryAddress: "123 Main St, Anytown, USA",
    },
  ]

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  // Filter orders based on active tab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "all") return true
    return order.status === activeTab
  })

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button component={RouterLink} to="/" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
        Back to Home
      </Button>

      <Typography variant="h4" component="h1" gutterBottom>
        My Orders
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab value="all" label="All Orders" />
          <Tab value="active" label="Active" />
          <Tab value="delivered" label="Delivered" />
        </Tabs>
      </Paper>

      {filteredOrders.length === 0 ? (
        <Paper sx={{ p: 6, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            No orders found
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {activeTab === "all"
              ? "You haven't placed any orders yet."
              : activeTab === "active"
                ? "You don't have any active orders at the moment."
                : "You don't have any delivered orders yet."}
          </Typography>
          <Button component={RouterLink} to="/" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Browse Restaurants
          </Button>
        </Paper>
      ) : (
        <Stack spacing={3}>
          {filteredOrders.map((order) => (
            <Card key={order.id}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {order.restaurant}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Order #{order.id} • {order.date}
                    </Typography>
                  </Box>
                  <Chip
                    label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    color={order.status === "delivered" ? "success" : "primary"}
                    size="small"
                  />
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Items
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {order.items.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                      <Typography variant="body2">
                        {item.quantity} × {item.name}
                      </Typography>
                      <Typography variant="body2">${(item.price * item.quantity).toFixed(2)}</Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Typography variant="subtitle2">Total</Typography>
                  <Typography variant="subtitle2">${order.total.toFixed(2)}</Typography>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Delivery Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {order.deliveryAddress}
                </Typography>
              </CardContent>

              <CardActions sx={{ px: 3, pb: 3 }}>
                <Button variant="outlined" fullWidth>
                  View Order Details
                </Button>
                {order.status === "delivered" && (
                  <Button variant="contained" color="primary" fullWidth>
                    Reorder
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  )
}

export default Orders;

