import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Avatar,
  Stack,
  Divider,
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
    name: "Muhammad Asaduzzaman",
    role: "Director General",
    email: "muhammad.asaduzzaman@capsbd.org",
    desc: "Leading the overall strategic direction and management of CAPS. Overseeing all programs and ensuring organizational excellence.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    featured: true,
  },
  {
    name: "Muhammad Golam Sarwar",
    role: "Chairperson",
    email: "muhammad.golam.sarwar@capsbd.org",
    desc: "Providing strategic leadership and governance oversight. Ensuring CAPS mission alignment and sustainable growth.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Taslima Khanam",
    role: "Director, Education & Training",
    email: "taslima.khanam@capsbd.org",
    desc: "Leading climate-smart education initiatives and capacity building programs for sustainable community development.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "M. Nasir Hossain Panchayet",
    role: "Executive Director",
    email: "nasir.hossain@capsbd.org",
    desc: "Managing day-to-day operations and implementing strategic initiatives for climate adaptation and community resilience.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Muhammad Siddikur Rahman Khokon",
    role: "Executive Director",
    email: "siddikur.rahman@capsbd.org",
    desc: "Coordinating executive operations and strategic planning for sustainable development and climate resilience programs.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Muhammad Kakaria Hossain",
    role: "Director, Administration & Operation",
    email: "kakaria.hossain@capsbd.org",
    desc: "Managing administrative functions and operational efficiency to support CAPS programs and initiatives.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mst. Morshada",
    role: "Director, Community Mobilization",
    email: "morshada@capsbd.org",
    desc: "Engaging communities and building partnerships for effective climate adaptation and sustainable development initiatives.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Muhammad Al Mamun Hawlader",
    role: "Director, Project Management",
    email: "al.mamun@capsbd.org",
    desc: "Overseeing project planning, implementation, and monitoring to ensure successful delivery of climate adaptation programs.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const socialLinks = [
  {
    icon: <Facebook />,
    color: "white",
    name: "Facebook",
    url: "https://www.facebook.com/share/1RbthrbeBQ/",
  },
];

function Contact() {
  return (
    <Box sx={{ bgcolor: "#F9FAFB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #3B82F6 100%)",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Connect With Us
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              color: "white",
            }}
          >
            Have questions or want to get involved? Reach out today and join our
            mission to make a positive impact.
          </Typography>
        </Container>
      </Box>

      {/* Contact Info */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Get In Touch
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 4,
                  height: "100%",
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-8px)",
                    transition: "all 0.3s ease",
                  },
                  transition: "all 0.3s ease",
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: item.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                    fontSize: 36,
                    boxShadow: 3,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
                >
                  {item.subtitle}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Meet Our Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Featured Team Member */}
          {teamMembers
            .filter((m) => m.featured)
            .map((member, i) => (
              <Grid item xs={12} key={i}>
                <Card
                  sx={{
                    p: 6,
                    textAlign: "center",
                    boxShadow: 6,
                    borderRadius: 4,
                    maxWidth: "800px",
                    mx: "auto",
                    background:
                      "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                  }}
                >
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{
                      width: 160,
                      height: 160,
                      mx: "auto",
                      mb: 3,
                      boxShadow: 4,
                      border: "4px solid white",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    color="primary"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      fontWeight: 600,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {member.email}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      lineHeight: 1.6,
                      maxWidth: "600px",
                      mx: "auto",
                    }}
                  >
                    {member.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}

          {/* Other Team Members */}
          <Grid item xs={12}>
            <Divider sx={{ my: 4 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 4,
                textAlign: "center",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
              }}
            >
              Our Leadership Team
            </Typography>
          </Grid>

          {teamMembers
            .filter((m) => !m.featured)
            .map((member, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: "center",
                    height: "100%",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-4px)",
                      transition: "all 0.3s ease",
                    },
                    transition: "all 0.3s ease",
                    borderRadius: 3,
                  }}
                >
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 3,
                      boxShadow: 3,
                      border: "3px solid white",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    color="primary"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: 600,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "0.8rem", sm: "0.85rem" },
                    }}
                  >
                    {member.email}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.85rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    {member.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>

      {/* Office Hours & Location */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Office Information
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Office Hours */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, height: "100%", borderRadius: 3 }}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <AccessTime sx={{ color: "#3B82F6", fontSize: 36 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", sm: "1.5rem" },
                  }}
                >
                  Office Hours
                </Typography>
              </Stack>
              <Stack spacing={2} sx={{ mb: 4 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    fontWeight={600}
                    sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                  >
                    Monday - Friday:
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem" } }}
                  >
                    9:00 AM - 6:00 PM
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    fontWeight={600}
                    sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                  >
                    Saturday:
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem" } }}
                  >
                    9:00 AM - 6:00 PM
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    fontWeight={600}
                    sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                  >
                    Sunday:
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem" } }}
                  >
                    Closed
                  </Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  bgcolor: "#FEF2F2",
                  p: 3,
                  borderRadius: 3,
                  border: "2px solid #FECACA",
                  textAlign: "center",
                }}
              >
                <Typography
                  fontWeight={700}
                  mb={1}
                  sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
                >
                  Emergency Contact
                </Typography>
                <Typography
                  color="error"
                  fontWeight={700}
                  sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem" } }}
                >
                  +8801704422997
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
                >
                  Available 24/7
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Location */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                textAlign: "center",
                height: "100%",
                borderRadius: 3,
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                mb={4}
              >
                <LocationOn sx={{ color: "#8B5CF6", fontSize: 36 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", sm: "1.5rem" },
                  }}
                >
                  Our Location
                </Typography>
              </Stack>
              <Typography
                sx={{
                  mb: 4,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                Purba Basabat, Bottalar Mor Ward 08
                <br />
                Sadar Bagerhat, Bangladesh
              </Typography>
              <Button
                variant="contained"
                startIcon={<Navigation />}
                size="large"
                sx={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: 600,
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: 4,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Get Directions
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Social Media */}
      <Box sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Follow Our Journey
          </Typography>
          <Typography
            sx={{
              mb: 4,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Stay connected with us on social media to get the latest updates
            about our projects and initiatives.
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: { xs: 2, sm: 3 } }}
          >
            {socialLinks.map((social, i) => (
              <Button
                key={i}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: social.color,
                  borderRadius: "50%",
                  width: 64,
                  height: 64,
                  minWidth: 64,
                  "&:hover": {
                    transform: "scale(1.1)",
                    filter: "brightness(0.9)",
                    boxShadow: 4,
                  },
                  transition: "all 0.3s ease",
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
