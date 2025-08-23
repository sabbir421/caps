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
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.8rem", md: "3.8rem" },
              lineHeight: 1.1,
              mb: 3,
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
              mb: 5,
              textShadow: "0 1px 5px rgb(249, 245, 245)",
            }}
          >
            Empowering communities to combat climate change through sustainable
            practices, renewable energy, and environmental conservation.
          </Typography>
        </Container>
      </Box>

      {/* Impact Statistics */}
      <Box
        sx={{ py: 8, bgcolor: theme.palette.grey[100], textAlign: "center" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 6,
              letterSpacing: "0.05em",
              color: theme.palette.text.primary,
            }}
          >
            Our Climate Impact
          </Typography>
          <Grid container spacing={5} justifyContent="center">
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
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    bgcolor: "white",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    cursor: "default",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px) scale(1.05)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 68,
                      height: 68,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    <stat.icon sx={{ fontSize: 36 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 1,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                      letterSpacing: "0.03em",
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

      {/* Key Initiatives with fade-in */}
      <Box sx={{ py: 10, px: 2, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 8,
              letterSpacing: "0.05em",
              color: theme.palette.text.primary,
            }}
          >
            Key Climate Initiatives
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {initiatives.map((initiative, index) => (
              <Grid
                item
                xs={12}
                sm={10}
                md={6}
                key={index}
                className="fade-in"
                style={{
                  opacity: visibleIndexes.includes(index + impactStats.length)
                    ? 1
                    : 0,
                  transform: visibleIndexes.includes(index + impactStats.length)
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all ${fadeInDuration}ms ease-out ${
                    (index + impactStats.length) * 150
                  }ms`,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 12px 28px rgba(0,0,0,0.06)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.04)",
                      boxShadow: "0 20px 48px rgba(0,0,0,0.15)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    px: 3,
                    py: 4,
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      mx: "auto",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.18)",
                    }}
                  >
                    <initiative.icon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      mb: 2,
                    }}
                  >
                    {initiative.title}
                  </Typography>
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
                  <List
                    dense
                    disablePadding
                    sx={{ textAlign: "left", maxWidth: 420, mx: "auto" }}
                  >
                    {initiative.details.map((detail, detailIndex) => (
                      <ListItem key={detailIndex} sx={{ px: 0, mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: theme.palette.primary.main,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{
                            fontSize: "0.95rem",
                            color: theme.palette.text.secondary,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Community Engagement with Background Image */}
      <Box
        sx={{
          py: 10,
          px: 2,
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
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
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, mb: 5, letterSpacing: "0.04em" }}
          >
            Community Engagement
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              textAlign: "justify",
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
                <Groups sx={{ color: "#90caf9", fontSize: 28 }} />
              </ListItemIcon>
              <ListItemText
                primary="Community Climate Committees"
                secondary="Establishing local groups to lead climate initiatives"
                primaryTypographyProps={{ fontWeight: 600, fontSize: "1rem" }}
                secondaryTypographyProps={{ color: "rgba(255,255,255,0.7)" }}
              />
            </ListItem>
            <ListItem sx={{ px: 0, mb: 2 }}>
              <ListItemIcon>
                <School sx={{ color: "#90caf9", fontSize: 28 }} />
              </ListItemIcon>
              <ListItemText
                primary="Environmental Education"
                secondary="Training programs for sustainable practices"
                primaryTypographyProps={{ fontWeight: 600, fontSize: "1rem" }}
                secondaryTypographyProps={{ color: "rgba(255,255,255,0.7)" }}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon>
                <Nature sx={{ color: "#90caf9", fontSize: 28 }} />
              </ListItemIcon>
              <ListItemText
                primary="Green Livelihoods"
                secondary="Creating economic opportunities through environmental conservation"
                primaryTypographyProps={{ fontWeight: 600, fontSize: "1rem" }}
                secondaryTypographyProps={{ color: "rgba(255,255,255,0.7)" }}
              />
            </ListItem>
          </List>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 10, bgcolor: "#fff", textAlign: "center", px: 2 }}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 4,
              letterSpacing: "0.04em",
              lineHeight: 1.2,
            }}
          >
            Join Our Climate Action
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              opacity: 0.85,
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Every action counts in the fight against climate change. Get
            involved in our initiatives and help create a sustainable future for
            generations to come.
          </Typography>
          <Chip
            label="Contact us to learn more about volunteering opportunities"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              fontSize: "1.15rem",
              padding: "14px 28px",
              borderRadius: 6,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default ClimateAction;
