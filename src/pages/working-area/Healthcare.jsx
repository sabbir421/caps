import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  LocalHospital,
  MedicalServices,
  Groups,
  TrendingUp,
  Vaccines,
  VolunteerActivism,
  Science,
  Favorite,
  HealthAndSafety,
  Emergency,
  Accessibility,
  PhoneAndroid,
  LocalPharmacy,
  DirectionsBus,
} from "@mui/icons-material";

const Healthcare = () => {
  const theme = useTheme();

  const impactStats = [
    { number: "50K+", label: "Patients Served", icon: LocalHospital },
    { number: "25+", label: "Health Centers", icon: MedicalServices },
    { number: "100+", label: "Health Workers", icon: Groups },
    { number: "90%", label: "Vaccination Rate", icon: TrendingUp },
  ];

  const programs = [
    {
      title: "Mobile Health Clinics",
      description: "Bringing healthcare to remote areas",
      icon: MedicalServices,
      image:
        "https://media.istockphoto.com/id/1278010531/vector/van-for-delivery-drugs-and-smartphone.jpg?s=612x612&w=0&k=20&c=gBkUEFULdrnAgHG3tZ0BmkQg3zA0vmAR1rtqvtSNyxg=",
      details: ["Basic check-ups", "Maternal care", "Vaccinations"],
    },
    {
      title: "Telemedicine",
      description: "Remote consultations via video call",
      icon: Science,
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      details: ["Doctor consultations", "Follow-ups", "Prescriptions"],
    },
    {
      title: "Vaccination Drives",
      description: "Mass immunization for all ages",
      icon: Vaccines,
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      details: ["Children", "Elderly", "Flu & COVID-19"],
    },
    {
      title: "Digital Health Education",
      description: "Spreading awareness through mobile and web platforms",
      icon: PhoneAndroid,
      image:
        "https://images.squarespace-cdn.com/content/v1/52fda22ee4b072f887f443c3/1652830578194-16PEH21WHM729EEW45YP/CES+%2B+Digital+Health+%284%29.png",
      details: ["Health tips", "Disease prevention", "Video tutorials"],
    },
    {
      title: "Rural Pharmacy Outreach",
      description: "Affordable medicines and consultations",
      icon: LocalPharmacy,
      image:
        "https://img.freepik.com/free-photo/people-preparing-charity-foodbank-poor-people_23-2149012244.jpg",
      details: ["Essential drugs", "Community pharmacists", "Health kits"],
    },
    {
      title: "Medical Transport Access",
      description: "Ambulance and patient pickup for rural emergencies",
      icon: DirectionsBus,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/050/966/886/small/inside-of-an-ambulance-showing-medical-equipment-and-stretcher-for-transporting-patients-photo.jpg",
      details: [
        "Emergency pickup",
        "Scheduled visits",
        "Transport for the elderly",
      ],
    },
  ];

  const services = [
    {
      title: "Emergency Care",
      icon: Emergency,
      description: "First aid and urgent response services",
    },
    {
      title: "Maternal Health",
      icon: Favorite,
      description: "Pre and postnatal care for mothers",
    },
    {
      title: "Child Nutrition",
      icon: VolunteerActivism,
      description: "Nutritional programs for rural children",
    },
    {
      title: "Disability Support",
      icon: Accessibility,
      description: "Care and tools for people with disabilities",
    },
    {
      title: "Health Awareness",
      icon: HealthAndSafety,
      description: "Workshops and campaigns",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundImage: `url("https://img.freepik.com/free-photo/blur-hospital_1203-7957.jpg")`,
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
            Empowering Rural Communities Through Healthcare
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
            We bring quality medical services, awareness, and support to remote
            villages, ensuring everyone has access to healthcare regardless of
            location.
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
            Our Healthcare Programs
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
    </Box>
  );
};

export default Healthcare;
