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
  useTheme,
} from "@mui/material";

// Icons
import AgricultureIcon from "@mui/icons-material/Agriculture";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BusinessIcon from "@mui/icons-material/Business";
import GroupsIcon from "@mui/icons-material/Groups";
import ScienceIcon from "@mui/icons-material/Science";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NatureIcon from "@mui/icons-material/Nature";

const AgriculturePage = () => {
  const theme = useTheme();

  const programs = [
    {
      title: "Sustainable Farming",
      description:
        "Promoting eco-friendly agricultural practices that protect the environment while improving yields.",
      image:
        "https://media.istockphoto.com/id/1440572041/photo/workers-working-at-an-organic-farm-cultivating-green-vegetables.jpg?s=612x612&w=0&k=20&c=W_n6DAHVuogdTC6h4JCpT3_gL44yPXSbzf67sYRbcjA=",
      icon: AgricultureIcon,
      details: [
        "Organic farming techniques",
        "Crop rotation systems",
        "Natural pest control methods",
        "Soil conservation practices",
      ],
    },
    {
      title: "Water Management",
      description:
        "Implementing efficient irrigation systems and water conservation techniques.",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-biofuel-illustration_23-2149407716.jpg?semt=ais_hybrid&w=740",
      icon: WaterDropIcon,
      details: [
        "Drip irrigation systems",
        "Rainwater harvesting",
        "Water-efficient farming",
        "Aquaculture integration",
      ],
    },
    {
      title: "Market Access",
      description:
        "Connecting farmers with markets and providing value chain support.",
      image:
        "https://pac.com.pk/wp-content/uploads/2021/12/our-project-heading2.png",
      icon: BusinessIcon,
      details: [
        "Direct market linkages",
        "Fair trade partnerships",
        "Processing and packaging",
        "Transportation support",
      ],
    },
    {
      title: "Technology Adoption",
      description:
        "Introducing modern agricultural technologies to improve productivity.",
      image:
        "https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908084.jpg?semt=ais_hybrid&w=740",
      icon: ScienceIcon,
      details: [
        "Precision farming tools",
        "Mobile app solutions",
        "Weather forecasting",
        "Crop monitoring systems",
      ],
    },
    {
      title: "Climate Action in Agriculture",
      description:
        "Tackling climate change through sustainable agriculture and green innovations.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/039/341/571/small/ai-generated-planet-turning-to-drought-fields-concept-illustrating-climate-change-affects-agriculture-and-earth-photo.jpg",
      icon: NatureIcon,
      details: [
        "Carbon-smart farming",
        "Agroforestry initiatives",
        "Climate-resilient crops",
        "Emission reduction strategies",
      ],
    },
  ];

  const impactStats = [
    { number: "5K+", label: "Farmers Supported", icon: AgricultureIcon },
    { number: "100+", label: "Villages Covered", icon: GroupsIcon },
    { number: "50%", label: "Yield Increase", icon: TrendingUpIcon },
    { number: "200+", label: "Market Partners", icon: LocalShippingIcon },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?semt=ais_hybrid&w=740')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          py: { xs: 8, md: 14 },
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
                lg: "3.5rem",
              },
              color: "white",
            }}
          >
            Agricultural Development
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.95,
              lineHeight: 1.6,
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
              px: { xs: 2, sm: 0 },
            }}
          >
            Empowering rural farmers with sustainable practices, modern tools,
            and improved market access to combat climate challenges.
          </Typography>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Agricultural Impact
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {impactStats.map((stat, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      width: { xs: 48, md: 56 },
                      height: { xs: 48, md: 56 },
                      borderRadius: "50%",
                      mx: "auto",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <stat.icon
                      sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    color="primary"
                    sx={{
                      fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" },
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

      {/* Program Cards */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Our Agricultural Programs
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {programs.map((program, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Card
                  sx={{
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={program.image}
                    alt={program.title}
                  />
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          mr: 2,
                          width: { xs: 32, md: 40 },
                          height: { xs: 32, md: 40 },
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <program.icon
                          sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                        }}
                      >
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      mb={2}
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                    >
                      {program.description}
                    </Typography>
                    <List dense>
                      {program.details.map((detail, d) => (
                        <ListItem key={d} sx={{ px: 0 }}>
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
    </Box>
  );
};

export default AgriculturePage;
