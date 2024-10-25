import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import { CheckCircle } from 'lucide-react';

export default function Curriculum() {
  const theme = useTheme();

  const modules = [
    {
      title: "Foundations",
      duration: "4 weeks",
      topics: ["HTML & CSS", "JavaScript Basics", "Git & GitHub", "Command Line"]
    },
    {
      title: "Frontend Development",
      duration: "6 weeks",
      topics: ["React.js", "State Management", "API Integration", "Responsive Design"]
    },
    {
      title: "Backend Development",
      duration: "6 weeks",
      topics: ["Node.js", "Express", "Databases", "Authentication"]
    },
    {
      title: "Advanced Concepts",
      duration: "4 weeks",
      topics: ["System Design", "Testing", "Deployment", "Career Prep"]
    }
  ];

  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'grey.50' }} id="curriculum">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" gutterBottom>
            Comprehensive Curriculum
          </Typography>
          <Typography variant="h5" color="text.secondary">
            20-week intensive program designed for your success
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {modules.map((module, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6">
                    {module.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 'medium'
                    }}
                  >
                    {module.duration}
                  </Typography>
                </Box>

                <List disablePadding>
                  {module.topics.map((topic, topicIndex) => (
                    <ListItem key={topicIndex} disablePadding sx={{ mb: 1 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle
                          style={{
                            width: 20,
                            height: 20,
                            color: theme.palette.success.main
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={topic}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}