import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
  Avatar,
  useTheme,
  Stack
} from '@mui/material';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80",
    text: "DigiEras Tech transformed my career. The hands-on projects and mentorship were invaluable. Within two months of graduating, I landed my dream job at Google."
  },
  {
    name: "Michael Chen",
    role: "Frontend Developer at Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80",
    text: "The curriculum is cutting-edge and the instructors are top-notch. I went from knowing basic HTML to building complex React applications in just 20 weeks."
  },
  {
    name: "Emily Rodriguez",
    role: "Full Stack Developer at Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80",
    text: "The support from the DigiEras Tech community is incredible. Even after graduating, I'm still connected with my cohort and mentors. Best investment in my future!"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box component="section" sx={{ py: 12, bgcolor: 'background.paper' }} id="testimonials">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" gutterBottom>
            What Our Graduates Say
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Success stories from our alumni
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 4, md: 6 },
              mb: 4,
              borderRadius: 4,
              position: 'relative'
            }}
          >
            <Quote
              style={{
                width: 48,
                height: 48,
                color: theme.palette.primary.main,
                marginBottom: theme.spacing(3)
              }}
            />
            
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontStyle: 'italic',
                color: 'text.secondary'
              }}
            >
              "{testimonials[currentIndex].text}"
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                sx={{ width: 64, height: 64 }}
              />
              <Box>
                <Typography variant="h6">
                  {testimonials[currentIndex].name}
                </Typography>
                <Typography color="primary">
                  {testimonials[currentIndex].role}
                </Typography>
              </Box>
            </Stack>
          </Paper>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              onClick={prev}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              <ChevronLeft />
            </IconButton>
            
            <Stack direction="row" spacing={1}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: index === currentIndex ? 24 : 12,
                    height: 12,
                    borderRadius: 6,
                    bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </Stack>

            <IconButton
              onClick={next}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              <ChevronRight />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}