import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Stack,
    IconButton,
    useTheme
  } from '@mui/material';
  import {
    Code2,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
  } from 'lucide-react';
  import Logo from './logo.png';
  export default function Footer() {
    const theme = useTheme();
    const currentYear = new Date().getFullYear();
  
    return (
      <Box
        component="footer"
        sx={{
          bgcolor: 'grey.900',
          color: 'grey.300',
          py: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={3}>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center',flexDirection:'column' }}>
                <img style={{ width: 180, height: 100,float:"left" }} src={Logo}></img>
                </Box>
                <Typography variant="body2">
                  Transforming careers through intensive, industry-focused tech education.
                </Typography>
              </Stack>
            </Grid>
  
            {/* Quick Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="white" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {['Home', 'About Us', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>
  
            {/* Contact Info */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="white" gutterBottom>
                Contact Us
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Mail size={20} />
                  <Link
                    href="mailto:info@opqbootcamp.com"
                    color="inherit"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    info@digierastech.com
                  </Link>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone size={20} />
                  <Link
                    href="tel:+1234567890"
                    color="inherit"
                    sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                  >
                    +91 70177 56881
                  </Link>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <MapPin size={20} />
                  <Typography variant="body2">
                    123 Tech Street, SF, CA 94105
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
  
            {/* Social Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="white" gutterBottom>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                {[
                  { icon: <Facebook size={24} />, href: '#' },
                  { icon: <Twitter size={24} />, href: '#' },
                  { icon: <Linkedin size={24} />, href: '#' },
                  { icon: <Instagram size={24} />, href: ' https://www.instagram.com/digieras_tech' }
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    sx={{
                      color: 'grey.300',
                      '&:hover': {
                        color: 'primary.main'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>
          </Grid>
  
          <Box
            sx={{
              borderTop: 1,
              borderColor: 'grey.800',
              mt: 6,
              pt: 3,
              textAlign: 'center'
            }}
          >
            <Typography variant="body2">
              &copy; {currentYear} DigiEras Tech. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }