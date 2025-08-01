import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

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

const TimelineCard = styled(Card)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  "&::before": {
    content: '""',
    position: "absolute",
    left: "20px",
    top: "60px",
    bottom: "-30px",
    width: "3px",
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
    borderRadius: 2,
  },
  "&:last-child::before": {
    display: "none",
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "15px",
  top: "20px",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  border: `3px solid ${theme.palette.background.paper}`,
  zIndex: 2,
  boxShadow: "0 0 6px rgba(25, 118, 210, 0.7)",
}));

// New card for values/testimonials
const ValueCard = styled(Card)(({ theme }) => ({
  height: "100%",
  textAlign: "center",
  padding: theme.spacing(4),
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
  maxWidth: 400,
  margin: "auto",
}));

function About() {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        scrollBehavior: "smooth",
      }}
    >
      {/* Hero Section */}
      <AltSectionBox sx={{ width: "100%", pb: 10 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 3,
              letterSpacing: 1,
            }}
          >
            About Green Future Initiative
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 720,
              mx: "auto",
              color: "text.secondary",
              mb: 5,
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            We are a dedicated non-profit committed to creating sustainable
            change in rural communities through climate action, education, and
            healthcare initiatives. Join us in our mission to build a greener,
            healthier future.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ px: 6, py: 1.8, fontWeight: 700, borderRadius: 3 }}
            href="/donate"
          >
            Donate Now
          </Button>
        </Container>
      </AltSectionBox>

      {/* Mission & Vision Section */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={8}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 10 }}
          >
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: "1.15rem", lineHeight: 1.8, mb: 3 }}
                  >
                    Green Future Initiative is dedicated to combating climate
                    change in rural areas while ensuring children's education
                    and healthcare access. We believe in creating sustainable
                    communities that thrive in harmony with nature.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: "1.15rem", lineHeight: 1.8 }}
                  >
                    Since our founding, we've worked with over 50 rural
                    communities across the country, implementing innovative
                    solutions for environmental conservation and community
                    development.
                  </Typography>

                  <Box sx={{ mt: 5 }}>
                    <Chip
                      label="Climate Action"
                      color="primary"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                    <Chip
                      label="Education"
                      color="secondary"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                    <Chip
                      label="Healthcare"
                      color="success"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                    <Chip
                      label="Rural Development"
                      color="info"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                  </Box>
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} md={6}>
              <Fade in timeout={1500}>
                <Card
                  sx={{
                    boxShadow: 6,
                    borderRadius: 4,
                    overflow: "hidden",
                    "& img": {
                      transition: "transform 0.5s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="450"
                    image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                    alt="Community meeting"
                  />
                </Card>
              </Fade>
            </Grid>
          </Grid>

          {/* Why Choose Us Section */}
          <Box sx={{ textAlign: "center", mb: 12 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
            >
              Why Choose Us?
            </Typography>
            <Grid container spacing={6} justifyContent="center" maxWidth="lg" mx="auto">
              {[
                {
                  icon: "🌍",
                  title: "Global Impact",
                  description:
                    "We focus on sustainable projects with measurable positive effects worldwide.",
                },
                {
                  icon: "🤝",
                  title: "Community Driven",
                  description:
                    "Local participation and respect for indigenous knowledge is at the core of our work.",
                },
                {
                  icon: "💡",
                  title: "Innovative Solutions",
                  description:
                    "We use cutting-edge, scalable solutions tailored to each community’s unique needs.",
                },
              ].map(({ icon, title, description }, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <ValueCard>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                      {icon}
                    </Typography>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="primary"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary" }}>
                      {description}
                    </Typography>
                  </ValueCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </SectionBox>

      {/* Core Values Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 10, fontWeight: "bold" }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={6} justifyContent="center" maxWidth="lg" mx="auto">
            {[
              {
                emoji: "🌱",
                title: "Sustainability",
                description:
                  "We create environmentally sustainable and economically viable solutions for long-term growth.",
              },
              {
                emoji: "🤝",
                title: "Community Partnership",
                description:
                  "We collaborate closely with local communities, respecting their knowledge and culture.",
              },
              {
                emoji: "🎯",
                title: "Impact-Driven",
                description:
                  "Every program is designed to create measurable, positive impacts on people and the environment.",
              },
            ].map(({ emoji, title, description }, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <ValueCard>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {emoji}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {description}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Timeline Section */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 8, fontWeight: "bold" }}
          >
            Our Journey
          </Typography>
          <Box sx={{ maxWidth: "700px", mx: "auto" }}>
            {[ 
              {
                year: "2018 - Foundation",
                desc: "Green Future Initiative was founded with a vision to address climate change and rural development challenges.",
              },
              {
                year: "2020 - First Milestone",
                desc: "Successfully planted 10,000 trees and established education programs in 10 rural communities.",
              },
              {
                year: "2022 - Expansion",
                desc: "Expanded to 50 communities with healthcare initiatives and plastic waste management programs.",
              },
              {
                year: "2024 - Future Vision",
                desc: "Aiming to reach 100 communities and create the first completely sustainable rural development model.",
              },
            ].map(({ year, desc }, idx) => (
              <TimelineCard key={idx}>
                <TimelineDot />
                <CardContent sx={{ pl: 6 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {year}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {desc}
                  </Typography>
                </CardContent>
              </TimelineCard>
            ))}
          </Box>
        </Container>
      </SectionBox>

      {/* Team Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 8, fontWeight: "bold" }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={6} justifyContent="center" maxWidth="lg" mx="auto">
            {[
              {
                name: "Dr. Sarah Johnson",
                title: "Executive Director",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                desc: "15+ years experience in environmental conservation and rural development.",
              },
              {
                name: "Michael Chen",
                title: "Program Director",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
                desc: "Expert in community development and sustainable agriculture practices.",
              },
              {
                name: "Maria Rodriguez",
                title: "Education Coordinator",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
                desc: "Dedicated to improving educational access and quality in rural areas.",
              },
            ].map(({ name, title, img, desc }, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    textAlign: "center",
                    height: "100%",
                    boxShadow: 4,
                    borderRadius: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="320"
                    image={img}
                    alt={name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                      sx={{ fontStyle: "italic" }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Testimonials Section */}
      <SectionBox sx={{ width: "100%", backgroundColor: "#e3f2fd" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 8, fontWeight: "bold" }}
          >
            What Our Supporters Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                quote:
                  "Green Future Initiative has transformed our village with their sustainable programs. Their dedication is unmatched!",
                name: "Amina S.",
                role: "Community Leader",
              },
              {
                quote:
                  "I am proud to support an organization that truly listens and respects the communities it serves.",
                name: "James T.",
                role: "Donor",
              },
              {
                quote:
                  "Their education initiatives are changing lives, and their impact is visible everywhere.",
                name: "Linda K.",
                role: "Volunteer",
              },
            ].map(({ quote, name, role }, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <TestimonialCard>
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", mb: 3, color: "text.secondary" }}
                  >
                    “{quote}”
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {role}
                  </Typography>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionBox>

      {/* Call to Action Section */}
      <AltSectionBox sx={{ width: "100%", pt: 10, pb: 10 }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
          >
            Join Us in Making a Difference
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Your support helps us bring sustainable change to rural communities.
            Volunteer, donate, or partner with us today.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ px: 6, py: 1.8, fontWeight: 700, borderRadius: 3, mr: 3 }}
            href="/volunteer"
          >
            Volunteer
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ px: 6, py: 1.8, fontWeight: 700, borderRadius: 3 }}
            href="/donate"
          >
            Donate
          </Button>
        </Container>
      </AltSectionBox>
    </Box>
  );
}

export default About;
