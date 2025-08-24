import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  School,
  Computer,
  Book,
  Groups,
  TrendingUp,
  Psychology,
  Business,
  Science,
} from "@mui/icons-material";

const Education = () => {
  const theme = useTheme();

  const programs = [
    {
      title: "Digital Literacy Programs",
      description:
        "Bridging the digital divide by providing computer skills and internet access to rural communities.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      icon: Computer,
      details: [
        "Computer training for all age groups",
        "Internet connectivity in remote areas",
        "Digital skills for employment",
        "Online learning platforms access",
      ],
    },
    {
      title: "Environmental Education",
      description:
        "Teaching sustainable practices and environmental awareness to create eco-conscious communities.",
      image:
        "https://media.istockphoto.com/id/1253507986/photo/elementary-school-classroom-enthusiastic-teacher-holding-tablet-computer-explains-to-a.jpg?s=612x612&w=0&k=20&c=Zo9NUR0IIhF416uh6jcXBv-CeePlTXraqZ75o0bqz9M=",
      icon: Science,
      details: [
        "Climate change awareness programs",
        "Sustainable living workshops",
        "Nature conservation education",
        "Green school initiatives",
      ],
    },
    {
      title: "Vocational Training",
      description:
        "Providing practical skills training to enhance employability and economic opportunities.",
      image:
        "https://media.istockphoto.com/id/942164000/photo/group-of-young-people-in-technical-vocational-training-with-teacher.jpg?s=612x612&w=0&k=20&c=Pi2UgPyqiijHDRt9m2th9Bqm5SCCwwOF6zg2NpAZnHI=",
      icon: Business,
      details: [
        "Agricultural technology training",
        "Handicraft and artisan skills",
        "Small business development",
        "Technical skills workshops",
      ],
    },
    {
      title: "Women Empowerment",
      description:
        "Specialized education programs to empower women and girls in rural communities.",
      image:
        "https://img.freepik.com/free-photo/group-best-friends-holding-hands_23-2148440552.jpg?semt=ais_hybrid&w=740",
      icon: Psychology,
      details: [
        "Leadership development programs",
        "Financial literacy training",
        "Health and nutrition education",
        "Entrepreneurship support",
      ],
    },
  ];

  const impactStats = [
    { number: "10K+", label: "Students Enrolled", icon: School },
    { number: "50+", label: "Schools Supported", icon: Book },
    { number: "200+", label: "Teachers Trained", icon: Groups },
    { number: "95%", label: "Graduation Rate", icon: TrendingUp },
  ];

  const facilities = [
    {
      title: "Modern Classrooms",
      description:
        "Well-equipped classrooms with modern teaching aids and comfortable learning environments.",
      image:
        "https://media.istockphoto.com/id/1348370630/photo/kindergarten-classroom-with-tables-multi-colored-chairs-and-walled-garden.jpg?s=612x612&w=0&k=20&c=CcFHCobAhWxtOdvicfmsfZYgOz-wZ_lBxVlnNcP2OPo=",
    },
    {
      title: "Computer Labs",
      description:
        "Fully equipped computer laboratories with internet connectivity and latest software.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    },
    {
      title: "Library Resources",
      description:
        "Comprehensive libraries with books, digital resources, and study spaces.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    },
    {
      title: "Sports Facilities",
      description:
        "Playgrounds and sports equipment to promote physical development and teamwork.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Box>
      {/* Non-Profit Intro Section with background image */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundImage: `url("https://www.eschoolnews.com/files/2023/02/edtech-high-quality-learning-engaging.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(55, 52, 52, 0.5)",
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
            Empowering Rural Communities Through Education
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              mb: { xs: 3, md: 4 },
              color: "white",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
            }}
          >
            Committed to creating lasting social impact by providing accessible
            education, digital literacy, vocational skills, and empowerment
            programs tailored for rural areas.
          </Typography>
        </Container>
      </Box>

      {/* Impact Stats */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {impactStats.map(({ number, label, icon: Icon }, i) => (
              <Grid key={i} item xs={6} sm={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: { xs: 2, md: 3 },
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: theme.shadows[1],
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: { xs: 32, md: 40 },
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                    }}
                  >
                    {number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" },
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              color: theme.palette.text.primary,
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Our Educational Programs
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {programs.map((program, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[8],
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
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                        }}
                      >
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
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

      {/* Facilities Section */}
      <Box
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.grey[50] }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
              color: theme.palette.text.primary,
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            }}
          >
            Our Facilities
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {facilities.map((facility, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={facility.image}
                    alt={facility.title}
                  />
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      }}
                    >
                      {facility.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                    >
                      {facility.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Community Involvement Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: { xs: 2, md: 3 },
                  color: theme.palette.text.primary,
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                }}
              >
                Community Involvement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 3, md: 4 },
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                  textAlign: "center",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Education is a community effort. We engage parents, local
                leaders, and businesses to build sustainable educational
                ecosystems.
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Groups
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Parent-Teacher Associations"
                    secondary="Active involvement of parents in school management"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <School
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Learning Centers"
                    secondary="Spaces for adult education and skill development"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Business
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Local Business Partnerships"
                    secondary="Connecting education with employment opportunities"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&h=450&fit=crop"
                alt="Community Involvement"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: theme.shadows[3],
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: theme.palette.primary.main,
          color: "white",
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
              sx={{
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
              }}
            >
              Support Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 3, md: 4 },
                opacity: 0.9,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                px: { xs: 2, sm: 0 },
              }}
            >
              Help us provide quality education and opportunities to rural
              communities. Your contribution can make a big difference.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: { xs: 4, sm: 5, md: 6 },
                py: { xs: 1.2, sm: 1.5, md: 1.8 },
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
              color="secondary"
            >
              Donate Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Education;
