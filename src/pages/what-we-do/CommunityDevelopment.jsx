import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Psychology,
  Business,
  Groups,
  School,
  TrendingUp,
} from "@mui/icons-material";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const CommunityDevelopment = () => {
  const theme = useTheme();

  const programs = [
    {
      title: "Leadership Development",
      description:
        "Empowering community leaders with skills and knowledge to drive local development.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaC4ABRZh3z2sU4tvYq8TTcVv-l0-xAGtXQ&s",
      icon: Psychology,
      details: [
        "Leadership training workshops",
        "Community governance support",
        "Conflict resolution skills",
        "Decision-making processes",
      ],
    },
    {
      title: "Economic Empowerment",
      description:
        "Creating sustainable economic opportunities for community members.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo62pZ0ZamU68CSeO4qKK0bWblL12xcseW4A&s",
      icon: Business,
      details: [
        "Micro-enterprise development",
        "Skills training programs",
        "Market access support",
        "Financial literacy education",
      ],
    },
    {
      title: "Social Infrastructure",
      description: "Building and improving community facilities and services.",
      image:
        "https://equitablegrowth.org/wp-content/uploads/2023/01/Social-infrastructure-and-investment.jpg",
      icon: Groups,
      details: [
        "Community centers",
        "Public spaces development",
        "Basic infrastructure",
        "Service delivery systems",
      ],
    },
    {
      title: "Capacity Building",
      description: "Strengthening community organizations and institutions.",
      image:
        "https://t3.ftcdn.net/jpg/02/01/01/22/360_F_201012244_a8uvbhikzy2KSYh6KoBJ7y24Ps7kPzSq.jpg",
      icon: School,
      details: [
        "Organizational development",
        "Project management skills",
        "Resource mobilization",
        "Monitoring and evaluation",
      ],
    },
  ];

  const impactStats = [
    { number: "100+", label: "Communities Developed", icon: Groups },
    { number: "1K+", label: "Leaders Trained", icon: Psychology },
    { number: "500+", label: "Projects Implemented", icon: Business },
    { number: "50K+", label: "People Benefited", icon: TrendingUp },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: { xs: 8, md: 12 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.squarespace-cdn.com/content/v1/5df6bf8c5a9fd4488885978d/1584659880828-RGUPD3N7KCCD4X601DWM/Community%2BDevelopment%2BFramework%2Bdiagram.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "white",
            }}
          >
            Community Development
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              lineHeight: 1.6,
              color: "white",
              textAlign: "justify",
            }}
          >
            Empowering communities to take ownership of their development
            through leadership, capacity building, and sustainable initiatives.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: theme.palette.primary.main,
              fontWeight: 600,
              px: 4,
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
            }}
          >
            Join Our Mission
          </Button>
        </Container>
      </Box>

      {/* Impact Statistics */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={700} mb={6}>
            Our Impact
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {impactStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionBox
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,0.8)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
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
                    variant="h4"
                    fontWeight={700}
                    color={theme.palette.primary.main}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs */}
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={700} mb={6}>
            Our Programs
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={5} key={index}>
                <MotionCard
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={program.image}
                    alt={program.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
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
                      <Typography variant="h6" fontWeight={600}>
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {program.description}
                    </Typography>
                    <List
                      dense
                      sx={{ display: "inline-block", textAlign: "left" }}
                    >
                      {program.details.map((detail, i) => (
                        <ListItem key={i} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 20 }}>
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
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CommunityDevelopment;
