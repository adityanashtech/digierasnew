import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  useTheme
} from '@mui/material';
import { Code, Users, Trophy, Clock } from 'lucide-react';

export default function Features() {
  const theme = useTheme();
  
  const features = [
    {
      icon: <Code />,
      title: "Industry-Relevant Curriculum",
      description: "Learn the most in-demand programming languages and frameworks used by top companies."
    },
    {
      icon: <Users />,
      title: "Expert Instructors",
      description: "Learn from experienced developers who have worked at leading tech companies."
    },
    {
      icon: <Trophy />,
      title: "Project-Based Learning",
      description: "Build real-world projects that you can add to your portfolio."
    },
    {
      icon: <Clock />,
      title: "Flexible Schedule",
      description: "Choose between full-time and part-time programs to fit your lifestyle."
    }
  ];

  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.paper' }} id="features">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" gutterBottom>
            Why Choose DigiEras Tech?
          </Typography>
          <Typography variant="h5" color="text.secondary">
            We provide everything you need to launch your tech career
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    '& > svg': {
                      width: 32,
                      height: 32
                    }
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}