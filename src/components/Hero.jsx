import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useTheme,
  } from '@mui/material';
  import { ArrowRight } from 'lucide-react';
  
  export default function Hero() {
    const theme = useTheme();
  
    return (
      <Box
        sx={{
          background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
          pt: { xs: 8, md: 12 },
          pb: { xs: 16, md: 20 }, // Increased padding to accommodate wave
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          marginTop:"2rem"
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Launch Your Tech Career with DigiEras Tech
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Master coding fundamentals and advanced concepts through our intensive, industry-focused program.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowRight />}
                  sx={{
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: theme.shadows[10],
                }}
              />
            </Grid>
          </Grid>
        </Container>
  
        {/* Updated wave SVG */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -2, // Slight overlap to prevent gap
            left: 0,
            width: '100%',
            height: '120px', // Fixed height for the wave
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill={theme.palette.background.default}
            />
          </svg>
        </Box>
      </Box>
    );
  }