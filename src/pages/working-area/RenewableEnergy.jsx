import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Chip,
} from "@mui/material";
import {
  SolarPower,
  ElectricBolt,
  Nature,
  Engineering,
  Groups,
  BatteryChargingFull,
  EnergySavingsLeaf,
} from "@mui/icons-material";

const RenewableEnergy = () => {
  const theme = useTheme();

  const programs = [
    {
      title: "Solar Energy",
      description:
        "We provide cost-effective solar installations for off-grid rural homes, schools, and health centers. These installations offer clean power while reducing dependency on harmful fuels.",
      image:
        "https://www.soleosenergy.com/wp-content/uploads/2024/09/1650368737-5-environmental-benefits-of-solar-energy.jpg",
      icon: SolarPower,
      highlights: [
        "Off-grid solar systems",
        "Solar irrigation for farmers",
        "Solar battery banks",
        "Training for solar technicians",
      ],
    },
    {
      title: "Biomass Energy",
      description:
        "We support clean cooking and bioenergy initiatives using locally available biomass. This reduces deforestation and improves indoor air quality.",
      image:
        "https://img.freepik.com/free-photo/front-view-plant-growing-from-pellets_23-2148895418.jpg?semt=ais_hybrid&w=740",
      icon: Nature,
      highlights: [
        "Biogas digesters",
        "Agri-waste fuel production",
        "Clean cookstove distribution",
        "Farmer cooperative support",
      ],
    },
    {
      title: "Energy Efficiency",
      description:
        "In addition to energy access, we focus on reducing energy use through efficient appliances and conservation campaigns in communities and schools.",
      image:
        "https://img.freepik.com/premium-photo/energy-efficiency-concept-with-energy-level-chart-tabletop-energy-efficiency-graph-with-house-diagram-calculator-solar-panels-businessman-planning-use-energy_43780-8669.jpg",
      icon: Engineering,
      highlights: [
        "LED replacement programs",
        "Smart metering systems",
        "Energy audits for villages",
        "Behavioral change outreach",
      ],
    },
  ];

  const impactStats = [
    { number: "200+", label: "Solar Installations", icon: SolarPower },
    { number: "100+", label: "Communities Powered", icon: Groups },
    { number: "50K+", label: "People Served", icon: BatteryChargingFull },
    { number: "80%", label: "Energy Cost Savings", icon: EnergySavingsLeaf },
  ];

  const services = [
    {
      title: "Community Training",
      icon: Groups,
      description:
        "Workshops and hands-on training for local energy technicians and users.",
    },
    {
      title: "Energy Audits",
      icon: Engineering,
      description:
        "Professional assessment of community energy needs and efficiency.",
    },
    {
      title: "Sustainable Outreach",
      icon: Nature,
      description:
        "Campaigns to promote renewable energy adoption and conservation.",
    },
    {
      title: "Maintenance Support",
      icon: BatteryChargingFull,
      description: "Ongoing technical support for installed systems.",
    },
    {
      title: "Green Financing",
      icon: EnergySavingsLeaf,
      description:
        "Microloans and financial support for clean energy projects.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundImage: `url("https://img.freepik.com/premium-photo/energy-efficiency-concept-energy-efficiency-rating-energy-efficient-house-building-rate-label_35148-11178.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              color: "white",
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Empowering Rural Communities Through Renewable Energy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "white",
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
            }}
          >
            We bring clean, reliable, and affordable energy to remote villages,
            improving quality of life and supporting sustainable development.
          </Typography>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Our Renewable Energy Programs
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {programs.map(
              ({ title, description, icon: Icon, image, highlights }, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
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
                        height="230"
                        image={image}
                        alt={title}
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
                        <Icon
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
                        {title}
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
                        {description}
                      </Typography>
                      <List
                        dense
                        sx={{ pt: 0, maxHeight: 140, overflowY: "auto" }}
                      >
                        {highlights.map((highlight, idx) => (
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
                              primary={highlight}
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
              )
            )}
          </Grid>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Our Impact
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {impactStats.map(({ number, label, icon: Icon }, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    boxShadow: theme.shadows[3],
                    borderRadius: 4,
                  }}
                >
                  <Icon
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
                    {number}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" },
                    }}
                  >
                    {label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Community Services
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {services.map(({ title, icon: Icon, description }, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    p: { xs: 2, md: 3 },
                    height: "100%",
                    boxShadow: theme.shadows[2],
                    borderRadius: 4,
                    textAlign: "center",
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: { xs: 32, md: 36 },
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mt: 1,
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    }}
                  >
                    {description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          textAlign: "center",
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
              variant="h4"
              fontWeight={700}
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              }}
            >
              Join the Energy Revolution
            </Typography>
            <Typography
              variant="body1"
              mb={4}
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                px: { xs: 2, sm: 0 },
              }}
            >
              Help us bring light, power, and progress to every rural household.
              Your contribution fuels sustainable development and reduces global
              emissions.
            </Typography>
            <Chip
              label="Support Clean Energy Projects"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                p: { xs: 1.5, md: 2 },
                backgroundColor: theme.palette.primary.main,
                color: "white",
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

export default RenewableEnergy;
