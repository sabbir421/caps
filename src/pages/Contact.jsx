import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
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

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  minHeight: "120px",
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  fontFamily: theme.typography.fontFamily,
  fontSize: "1rem",
  resize: "vertical",
  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main,
  },
}));

function Contact() {
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
            Contact Us
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
            Ready to make a difference? Get in touch with us to learn more about
            our programs, volunteer opportunities, or ways to support our
            mission.
          </Typography>
        </Container>
      </AltSectionBox>

      {/* Contact Information */}
      <SectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Get in Touch
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                color="primary"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Contact Information
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "1.1rem" }}
                >
                  <strong>Email:</strong> info@greenfutureinitiative.org
                  <br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                  <br />
                  <strong>Address:</strong> 123 Green Street, Eco City, EC 12345
                </Typography>
              </Box>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                Ready to make a difference? Join our mission to create a
                sustainable future for rural communities and children. We
                welcome volunteers, partners, and supporters who share our
                vision.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#1976d2",
                    "&:hover": { backgroundColor: "#1565c0" },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Volunteer With Us
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "#1976d2",
                    color: "#1976d2",
                    "&:hover": {
                      borderColor: "#1565c0",
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                    },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Donate Today
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: 4 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team meeting"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Contact Form */}
      <AltSectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Send Us a Message
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8} sx={{ mx: "auto" }}>
              <Card sx={{ p: 4, boxShadow: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      Message *
                    </Typography>
                    <StyledTextarea placeholder="Tell us how we can help you or how you'd like to get involved..." />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        backgroundColor: "#1976d2",
                        "&:hover": { backgroundColor: "#1565c0" },
                        py: 1.5,
                        fontSize: "1.1rem",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Team Contact */}
      <SectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Executive Director"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Dr. Sarah Johnson
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Executive Director
                  </Typography>
                  <Typography variant="body2" paragraph>
                    sarah.johnson@greenfutureinitiative.org
                  </Typography>
                  <Typography variant="body2">
                    15+ years experience in environmental conservation and rural
                    development.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Program Director"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Michael Chen
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Program Director
                  </Typography>
                  <Typography variant="body2" paragraph>
                    michael.chen@greenfutureinitiative.org
                  </Typography>
                  <Typography variant="body2">
                    Expert in community development and sustainable agriculture
                    practices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: "center", height: "100%", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="300"
                  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Education Coordinator"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Maria Rodriguez
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Education Coordinator
                  </Typography>
                  <Typography variant="body2" paragraph>
                    maria.rodriguez@greenfutureinitiative.org
                  </Typography>
                  <Typography variant="body2">
                    Dedicated to improving educational access and quality in
                    rural areas.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Office Hours */}
      <AltSectionBox>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", mb: 8, color: "#1976d2" }}
          >
            Office Hours & Location
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, boxShadow: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Office Hours
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                  <br />
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                  <br />
                  <strong>Sunday:</strong> Closed
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Emergency Contact:</strong> +1 (555) 987-6543
                  <br />
                  <strong>Available 24/7 for urgent matters</strong>
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, boxShadow: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Location & Directions
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Address:</strong>
                  <br />
                  123 Green Street
                  <br />
                  Eco City, EC 12345
                  <br />
                  United States
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Public Transportation:</strong>
                  <br />
                  • Bus Routes: 15, 23, 45
                  <br />
                  • Metro Station: Green Line - Eco City Station
                  <br />• Walking distance from downtown
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>
    </Box>
  );
}

export default Contact;
