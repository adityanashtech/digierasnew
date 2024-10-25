import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  useTheme
} from '@mui/material';
import { Target, Users, Award, Rocket } from 'lucide-react';

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'grey.50' }} id="about">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: theme.shadows[10],
                }}
              />
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  maxWidth: 400,
                  position: 'relative',
                  mt: -10,
                  ml: 5,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <Target style={{ width: 32, height: 32, color: theme.palette.primary.main, marginBottom: 16 }} />
                <Typography variant="h6" gutterBottom>Our Mission</Typography>
                <Typography color="text.secondary">
                  To empower individuals with cutting-edge tech skills and launch successful careers in the digital age through intensive, hands-on learning experiences.
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="h6" paragraph color="text.secondary">
              A community of tech enthusiasts, industry experts, and passionate educators dedicated to transforming tech education.
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              {[
                { icon: <Users />, title: 'Expert-Led Training', desc: 'Learn from instructors with real-world experience at top tech companies.' },
                { icon: <Award />, title: 'Industry Recognition', desc: 'Our graduates are hired by leading tech companies worldwide.' },
                { icon: <Rocket />, title: 'Career Support', desc: 'Lifetime access to career services, networking events, and job placement assistance.' }
              ].map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ color: 'primary.main' }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Paper
              sx={{
                p: 3,
                bgcolor: 'primary.50',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                What You Get
              </Typography>
              <List>
                {[
                  'Hands-on project-based learning',
                  '1-on-1 mentorship sessions',
                  'Industry-recognized certification',
                  'Job-ready portfolio development'
                ].map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          mt: 1
                        }}
                      />
                    </ListItemIcon>
                    <Typography>{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}