import React, { useEffect, useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import {
  TrendingUp,
  Forest,
  SolarPower,
  Recycling,
  WaterDrop,
  School,
  Groups,
  Nature,
} from "@mui/icons-material";

const fadeInDuration = 600; // ms

const ClimateAction = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  // Scroll-based fade in effect for stats and initiatives
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      const newVisible = [];
      elements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          newVisible.push(i);
        }
      });
      setVisibleIndexes(newVisible);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initiatives = [
    {
      title: "Tree Planting Campaigns",
      description:
        "Large-scale reforestation projects to restore degraded lands and create carbon sinks.",
      icon: Forest,
      details: [
        "Planting 1 million trees annually",
        "Restoring 500+ hectares of degraded land",
        "Creating community forest management systems",
        "Training local communities in sustainable forestry",
      ],
    },
    {
      title: "Renewable Energy Adoption",
      description:
        "Promoting clean energy solutions in rural communities to reduce carbon emissions.",
      icon: SolarPower,
      details: [
        "Installing solar panels in 200+ villages",
        "Training technicians in renewable energy",
        "Establishing community energy cooperatives",
        "Reducing dependency on fossil fuels",
      ],
    },
    {
      title: "Waste Management Programs",
      description:
        "Implementing comprehensive waste reduction and recycling initiatives.",
      icon: Recycling,
      details: [
        "Zero-waste village programs",
        "Plastic waste collection and recycling",
        "Composting and organic waste management",
        "Community education on waste reduction",
      ],
    },
    {
      title: "Water Conservation",
      description:
        "Sustainable water management practices to address climate-related water scarcity.",
      icon: WaterDrop,
      details: [
        "Rainwater harvesting systems",
        "Drip irrigation implementation",
        "Water-efficient farming techniques",
        "Community water management committees",
      ],
    },
  ];

  const impactStats = [
    { number: "1M+", label: "Trees Planted", icon: Forest },
    { number: "200+", label: "Villages with Solar", icon: SolarPower },
    { number: "50K+", label: "Tons CO2 Reduced", icon: TrendingUp },
    { number: "100+", label: "Zero-Waste Villages", icon: Recycling },
  ];

  return (
    <Box sx={{ bgcolor: "#fff", color: theme.palette.text.primary }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: 2,
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.8rem" },
              lineHeight: 1.1,
              mb: { xs: 2, md: 3 },
              textShadow: "0 2px 8px rgb(252, 251, 253)",
            }}
          >
            Climate Action Initiatives
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.9,
              lineHeight: 1.6,
              fontWeight: 500,
              mb: { xs: 3, md: 5 },
              textShadow: "0 1px 5px rgb(249, 245, 245)",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
            }}
          >
            Empowering communities to combat climate change through sustainable
            practices, renewable energy, and environmental conservation.
          </Typography>
        </Container>
      </Box>

      {/* Impact Statistics */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: theme.palette.grey[100],
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              letterSpacing: "0.05em",
              color: theme.palette.text.primary,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Our Climate Impact
          </Typography>
          <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
            {impactStats.map((stat, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                className="fade-in"
                style={{
                  opacity: visibleIndexes.includes(index) ? 1 : 0,
                  transform: visibleIndexes.includes(index)
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all ${fadeInDuration}ms ease-out ${
                    index * 150
                  }ms`,
                }}
              >
                <Card
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    boxShadow: theme.shadows[3],
                    borderRadius: 4,
                    height: "100%",
                  }}
                >
                  <stat.icon
                    sx={{
                      fontSize: { xs: 40, md: 48 },
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Initiatives Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              letterSpacing: "0.04em",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Our Climate Initiatives
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {initiatives.map((initiative, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={index}
                className="fade-in"
                style={{
                  opacity: visibleIndexes.includes(index + 4) ? 1 : 0,
                  transform: visibleIndexes.includes(index + 4)
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all ${fadeInDuration}ms ease-out ${
                    (index + 4) * 150
                  }ms`,
                }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    textAlign: "center",
                    boxShadow: theme.shadows[4],
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[10],
                    },
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`https://source.unsplash.com/400x200/?${initiative.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      alt={initiative.title}
                      sx={{
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: "50%",
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: theme.shadows[4],
                      }}
                    >
                      <initiative.icon
                        sx={{
                          color: "white",
                          fontSize: { xs: "1.5rem", md: "1.8rem" },
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent
                    sx={{ flexGrow: 1, px: { xs: 2, md: 3 }, pt: 3, pb: 4 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      }}
                    >
                      {initiative.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        minHeight: 48,
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                    >
                      {initiative.description}
                    </Typography>
                    <List
                      dense
                      sx={{ pt: 0, maxHeight: 140, overflowY: "auto" }}
                    >
                      {initiative.details.map((detail, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: theme.palette.primary.main,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={detail}
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: {
                                  xs: "0.75rem",
                                  sm: "0.8rem",
                                  md: "0.875rem",
                                },
                              },
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

      {/* Community Engagement Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: 2,
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, md: 5 },
              letterSpacing: "0.04em",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Community Engagement
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 3, md: 5 },
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
            }}
          >
            We believe that lasting climate action comes from community
            involvement and local leadership. Our programs empower communities
            to take ownership of their environmental future.
          </Typography>
          <List
            sx={{
              display: "inline-block",
              textAlign: "left",
              maxWidth: 500,
              width: "100%",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <ListItem sx={{ px: 0, mb: 2 }}>
              <ListItemIcon>
                <Groups
                  sx={{
                    color: "#90caf9",
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Community Climate Committees"
                secondary="Establishing local groups to lead climate initiatives"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  },
                  "& .MuiListItemText-secondary": {
                    color: "rgba(255,255,255,0.7)",
                    fontSize: { xs: "0.8rem", sm: "0.875rem" },
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, mb: 2 }}>
              <ListItemIcon>
                <School
                  sx={{
                    color: "#90caf9",
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Environmental Education"
                secondary="Training programs for sustainable practices"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  },
                  "& .MuiListItemText-secondary": {
                    color: "rgba(255,255,255,0.7)",
                    fontSize: { xs: "0.8rem", sm: "0.875rem" },
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon>
                <Nature
                  sx={{
                    color: "#90caf9",
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Green Livelihoods"
                secondary="Creating economic opportunities through environmental conservation"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  },
                  "& .MuiListItemText-secondary": {
                    color: "rgba(255,255,255,0.7)",
                    fontSize: { xs: "0.8rem", sm: "0.875rem" },
                  },
                }}
              />
            </ListItem>
          </List>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: "#fff",
          textAlign: "center",
          px: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "600px", md: "700px" },
              mx: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
                letterSpacing: "0.04em",
                lineHeight: 1.2,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              }}
            >
              Join Our Climate Action
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 4, md: 6 },
                opacity: 0.85,
                fontWeight: 500,
                lineHeight: 1.6,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                px: { xs: 2, sm: 0 },
              }}
            >
              Every action counts in the fight against climate change. Get
              involved in our initiatives and help create a sustainable future
              for generations to come.
            </Typography>
            <Chip
              label="Contact us to learn more about volunteering opportunities"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.15rem" },
                padding: { xs: "10px 20px", md: "14px 28px" },
                borderRadius: 6,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ClimateAction;
