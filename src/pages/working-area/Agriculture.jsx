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
          py: { xs: 10, md: 14 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "white",
            }}
          >
            Agricultural Development
          </Typography>
          <Typography
            variant="h6"
            sx={{ opacity: 0.95, lineHeight: 1.6, textAlign: "justify" }}
          >
            Empowering rural farmers with sustainable practices, modern tools,
            and improved market access to combat climate challenges.
          </Typography>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Container>
          <Typography variant="h4" align="center" fontWeight={700} mb={6}>
            Agricultural Impact
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {impactStats.map((stat, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box
                  sx={{
                    p: 3,
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
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      mx: "auto",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <stat.icon />
                  </Box>
                  <Typography variant="h5" fontWeight={700} color="primary">
                    {stat.number}
                  </Typography>
                  <Typography variant="body1">{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Program Cards */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" fontWeight={700} mb={6}>
            Our Agricultural Programs
          </Typography>
          <Grid container spacing={4} justifyContent="center">
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
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box
                        sx={{
                          mr: 2,
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <program.icon />
                      </Box>
                      <Typography variant="h6" fontWeight={600}>
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" mb={2}>
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
                          <ListItemText primary={detail} />
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
