import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Navigation,
} from "@mui/icons-material";

const contactInfo = [
  {
    icon: <Email />,
    title: "Email Us",
    value: "capsbd25@gmail.com",
    subtitle: "We usually respond within 24 hours",
    color: "#3B82F6",
  },
  {
    icon: <Phone />,
    title: "Call Us",
    value: "+8801704422997",
    subtitle: "Mon-Fri, 9AM - 6PM",
    color: "#10B981",
  },
  {
    icon: <LocationOn />,
    title: "Visit Us",
    value: "Purba Basabat, Bottalar Mor, Ward 08",
    subtitle: "Sadar Bagerhat, Bangladesh",
    color: "#8B5CF6",
  },
];

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Executive Director",
    email: "sarah.johnson@greenfutureinitiative.org",
    desc: "15+ years experience in environmental conservation and sustainable development.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    featured: true,
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    email: "michael.chen@greenfutureinitiative.org",
    desc: "Expert in community development & sustainable agriculture.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Maria Rodriguez",
    role: "Education Coordinator",
    email: "maria.rodriguez@greenfutureinitiative.org",
    desc: "Dedicated to improving educational access in rural areas.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const socialLinks = [
  { icon: <Facebook />, color: "#1877F2", name: "Facebook" },
  { icon: <Twitter />, color: "#1DA1F2", name: "Twitter" },
  { icon: <Instagram />, color: "#E4405F", name: "Instagram" },
  { icon: <LinkedIn />, color: "#0A66C2", name: "LinkedIn" },
];

function Contact() {
  return (
    <Box sx={{ bgcolor: "#F9FAFB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #3B82F6 100%)",
          py: { xs: 6, md: 12 },
          textAlign: "center",
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Connect With Us
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}>
            Have questions or want to get involved? Reach out today and join our
            mission to make a positive impact.
          </Typography>
        </Container>
      </Box>

      {/* Contact Info */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={3}>
          {contactInfo.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  "&:hover": { boxShadow: 6, transform: "translateY(-4px)" },
                  transition: "0.3s ease",
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    bgcolor: item.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    fontSize: 32,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 0.5 }}>{item.value}</Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ p: 3, textAlign: "center" }}>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {member.name}
                </Typography>
                <Typography color="primary" sx={{ mb: 1 }}>
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {member.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Office Hours & Location */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          {/* Office Hours */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3 }}>
              <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                <AccessTime sx={{ color: "#3B82F6", fontSize: 32 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Office Hours
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={600}>Mon - Fri:</Typography>
                  <Typography color="text.secondary">9AM - 6PM</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight={600}>Saturday:</Typography>
                  <Typography color="text.secondary">9AM - 6PM</Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  mt: 3,
                  bgcolor: "#FEF2F2",
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #FECACA",
                  textAlign: "center",
                }}
              >
                <Typography fontWeight={700} mb={1}>
                  Emergency Contact
                </Typography>
                <Typography color="error" fontWeight={700}>
                  +8801704422997
                </Typography>
                <Typography color="text.secondary">Available 24/7</Typography>
              </Box>
            </Card>
          </Grid>

          {/* Location */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                mb={3}
              >
                <LocationOn sx={{ color: "#8B5CF6", fontSize: 32 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Our Location
                </Typography>
              </Stack>
              <Typography sx={{ mb: 3 }}>
                Purba Basabat, Bottalar Mor Ward 08, Sadar Bagerhat, Bangladesh
              </Typography>
              <Button
                variant="contained"
                startIcon={<Navigation />}
                sx={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
                  },
                }}
              >
                Get Directions
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Social Media */}
      <Box sx={{ py: { xs: 4, md: 8 }, textAlign: "center" }}>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Follow Our Journey
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
          >
            {socialLinks.map((social, i) => (
              <Button
                key={i}
                sx={{
                  bgcolor: social.color,
                  borderRadius: "50%",
                  width: 56,
                  height: 56,
                  minWidth: 56,
                  "&:hover": {
                    transform: "scale(1.1)",
                    filter: "brightness(0.9)",
                  },
                }}
              >
                {social.icon}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
