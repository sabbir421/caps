import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "#f8f9fa",
  width: "100%",
}));

const AltSectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "white",
  width: "100%",
}));

function Publications() {
  return (
    <Box sx={{ width: "100%", pt: 8 }}>
      {/* Hero Section */}
      <AltSectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 6,
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Publications & Reports
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 8,
              maxWidth: "900px",
              mx: "auto",
              color: "text.secondary",
            }}
          >
            Explore our research, impact reports, and educational resources that
            document our work in rural development and climate action.
          </Typography>
        </Container>
      </AltSectionBox>

      {/* Annual Reports */}
      <SectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Annual Impact Reports
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Annual Impact Report 2023
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: December 2023
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Comprehensive overview of our climate action initiatives,
                    educational programs, and healthcare interventions across
                    rural communities.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <strong>Key Highlights:</strong>
                    <br />
                    • 10,000+ trees planted
                    <br />
                    • 5,000+ children educated
                    <br />
                    • 50+ rural communities served
                    <br />• 1,000+ homes powered by renewable energy
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Download PDF (5.2 MB)
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Annual Impact Report 2022
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: December 2022
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Detailed analysis of our expansion to 50 communities and the
                    implementation of healthcare initiatives and plastic waste
                    management.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <strong>Key Highlights:</strong>
                    <br />
                    • 7,500+ trees planted
                    <br />
                    • 3,500+ children educated
                    <br />
                    • 40+ rural communities served
                    <br />• 15+ healthcare centers established
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Download PDF (4.8 MB)
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Annual Impact Report 2021
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: December 2021
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Foundation year report documenting our initial programs and
                    the establishment of our first 25 rural community
                    partnerships.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <strong>Key Highlights:</strong>
                    <br />
                    • 5,000+ trees planted
                    <br />
                    • 2,000+ children educated
                    <br />
                    • 25+ rural communities served
                    <br />• 10+ schools supported
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Download PDF (3.9 MB)
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Research Papers */}
      <AltSectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Research Papers & Studies
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Climate-Resilient Agriculture in Rural Communities
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: Journal of Rural Development, 2023
                  </Typography>
                  <Typography variant="body1" paragraph>
                    A comprehensive study on implementing sustainable farming
                    practices in rural areas affected by climate change,
                    including case studies from 15 farming communities.
                  </Typography>
                  <Button variant="outlined" color="primary" fullWidth>
                    Read Online
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Renewable Energy Adoption in Rural India
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: Energy Policy Journal, 2023
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Analysis of solar power adoption patterns in rural
                    communities, including economic benefits, challenges, and
                    policy recommendations for scaling renewable energy
                    solutions.
                  </Typography>
                  <Button variant="outlined" color="primary" fullWidth>
                    Read Online
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Educational Resources */}
      <SectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Educational Resources
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Climate Action Guide
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Updated: January 2024
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Practical guide for rural communities on implementing
                    sustainable practices and reducing environmental impact.
                  </Typography>
                  <Button variant="contained" color="secondary" fullWidth>
                    Download Guide
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Education Success Stories
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: March 2024
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Inspiring stories of children whose lives have been
                    transformed through our educational programs.
                  </Typography>
                  <Button variant="contained" color="secondary" fullWidth>
                    View Stories
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Plastic Waste Management Manual
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: February 2024
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Step-by-step manual for communities to implement effective
                    plastic waste management and recycling programs.
                  </Typography>
                  <Button variant="contained" color="secondary" fullWidth>
                    Download Manual
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Newsletter */}
      <AltSectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Newsletter & Updates
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Monthly Newsletter - March 2024
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary">
                    Published: March 15, 2024
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Latest updates on our programs, success stories, upcoming
                    events, and ways to get involved in our mission.
                  </Typography>
                  <Button variant="outlined" color="primary" fullWidth>
                    Read Newsletter
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Subscribe to Our Newsletter
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Stay updated with our latest news, impact stories, and
                    opportunities to support our mission. Receive monthly
                    newsletters directly in your inbox.
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>
    </Box>
  );
}

export default Publications;
