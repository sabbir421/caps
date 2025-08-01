import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  Nature,
  TrendingUp,
  People,
  School,
  LocalHospital,
  Business,
  Engineering,
  Groups,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProgramsOverview = () => {
  const theme = useTheme();

  const programCategories = [
    {
      title: "Climate Action",
      description:
        "Comprehensive climate change mitigation and adaptation programs.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      icon: Nature,
      link: "/working-area/climate-action",
      programs: [
        "Tree Planting Campaigns",
        "Renewable Energy Adoption",
        "Waste Management",
        "Carbon Reduction",
      ],
    },
    {
      title: "Education",
      description:
        "Quality education and skill development for rural communities.",
      image:
        "https://images.unsplash.com/photo-1523240794102-9eb5ccb5ac1e?w=400&h=300&fit=crop",
      icon: School,
      link: "/working-area/education",
      programs: [
        "Digital Literacy",
        "Environmental Education",
        "Vocational Training",
        "Women Empowerment",
      ],
    },
    {
      title: "Healthcare",
      description:
        "Comprehensive healthcare services and community health programs.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      icon: LocalHospital,
      link: "/working-area/healthcare",
      programs: [
        "Primary Healthcare",
        "Maternal & Child Health",
        "Mental Health Support",
        "Elderly Care",
      ],
    },
    {
      title: "Agriculture",
      description:
        "Sustainable farming and agricultural development initiatives.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      icon: Nature,
      link: "/working-area/agriculture",
      programs: [
        "Sustainable Farming",
        "Water Management",
        "Market Access",
        "Technology Adoption",
      ],
    },
    {
      title: "Water Management",
      description: "Sustainable water solutions and conservation programs.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      icon: Nature,
      link: "/working-area/water",
      programs: [
        "Rainwater Harvesting",
        "Irrigation Systems",
        "Water Conservation",
        "Quality Management",
      ],
    },
    {
      title: "Renewable Energy",
      description: "Clean energy solutions and sustainable power generation.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      icon: Nature,
      link: "/working-area/energy",
      programs: [
        "Solar Energy",
        "Wind Energy",
        "Biomass Energy",
        "Energy Efficiency",
      ],
    },
  ];

  const impactStats = [
    { number: "100K+", label: "People Impacted", icon: Groups },
    { number: "500+", label: "Projects Completed", icon: Business },
    { number: "25+", label: "Years Experience", icon: TrendingUp },
    { number: "50+", label: "Communities Served", icon: Nature },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Our Programs Overview
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Comprehensive programs across climate action, education,
                healthcare, agriculture, water management, and renewable energy
                to create sustainable rural development.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
                alt="Programs Overview"
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Impact Statistics */}
      <Box sx={{ py: 6, backgroundColor: theme.palette.background.secondary }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 6,
              color: theme.palette.text.primary,
            }}
          >
            Our Impact
          </Typography>
          <Grid container spacing={4}>
            {impactStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "white",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      mb: 2,
                    }}
                  >
                    <stat.icon sx={{ fontSize: 30 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Program Categories */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 6,
              color: theme.palette.text.primary,
            }}
          >
            Our Program Categories
          </Typography>
          <Grid container spacing={4}>
            {programCategories.map((category, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  component={Link}
                  to={category.link}
                  sx={{
                    height: "100%",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          mr: 2,
                        }}
                      >
                        <category.icon />
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {category.description}
                    </Typography>
                    <List dense>
                      {category.programs.map((program, programIndex) => (
                        <ListItem key={programIndex} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor: theme.palette.primary.main,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={program}
                            primaryTypographyProps={{
                              fontSize: "0.9rem",
                              color: theme.palette.text.secondary,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Approach */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.secondary }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 6,
              color: theme.palette.text.primary,
            }}
          >
            Our Approach
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    mb: 3,
                  }}
                >
                  <Groups sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Community-Centered
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  All our programs are designed with community input and
                  participation, ensuring sustainable impact and local
                  ownership.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    mb: 3,
                  }}
                >
                  <Nature sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Sustainable Solutions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  We focus on long-term, environmentally sustainable solutions
                  that benefit both current and future generations.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    mb: 3,
                  }}
                >
                  <Business sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Holistic Development
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  Our integrated approach addresses multiple aspects of rural
                  development simultaneously for maximum impact.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Get Involved
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Explore our programs and find ways to support our mission of
              creating sustainable change in rural communities.
            </Typography>
            <Chip
              label="Contact us to learn more about our programs"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                fontSize: "1.1rem",
                padding: "12px 24px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                },
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProgramsOverview;
