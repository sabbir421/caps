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

const ResearchInnovation = () => {
  const theme = useTheme();

  const programs = [
    {
      title: "Climate Research",
      description:
        "Studying climate change impacts and developing adaptation strategies.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      icon: Nature,
      details: [
        "Climate impact assessments",
        "Adaptation strategy development",
        "Carbon footprint analysis",
        "Environmental monitoring",
      ],
    },
    {
      title: "Agricultural Innovation",
      description:
        "Developing sustainable farming techniques and technologies.",
      image:
        "https://img.freepik.com/premium-photo/rows-onion-fields-bangladeshi-farmers-are-working-village-crop-farming_104279-186.jpg",
      icon: Engineering,
      details: [
        "Crop improvement research",
        "Sustainable farming methods",
        "Technology integration",
        "Yield optimization",
      ],
    },
    {
      title: "Renewable Energy Research",
      description: "Advancing clean energy technologies for rural communities.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      icon: Engineering,
      details: [
        "Solar technology development",
        "Energy storage solutions",
        "Grid integration research",
        "Efficiency improvements",
      ],
    },
    {
      title: "Community Solutions",
      description: "Researching and developing community-based solutions.",
      image:
        "https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384=",
      icon: Business,
      details: [
        "Social impact studies",
        "Community engagement research",
        "Development effectiveness",
        "Innovation diffusion",
      ],
    },
  ];

  const impactStats = [
    { number: "50+", label: "Research Projects", icon: Nature },
    { number: "100+", label: "Innovations Developed", icon: Engineering },
    { number: "25+", label: "Publications", icon: School },
    { number: "1M+", label: "People Impacted", icon: TrendingUp },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Grid item xs={12} md={8}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Research & Innovation
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  maxWidth: 800,
                  mx: "auto",
                  textAlign: "justify",
                }}
              >
                Driving sustainable development through cutting-edge research
                and innovative solutions for rural communities.
              </Typography>
              <Box
                component="img"
                src="https://be.brussels/i/3840/sites/default/files/2023-10/entreprendre-entreprise3-new.jpg"
                alt="Research & Innovation"
                sx={{
                  width: "100%",
                  maxWidth: 700,
                  borderRadius: 4,
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                  mx: "auto",
                  display: "block",
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
            Research & Innovation Impact
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

      {/* Key Programs */}
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
            Our Research & Innovation Programs
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {programs.map((program, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
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
                    image={program.image}
                    alt={program.title}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
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
                          mr: 1,
                        }}
                      >
                        <program.icon />
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        maxWidth: 500,
                        mx: "auto",
                      }}
                    >
                      {program.description}
                    </Typography>
                    <List
                      dense
                      sx={{ display: "inline-block", textAlign: "left" }}
                    >
                      {program.details.map((detail, detailIndex) => (
                        <ListItem key={detailIndex} sx={{ px: 0 }}>
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
                            primary={detail}
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

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          bgcolor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Support Research & Innovation
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
            Innovation drives progress. Help us develop cutting-edge solutions
            for sustainable rural development.
          </Typography>
          <Chip
            label="Partner with us for research and innovation"
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
        </Container>
      </Box>
    </Box>
  );
};

export default ResearchInnovation;
