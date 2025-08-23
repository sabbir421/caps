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

const AdvocacyPolicy = () => {
  const theme = useTheme();

  const initiatives = [
    {
      title: "Policy Research",
      description:
        "Conducting comprehensive research to inform evidence-based policy recommendations.",
      image:
        "https://images.unsplash.com/photo-1523240794102-9eb5ccbdd362?w=400&h=300&fit=crop",
      icon: Nature,
      details: [
        "Environmental impact assessments",
        "Policy analysis and recommendations",
        "Stakeholder consultation processes",
        "Data collection and analysis",
      ],
    },
    {
      title: "Government Engagement",
      description:
        "Working with government agencies to develop and implement sustainable policies.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      icon: Business,
      details: [
        "Policy dialogue and consultation",
        "Legislative advocacy",
        "Government partnership development",
        "Policy implementation support",
      ],
    },
    {
      title: "Community Mobilization",
      description:
        "Empowering communities to advocate for their rights and sustainable development.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      icon: People,
      details: [
        "Community awareness campaigns",
        "Grassroots advocacy training",
        "Public participation programs",
        "Local leadership development",
      ],
    },
    {
      title: "International Advocacy",
      description:
        "Engaging with international organizations and forums to promote sustainable development.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      icon: Engineering,
      details: [
        "UN forum participation",
        "International policy advocacy",
        "Global partnership development",
        "Cross-border collaboration",
      ],
    },
  ];

  const impactStats = [
    { number: "50+", label: "Policies Influenced", icon: Nature },
    { number: "100+", label: "Communities Engaged", icon: People },
    { number: "25+", label: "Government Partners", icon: Business },
    { number: "20+", label: "Years of Advocacy", icon: TrendingUp },
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
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Advocacy & Policy
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                }}
              >
                Influencing policies and advocating for sustainable development,
                climate action, and rural community rights.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
                alt="Advocacy & Policy"
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
            Advocacy & Policy Impact
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
            Our Advocacy & Policy Programs
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {initiatives.map((initiative, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: "100%",
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
                    image={initiative.image}
                    alt={initiative.title}
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
                        <initiative.icon />
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {initiative.title}
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
                      {initiative.description}
                    </Typography>
                    <List dense>
                      {initiative.details.map((detail, detailIndex) => (
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
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Support Our Advocacy
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
              Policy change drives systemic impact. Help us advocate for
              policies that support sustainable development and rural
              communities.
            </Typography>
            <Chip
              label="Join our advocacy campaigns"
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

export default AdvocacyPolicy;
