import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
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

function WhatWeDo() {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
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
            What We Do
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
            Our comprehensive programs address the interconnected challenges of
            climate change, education, healthcare, and sustainable development
            in rural communities.
          </Typography>
        </Container>
      </AltSectionBox>

      {/* Climate Change Initiatives */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            🌱 Climate Change Initiatives
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Tree Planting Campaigns
                </Typography>
                <Typography variant="body1" paragraph>
                  • Large-scale reforestation projects in rural areas
                  <br />
                  • Community-led tree planting initiatives
                  <br />
                  • Native species restoration programs
                  <br />
                  • Carbon sequestration monitoring
                  <br />• Educational workshops on forest conservation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Impact:</strong> 10,000+ trees planted, 500+ tons of
                  CO2 sequestered annually
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Renewable Energy Adoption
                </Typography>
                <Typography variant="body1" paragraph>
                  • Solar panel installation in rural homes
                  <br />
                  • Community solar power projects
                  <br />
                  • Wind energy feasibility studies
                  <br />
                  • Energy efficiency training programs
                  <br />• Micro-grid development for remote villages
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Impact:</strong> 1,000+ homes powered by renewable
                  energy
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Education Programs */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            📚 Education Programs
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="School infrastructure"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    School Infrastructure Development
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Building and renovating schools, providing modern
                    facilities, and ensuring safe learning environments for
                    children.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Digital literacy"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Digital Literacy Programs
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Teaching computer skills, internet usage, and digital tools
                    to prepare children for the modern workforce.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%", boxShadow: 4 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Environmental education"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Environmental Education
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Integrating climate change awareness and environmental
                    stewardship into school curricula.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Healthcare Support */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            🏥 Healthcare Support
          </Typography>
          <Box sx={{ mb: 6 }}>
            <Card sx={{ maxWidth: 600, mx: "auto", boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Healthcare support"
              />
            </Card>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Mobile Medical Camps
                </Typography>
                <Typography variant="body1" paragraph>
                  • Regular health check-ups in remote villages
                  <br />
                  • Vaccination drives for children
                  <br />
                  • Maternal and child health services
                  <br />
                  • Emergency medical care
                  <br />• Health awareness campaigns
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Impact:</strong> 5,000+ patients treated annually
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Nutrition Programs
                </Typography>
                <Typography variant="body1" paragraph>
                  • School meal programs for children
                  <br />
                  • Nutritional education for families
                  <br />
                  • Community kitchen initiatives
                  <br />
                  • Food security projects
                  <br />• Sustainable farming for nutrition
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Impact:</strong> 3,000+ children receiving daily
                  nutritious meals
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Plastic Waste Management */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            ♻️ Plastic Waste Management
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card
                sx={{ height: "100%", textAlign: "center", p: 3, boxShadow: 3 }}
              >
                <Typography variant="h4" sx={{ mb: 2 }}>
                  🗑️
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Collection & Recycling
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ textAlign: "justify" }}
                >
                  Establishing plastic collection systems, recycling facilities,
                  and waste segregation programs in rural communities.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Impact:</strong> 50+ tons of plastic recycled annually
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{ height: "100%", textAlign: "center", p: 3, boxShadow: 3 }}
              >
                <Typography variant="h4" sx={{ mb: 2 }}>
                  🌿
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Eco-friendly Alternatives
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ textAlign: "justify" }}
                >
                  Promoting biodegradable products, reusable materials, and
                  sustainable packaging solutions in rural markets.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Impact:</strong> 20+ villages adopting plastic-free
                  practices
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{ height: "100%", textAlign: "center", p: 3, boxShadow: 3 }}
              >
                <Typography variant="h4" sx={{ mb: 2 }}>
                  🎨
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Upcycling Workshops
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ textAlign: "justify" }}
                >
                  Teaching communities to transform plastic waste into useful
                  products, creating income opportunities and reducing waste.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Impact:</strong> 100+ families earning from upcycling
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Impact Summary */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Our Impact Summary
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    10,000+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Trees Planted
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Carbon footprint reduction
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    5,000+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Children Educated
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quality education access
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    1,000+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Homes Powered
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Renewable energy adoption
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    50+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Tons Recycled
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plastic waste management
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>
    </Box>
  );
}

export default WhatWeDo;
