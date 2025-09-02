import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Groups,
  Public,
  Psychology,
  School,
  CheckCircle,
  VolunteerActivism,
} from "@mui/icons-material";

const ClimateSmartVolunteer = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #2e7d32 0%, #388e3c 50%, #2e7d32 100%)",
          color: "white",
          py: { xs: 4, sm: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              lineHeight: { xs: 1.2, md: 1.3 },
              color:"white"
            }}
          >
            Climate-Smart Volunteer
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.1rem",
                lg: "1.2rem",
              },
              px: { xs: 2, sm: 0 },
              color:"white"
            }}
          >
            Empowering communities through active participation in climate
            change initiatives
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {/* Overview Section */}
          <Grid item xs={12}>
            <Card sx={{ p: { xs: 2, sm: 3, md: 4 }, mb: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 2, md: 3 },
                  color: "#1a1a1a",
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.4rem",
                    md: "1.6rem",
                    lg: "2rem",
                  },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, md: 3 },
                  lineHeight: 1.7,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#333",
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                Caps//Climate Adaptation Plan Society approches a program
                "Climate-Smart Volunteer" Aiming to make people who actively
                participate in initiatives that address climate change,
                promoting resilience and sustainability within their
                communities. These volunteers work to mitigate the effects of
                climate change through various actions, including knowledge
                sharing, disaster preparedness, and implementing adaptation and
                mitigation measures.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#333",
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                Here's a breakdown of what climate-smart volunteering entails:
              </Typography>
            </Card>
          </Grid>

          {/* Key Aspects Grid */}
          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ p: { xs: 2, sm: 3, md: 4 }, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 50, sm: 55, md: 60 },
                    height: { xs: 50, sm: 55, md: 60 },
                    borderRadius: "50%",
                    background: "rgba(46, 125, 50, 0.1)",
                    color: "#2e7d32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: { xs: 1.5, md: 2 },
                    fontSize: { xs: 24, sm: 26, md: 28 },
                    flexShrink: 0,
                  }}
                >
                  <Groups />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.2rem",
                      md: "1.3rem",
                      lg: "1.4rem",
                    },
                    lineHeight: 1.2,
                  }}
                >
                  Community Focus:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#333",
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                Climate-smart volunteers often work within their own
                communities, leveraging local knowledge and cultural
                understanding to address climate challenges.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ p: { xs: 2, sm: 3, md: 4 }, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 50, sm: 55, md: 60 },
                    height: { xs: 50, sm: 55, md: 60 },
                    borderRadius: "50%",
                    background: "rgba(25, 118, 210, 0.1)",
                    color: "#1976d2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: { xs: 1.5, md: 2 },
                    fontSize: { xs: 24, sm: 26, md: 28 },
                    flexShrink: 0,
                  }}
                >
                  <Public />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.2rem",
                      md: "1.3rem",
                      lg: "1.4rem",
                    },
                    lineHeight: 1.2,
                  }}
                >
                  Diverse Activities:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#333",
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                Volunteers engage in a wide range of activities, such as
                promoting climate-adaptive livelihood options, participating in
                disaster preparedness and response, and advocating for
                sustainable practices.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ p: { xs: 2, sm: 3, md: 4 }, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 50, sm: 55, md: 60 },
                    height: { xs: 50, sm: 55, md: 60 },
                    borderRadius: "50%",
                    background: "rgba(123, 31, 162, 0.1)",
                    color: "#7b1fa2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: { xs: 1.5, md: 2 },
                    fontSize: { xs: 24, sm: 26, md: 28 },
                    flexShrink: 0,
                  }}
                >
                  <Psychology />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.2rem",
                      md: "1.3rem",
                      lg: "1.4rem",
                    },
                    lineHeight: 1.2,
                  }}
                >
                  Building Resilience:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#333",
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                A core aspect of climate-smart volunteering is strengthening
                community resilience to climate change impacts, which can
                involve enhancing natural resources, improving infrastructure,
                and fostering community cohesion.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ p: { xs: 2, sm: 3, md: 4 }, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 50, sm: 55, md: 60 },
                    height: { xs: 50, sm: 55, md: 60 },
                    borderRadius: "50%",
                    background: "rgba(255, 152, 0, 0.1)",
                    color: "#ff9800",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: { xs: 1.5, md: 2 },
                    fontSize: { xs: 24, sm: 26, md: 28 },
                    flexShrink: 0,
                  }}
                >
                  <School />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.2rem",
                      md: "1.3rem",
                      lg: "1.4rem",
                    },
                    lineHeight: 1.2,
                  }}
                >
                  Knowledge and Capacity Building:
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  color: "#333",
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                Volunteers play a crucial role in educating and empowering
                others, sharing information about climate change and its
                impacts, and promoting sustainable practices.
              </Typography>
            </Card>
          </Grid>

          {/* Volunteer Activities Section */}
          <Grid item xs={12}>
            <Card sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: { xs: 1, md: 2 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 2, md: 3 },
                  color: "#1a1a1a",
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.4rem",
                    md: "1.6rem",
                    lg: "2rem",
                  },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Volunteer Activities
              </Typography>
              <Grid container spacing={{ xs: 2, sm: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: { xs: 1.5, md: 2 },
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#2e7d32",
                        mr: 1,
                        mt: 0.5,
                        fontSize: { xs: 18, sm: 20, md: 24 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        color: "#333",
                        lineHeight: 1.4,
                      }}
                    >
                      Tree plantation campaigns
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: { xs: 1.5, md: 2 },
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#2e7d32",
                        mr: 1,
                        mt: 0.5,
                        fontSize: { xs: 18, sm: 20, md: 24 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        color: "#333",
                        lineHeight: 1.4,
                      }}
                    >
                      Disaster preparedness training
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: { xs: 1.5, md: 2 },
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#2e7d32",
                        mr: 1,
                        mt: 0.5,
                        fontSize: { xs: 18, sm: 20, md: 24 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        color: "#333",
                        lineHeight: 1.4,
                      }}
                    >
                      Community clean-up drives
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: { xs: 1.5, md: 2 },
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#2e7d32",
                        mr: 1,
                        mt: 0.5,
                        fontSize: { xs: 18, sm: 20, md: 24 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        color: "#333",
                        lineHeight: 1.4,
                      }}
                    >
                      Sustainable practice workshops
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: { xs: 1.5, md: 2 },
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#2e7d32",
                        mr: 1,
                        mt: 0.5,
                        fontSize: { xs: 18, sm: 20, md: 24 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        color: "#333",
                        lineHeight: 1.4,
                      }}
                    >
                      Climate education programs
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: { xs: 1.5, md: 2 },
                    }}
                  >
                    <CheckCircle
                      sx={{
                        color: "#2e7d32",
                        mr: 1,
                        mt: 0.5,
                        fontSize: { xs: 18, sm: 20, md: 24 },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        color: "#333",
                        lineHeight: 1.4,
                      }}
                    >
                      Infrastructure improvement projects
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

         
        </Grid>
      </Container>
    </Box>
  );
};

export default ClimateSmartVolunteer;
