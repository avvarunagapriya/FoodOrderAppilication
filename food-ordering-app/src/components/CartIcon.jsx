import { Badge } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

function CartIcon({ count }) {
  return (
    <Badge badgeContent={count} color="primary" overlap="circular">
      <ShoppingCartIcon />
    </Badge>
  )
}

export default CartIcon;

