// pages/LandingPage.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
  CssBaseline,
} from '@mui/material';
import { Home, Build, Timeline, Chat, BarChart } from '@mui/icons-material';

const features = [
  {
    title: "Easy Fault Submission",
    description: "Users can quickly submit faults with detailed descriptions and photos.",
    icon: <Build />,
  },
  {
    title: "Real-Time Tracking",
    description: "Track the status of repairs in real-time, ensuring transparency and accountability.",
    icon: <Timeline />,
  },
  {
    title: "Integrated Communication",
    description: "Seamless communication between users and service personnel to resolve issues faster.",
    icon: <Chat />,
  },
  {
    title: "Analytics Dashboard",
    description: "Gain insights into fault patterns and equipment performance with our comprehensive dashboard.",
    icon: <BarChart />,
  },
];

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <CssBaseline />

      <Box sx={{ textAlign: 'center', my: 8 }}>
        <Typography variant="h4" gutterBottom>
          Simplifying Fault Management for Service Providers
        </Typography>
        <Typography variant="h6" gutterBottom>
          Empower your team and equipment users to report and manage faults seamlessly.
        </Typography>
        <Button variant="contained" color="primary" href="/signup">
          Get Started Free
        </Button>
      </Box>

      <Box sx={{ my: 8 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Why Choose Maintained?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {feature.icon}
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2">{feature.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Button variant="contained" color="primary" href="/signup">
          Sign Up Now
        </Button>
      </Box>

      <Box sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="body2">© 2024 Maintained. All rights reserved.</Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
