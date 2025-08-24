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
  useMediaQuery,
} from "@mui/material";
import {
  Nature,
  TrendingUp,
  People,
  School,
  Business,
  Engineering,
  Groups,
} from "@mui/icons-material";

const CapacityBuilding = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const programs = [
    {
      title: "Leadership Development",
      description:
        "Building strong leadership skills among community members and local organizations.",
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQHVGmxdXZgKfQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1709838574597?e=2147483647&v=beta&t=Pug16J1d8Xg1Hs8zS4ZtW49bL73mlNbKLO7KDpCwGDs",
      icon: People,
      details: [
        "Leadership training workshops",
        "Community organizer development",
        "Project management skills",
        "Strategic planning training",
      ],
    },
    {
      title: "Technical Skills Training",
      description:
        "Providing technical expertise and skills development in various sectors.",
      image:
        "https://www.talentlms.com/blog/wp-content/uploads/2024/01/TLMS_20240104_1200x628-1.png",
      icon: Engineering,
      details: [
        "Agricultural technology training",
        "Renewable energy installation",
        "Water management systems",
        "Digital technology skills",
      ],
    },
    {
      title: "Organizational Development",
      description:
        "Strengthening local organizations and community groups for sustainable impact.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaaUL3Oyl18I-4WbfLfk3LqTD3RXcTX6wQg&s",
      icon: Nature,
      details: [
        "Organizational governance",
        "Financial management training",
        "Monitoring and evaluation",
        "Resource mobilization",
      ],
    },
    {
      title: "Knowledge Sharing",
      description:
        "Facilitating knowledge exchange and learning among communities and partners.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9te3Qq9kyOzkPtGmUybWI3ZPPQ_S_HQcpZg&s",
      icon: School,
      details: [
        "Best practice sharing",
        "Peer learning networks",
        "Training of trainers",
        "Knowledge documentation",
      ],
    },
  ];

  const impactStats = [
    { number: "5K+", label: "People Trained", icon: School },
    { number: "200+", label: "Organizations Supported", icon: Groups },
    { number: "50+", label: "Training Programs", icon: Business },
    { number: "90%", label: "Success Rate", icon: TrendingUp },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: { xs: 6, md: 10 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            Capacity Building
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 3, md: 4 },
              opacity: 0.9,
              lineHeight: 1.6,
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "100%", sm: "600px", md: "700px" },
              mx: "auto",
              px: { xs: 2, sm: 0 },
            }}
          >
            Empowering communities through comprehensive training, skill
            development, and organizational strengthening for sustainable
            development.
          </Typography>
          <Box
            component="img"
            src="https://t3.ftcdn.net/jpg/02/01/01/22/360_F_201012244_a8uvbhikzy2KSYh6KoBJ7y24Ps7kPzSq.jpg"
            alt="Capacity Building"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "500px", md: "600px" },
              borderRadius: { xs: 2, md: 4 },
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
              mx: "auto",
              display: "block",
              height: "auto",
            }}
          />
        </Container>
      </Box>

      {/* Impact Statistics */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Capacity Building Impact
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {impactStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: { xs: 2, md: 3 },
                    borderRadius: 3,
                    backgroundColor: "white",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: 60, md: 70 },
                      height: { xs: 60, md: 70 },
                      borderRadius: "50%",
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      mb: { xs: 1.5, md: 2 },
                    }}
                  >
                    <stat.icon sx={{ fontSize: { xs: 28, md: 34 } }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
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

      {/* Programs */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Our Capacity Building Programs
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={6} lg={5} key={index}>
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
                    height={isMobile ? "180" : "200"}
                    image={program.image}
                    alt={program.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mb: { xs: 1.5, md: 2 },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: { xs: 45, md: 50 },
                          height: { xs: 45, md: 50 },
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          mb: 1,
                        }}
                      >
                        <program.icon sx={{ fontSize: { xs: 20, md: 24 } }} />
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.3rem",
                            md: "1.4rem",
                          },
                        }}
                      >
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 2, md: 3 },
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                        textAlign: "justify",
                      }}
                    >
                      {program.description}
                    </Typography>
                    <List dense sx={{ textAlign: "left" }}>
                      {program.details.map((detail, detailIndex) => (
                        <ListItem key={detailIndex} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: { xs: 25, md: 30 } }}>
                            <Box
                              sx={{
                                width: { xs: 5, md: 6 },
                                height: { xs: 5, md: 6 },
                                borderRadius: "50%",
                                backgroundColor: theme.palette.primary.main,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={detail}
                            primaryTypographyProps={{
                              fontSize: {
                                xs: "0.8rem",
                                sm: "0.85rem",
                                md: "0.9rem",
                              },
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
          py: { xs: 6, md: 8 },
          bgcolor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Support Capacity Building
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: { xs: 3, md: 4 },
              opacity: 0.9,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "100%", sm: "500px", md: "600px" },
              mx: "auto",
              px: { xs: 2, sm: 0 },
            }}
          >
            Building capacity is building the future. Help us empower
            communities.
          </Typography>
          <Chip
            label="Partner with us for capacity building"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              padding: { xs: "8px 16px", md: "12px 24px" },
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

export default CapacityBuilding;
