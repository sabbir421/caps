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
  WaterDrop,
  Agriculture,
  ChildCare,
  Forest,
  Water,
  Handshake,
  Commute,
  WorkspacePremium
} from "@mui/icons-material";

const ProgramsOverview = () => {
  const theme = useTheme();

  const programCategories = [
    {
      title: "Community Education & Support",
      description:
        "Programs focused on empowering communities through education and social services.",
      image: "https://placehold.co/400x300/FFFDE7/F57F17?text=Community+Education",
      icon: School,
      link: "/working-area/community-education",
      programs: [
        "Climate Smart Community Education",
        "Climate-smart child protection",
        "Climate Smart Coding education",
        "Climate-smart Programs for People with Disabilities",
      ],
    },
    {
      title: "Environmental & Waste Management",
      description:
        "Initiatives to manage waste sustainably and reduce environmental pollution.",
      image: "https://placehold.co/400x300/E8F5E9/2E7D32?text=Waste+Management",
      icon: Nature,
      link: "/working-area/environmental-management",
      programs: [
        "Climate Smart Community Garbage Management",
        "Climate-smart plastic management",
      ],
    },
    {
      title: "Ecosystem Conservation",
      description:
        "Protecting and restoring natural ecosystems, including forests and wildlife.",
      image: "https://placehold.co/400x300/F0F4C3/689F38?text=Ecosystem+Conservation",
      icon: Forest,
      link: "/working-area/ecosystem-conservation",
      programs: [
        "Climate-smart Sundarbans",
        "Climate-smart Afforestation",
        "Climate-smart Wildlife Adaptation",
        "Climate-smart Wilderness",
        "Climate-smart adaptation for sea species",
      ],
    },
    {
      title: "Sustainable Livelihoods",
      description:
        "Developing climate-resilient economic opportunities and sustainable practices.",
      image: "https://placehold.co/400x300/FFEBEE/C62828?text=Sustainable+Livelihoods",
      icon: Agriculture,
      link: "/working-area/sustainable-livelihoods",
      programs: [
        "Climate-smart fisherman resettlement",
        "Climate-smart Resettlement for women",
        "Climate-smart women entrepreneurs",
        "Climate-smart agro-forestry",
        "Climate-smart agriculture (CSA)",
        "Climate-smart aquaculture",
        "Climate-Smart Migration",
        "Climate smart outsourcing…",
      ],
    },
    {
      title: "Water & Infrastructure",
      description:
        "Improving water systems and building resilient infrastructure.",
      image: "https://placehold.co/400x300/E1F5FE/01579B?text=Water+Infrastructure",
      icon: WaterDrop,
      link: "/working-area/water-infrastructure",
      programs: [
        "Climate-smart irrigation",
        "Climate Smart Water Plant",
        "Climate-smart Canal and River Excavation",
      ],
    },
    {
      title: "Prioritizing Vulnerable People",
      description:
        "Special initiatives to protect and support people most affected by climate change.",
      image: "https://placehold.co/400x300/D1C4E9/4527A0?text=Vulnerable+Communities",
      icon: People,
      link: "/working-area/vulnerable-people",
      programs: [
        "Prioritizing climate-vulnerable people",
      ],
    },
  ];

  const impactStats = [
    { number: "100K+", label: "People Impacted", icon: Groups },
    { number: "500+", label: "Projects Completed", icon: Business },
    { number: "25+", label: "Years Experience", icon: TrendingUp },
    { number: "50+", label: "Communities Served", icon: Handshake },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
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
                Comprehensive programs across various sectors to create
                sustainable rural development and climate resilience.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Impact Statistics */}
      <Box sx={{ py: 6, bgcolor: theme.palette.grey[100] }}>
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
          <Grid container spacing={4} justifyContent="center">
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
          <Grid container spacing={4} justifyContent="center">
            {programCategories.map((category, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    cursor: 'pointer',
                    "&:hover": {
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
      <Box sx={{ py: 8, bgcolor: theme.palette.grey[100] }}>
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
          <Grid container spacing={4} justifyContent="center">
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
          bgcolor: theme.palette.primary.main,
          color: "white",
          textAlign: 'center',
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
