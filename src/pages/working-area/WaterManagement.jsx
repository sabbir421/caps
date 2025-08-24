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
  WaterDrop,
  TrendingUp,
  Nature,
  Engineering,
  Groups,
  Science,
  Business,
} from "@mui/icons-material";

const WaterManagement = () => {
  const theme = useTheme();

  const programs = [
    {
      title: "Rainwater Harvesting",
      description:
        "Implementing comprehensive rainwater collection and storage systems for communities.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfcpmh6fcUdZhqf5l7fgYy5Cl8fqQUDvLZA&s",
      icon: WaterDrop,
      details: [
        "Roof water collection systems",
        "Underground storage tanks",
        "Community water reservoirs",
        "Water quality monitoring",
      ],
    },
    {
      title: "Irrigation Systems",
      description:
        "Modern irrigation techniques to optimize water usage in agriculture.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCrzhs2XosmGANrRr4zKb625Oo_SfFXQODg&s",
      icon: Engineering,
      details: [
        "Drip irrigation networks",
        "Sprinkler systems",
        "Smart irrigation controls",
        "Water-efficient farming",
      ],
    },
    {
      title: "Water Conservation",
      description:
        "Community education and practices for sustainable water management.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQNzjJVY52zrbCnTXRkSXMjdTU3asq9iIGw&s",
      icon: Nature,
      details: [
        "Water-saving technologies",
        "Community awareness programs",
        "Water recycling systems",
        "Conservation policies",
      ],
    },
    {
      title: "Water Quality",
      description:
        "Ensuring access to clean and safe drinking water for all communities.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WioScUVsl3KXgPw5-01czsdIDNTEscLKJA&s",
      icon: Science,
      details: [
        "Water purification systems",
        "Quality testing facilities",
        "Treatment plant maintenance",
        "Health monitoring programs",
      ],
    },
  ];

  const impactStats = [
    { number: "100+", label: "Water Projects", icon: WaterDrop },
    { number: "50K+", label: "People Served", icon: Groups },
    { number: "60%", label: "Water Saved", icon: TrendingUp },
    { number: "200+", label: "Systems Installed", icon: Engineering },
  ];

  const services = [
    {
      title: "Community Training",
      icon: Groups,
      description:
        "Workshops and hands-on training for local water management and conservation.",
    },
    {
      title: "Water Audits",
      icon: Engineering,
      description:
        "Professional assessment of community water needs and efficiency.",
    },
    {
      title: "Sustainable Outreach",
      icon: Nature,
      description:
        "Campaigns to promote water conservation and sustainable usage.",
    },
    {
      title: "Maintenance Support",
      icon: Science,
      description:
        "Ongoing technical support for water systems and infrastructure.",
    },
    {
      title: "Clean Water Financing",
      icon: Business,
      description: "Microloans and financial support for water projects.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundImage: `url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600")`,
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
            Empowering Rural Communities Through Water Management
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "white",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
            }}
          >
            We bring sustainable water solutions to remote villages, ensuring
            clean water access, efficient usage, and conservation for all.
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
            Our Water Management Programs
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {programs.map(
              ({ title, description, icon: Icon, image, details }, i) => (
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
                        {details.map((detail, idx) => (
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
          py: { xs: 6, md: 8 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: { xs: "100%", sm: "600px", md: "700px" },
              mx: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              }}
            >
              Support Water Management
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 3, md: 4 },
                opacity: 0.9,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                px: { xs: 2, sm: 0 },
              }}
            >
              Clean water is essential for life. Help us provide sustainable
              water solutions to rural communities and ensure water security for
              future generations.
            </Typography>
            <Chip
              label="Partner with us for water management projects"
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
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WaterManagement;
