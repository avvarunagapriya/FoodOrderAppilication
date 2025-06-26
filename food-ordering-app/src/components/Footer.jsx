import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material"
import RestaurantIcon from "@mui/icons-material/Restaurant"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6, borderTop: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <RestaurantIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                FoodExpress
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              Delicious food delivered to your door. Order from your favorite restaurants and enjoy a hassle-free
              delivery experience.
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Company
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  About
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Careers
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Press
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Help
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Support
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  FAQ
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Contact
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Terms
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Privacy
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Cookies
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Social
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Twitter
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Instagram
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 0.5 }}>
                <Link href="#" color="text.secondary" underline="hover">
                  Facebook
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 2 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { sm: "center" },
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} FoodExpress. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

