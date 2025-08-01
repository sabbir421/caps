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
      {/* Non-Profit Intro Section */}
      
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
  <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
    <Typography
      variant="h4"
      sx={{ fontWeight: 700, mb: 3,color:"white" }}
    >
      Empowering Rural Communities Through Education
    </Typography>
    <Typography
      variant="body1"
      sx={{ lineHeight: 1.7, mb: 4,color:"white" }}
    >
      Committed to creating lasting social impact by providing accessible
      education, digital literacy, vocational skills, and empowerment
      programs tailored for rural areas.
    </Typography>
  </Container>
</Box>


      {/* Impact Stats */}
      <Box sx={{ py: 6, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {impactStats.map(({ number, label, icon: Icon }, i) => (
              <Grid key={i} item xs={6} sm={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
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
                      fontSize: 40,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                  >
                    {number}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Educational Programs */}
      {/* Educational Programs */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}
          >
            Our Programs
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {programs.map(
              ({ title, description, icon: Icon, details, image }, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      boxShadow: theme.shadows[4],
                      borderRadius: 4,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: theme.shadows[12],
                        transform: "translateY(-10px)",
                      },
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="280"
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
                          width: 48,
                          height: 48,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: theme.shadows[4],
                        }}
                      >
                        <Icon sx={{ color: "white", fontSize: 28 }} />
                      </Box>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, px: 3, pt: 3, pb: 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: theme.palette.text.primary,
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
                              primaryTypographyProps={{ fontSize: "0.95rem" }}
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

      {/* Facilities */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}
          >
            Educational Facilities
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {facilities.map(({ title, description, image }, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    boxShadow: theme.shadows[2],
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: theme.shadows[7],
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={image}
                    alt={title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Community Involvement */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.text.primary,
                  textAlign: "center",
                }}
              >
                Community Involvement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                Education is a community effort. We engage parents, local
                leaders, and businesses to build sustainable educational
                ecosystems.
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Groups color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Parent-Teacher Associations"
                    secondary="Active involvement of parents in school management"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <School color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Learning Centers"
                    secondary="Spaces for adult education and skill development"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Business color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Local Business Partnerships"
                    secondary="Connecting education with employment opportunities"
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
          py: 8,
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Support Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Help us provide quality education and opportunities to rural
            communities. Your contribution can make a big difference.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: 3 }}
            color="secondary"
          >
            Donate Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Education;
