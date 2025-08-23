import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: "white",
  padding: theme.spacing(15, 0),
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.1,
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.95)",
  backdropFilter: "blur(10px)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
  },
}));

const TeamCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  },
}));

const InfoCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(4),
  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  border: "1px solid rgba(0,0,0,0.05)",
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
}));

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: 48,
  height: 48,
  borderRadius: "50%",
  margin: theme.spacing(0.5),
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

function Contact() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4rem" },
              position: "relative",
              zIndex: 1,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              opacity: 0.9,
              maxWidth: 600,
              mx: "auto",
              position: "relative",
              zIndex: 1,
              fontWeight: 300,
            }}
          >
            Ready to make a difference? Connect with us to learn more about our
            programs, volunteer opportunities, or ways to support our mission.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          ></Box>
        </Container>
      </HeroSection>

      {/* Quick Contact Info */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ContactCard>
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    <Email sx={{ fontSize: 40, color: "white" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Email Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    capsbd25@gmail.com
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We typically respond within 24 hours
                  </Typography>
                </CardContent>
              </ContactCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ContactCard>
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    <Phone sx={{ fontSize: 40, color: "white" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Call Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    +8801704422997
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Friday, 9 AM - 6 PM
                  </Typography>
                </CardContent>
              </ContactCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ContactCard>
                <CardContent sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    <LocationOn sx={{ fontSize: 40, color: "white" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Visit Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Purba Basabat, Bottalar Mor Ward no-08, Sadar Bagerhat.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Bangladesh
                  </Typography>
                </CardContent>
              </ContactCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Meet Our Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Our dedicated team is here to help you get involved and make a
            difference
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <TeamCard>
                <CardMedia
                  component="img"
                  height="320"
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Executive Director"
                />
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    Dr. Sarah Johnson
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Executive Director
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    sarah.johnson@greenfutureinitiative.org
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    15+ years experience in environmental conservation and rural
                    development.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                  >
                    <SocialButton variant="outlined" size="small">
                      <Email />
                    </SocialButton>
                    <SocialButton variant="outlined" size="small">
                      <Phone />
                    </SocialButton>
                  </Box>
                </CardContent>
              </TeamCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard>
                <CardMedia
                  component="img"
                  height="320"
                  image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Program Director"
                />
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    Michael Chen
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Program Director
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    michael.chen@greenfutureinitiative.org
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Expert in community development and sustainable agriculture
                    practices.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                  >
                    <SocialButton variant="outlined" size="small">
                      <Email />
                    </SocialButton>
                    <SocialButton variant="outlined" size="small">
                      <Phone />
                    </SocialButton>
                  </Box>
                </CardContent>
              </TeamCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard>
                <CardMedia
                  component="img"
                  height="320"
                  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                  alt="Education Coordinator"
                />
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    Maria Rodriguez
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Education Coordinator
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    maria.rodriguez@greenfutureinitiative.org
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Dedicated to improving educational access and quality in
                    rural areas.
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                  >
                    <SocialButton variant="outlined" size="small">
                      <Email />
                    </SocialButton>
                    <SocialButton variant="outlined" size="small">
                      <Phone />
                    </SocialButton>
                  </Box>
                </CardContent>
              </TeamCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Office Hours & Location */}
      <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Office Hours & Location
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 8,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Find us when it's convenient for you
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <InfoCard>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <AccessTime
                    sx={{ fontSize: 40, color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Office Hours
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem" }}
                >
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem" }}
                >
                  <strong>Saturday:</strong> 9:00 AM - 6:00 PM
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem" }}
                ></Typography>
                <Box
                  sx={{
                    mt: 3,
                    p: 3,
                    backgroundColor: "primary.light",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Emergency Contact
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    +8801704422997
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Available 24/7 for urgent matters
                  </Typography>
                </Box>
              </InfoCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoCard>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocationOn
                    sx={{ fontSize: 40, color: "primary.main", mr: 2 }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Location & Directions
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem" }}
                >
                  <strong>Address:</strong>
                  Purba Basabat, Bottalar Mor Ward no-08, Sadar Bagerhat.
                  <br />
                  Bangladesh
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem" }}
                ></Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 600,
                  }}
                >
                  Get Directions
                </Button>
              </InfoCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Social Media & Newsletter */}
      {/* <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Stay Connected
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Follow us on social media and stay updated with our latest
            initiatives
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}
            >
              <SocialButton
                variant="contained"
                sx={{ backgroundColor: "#1877f2" }}
              >
                <Facebook />
              </SocialButton>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Join our community of changemakers and stay informed about our
              impact
            </Typography>
          </Box>
        </Container>
      </Box> */}
    </Box>
  );
}

export default Contact;
