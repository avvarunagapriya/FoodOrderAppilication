import { Link as RouterLink } from "react-router-dom"
import { Card, CardContent, CardMedia, Typography, Box, Rating, CardActionArea } from "@mui/material"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"

function RestaurantItem({ restaurant }) {
  const { id, name, image, cuisine, rating, deliveryTime, minOrder } = restaurant

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea component={RouterLink} to={`/restaurant/${id}`}>
        <CardMedia component="img" height="180" image={image || "/placeholder.svg"} alt={name} />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {cuisine}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Rating value={rating} precision={0.1} readOnly size="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {rating}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                {deliveryTime}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AttachMoneyIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                Min: {minOrder}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RestaurantItem

