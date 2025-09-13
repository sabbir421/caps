import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Stack,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Fade,
  Zoom,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BookIcon from "@mui/icons-material/Book";
import HandymanIcon from "@mui/icons-material/Handyman";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScienceIcon from "@mui/icons-material/Science";
import GamesIcon from "@mui/icons-material/Games";
import LandscapeIcon from "@mui/icons-material/Landscape";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FilterListIcon from "@mui/icons-material/FilterList";

const ClimateSmartCommunityEducation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const galleryData = [
    {
      id: 1,
      title: "Community Learning Center",
      category: "infrastructure",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern learning environment for climate education",
      date: "2024",
    },
    {
      id: 2,
      title: "Students in Action",
      category: "education",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Students participating in climate awareness activities",
      date: "2024",
    },
    {
      id: 3,
      title: "Environmental Workshop",
      category: "workshop",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Hands-on learning about environmental sustainability",
      date: "2024",
    },
    {
      id: 4,
      title: "Community Garden",
      category: "sustainability",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sustainable agriculture practices in action",
      date: "2024",
    },
    {
      id: 5,
      title: "Teacher Training",
      category: "training",
      image:
        "https://images.unsplash.com/photo-1523240798034-6a5c0eaa0f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Educating educators about climate-smart teaching",
      date: "2024",
    },
    {
      id: 6,
      title: "Youth Engagement",
      category: "education",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Empowering young minds for climate action",
      date: "2024",
    },
    {
      id: 7,
      title: "Research Activities",
      category: "research",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Scientific research on climate adaptation",
      date: "2024",
    },
    {
      id: 8,
      title: "Community Meeting",
      category: "community",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Community discussions on climate resilience",
      date: "2024",
    },
  ];

  const categories = [
    { key: "all", label: "All Photos", count: galleryData.length },
    {
      key: "education",
      label: "Education",
      count: galleryData.filter((item) => item.category === "education").length,
    },
    {
      key: "infrastructure",
      label: "Infrastructure",
      count: galleryData.filter((item) => item.category === "infrastructure")
        .length,
    },
    {
      key: "workshop",
      label: "Workshops",
      count: galleryData.filter((item) => item.category === "workshop").length,
    },
    {
      key: "sustainability",
      label: "Sustainability",
      count: galleryData.filter((item) => item.category === "sustainability")
        .length,
    },
    {
      key: "training",
      label: "Training",
      count: galleryData.filter((item) => item.category === "training").length,
    },
    {
      key: "research",
      label: "Research",
      count: galleryData.filter((item) => item.category === "research").length,
    },
    {
      key: "community",
      label: "Community",
      count: galleryData.filter((item) => item.category === "community").length,
    },
  ];

  const filteredData =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const displayedData = showAll ? filteredData : filteredData.slice(0, 6);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "grey.50" }}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              }}
            >
              Climate Smart Community Education
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                maxWidth: { xs: "100%", sm: "800px", md: "900px" },
                mx: "auto",
                px: { xs: 2, sm: 0 },
              }}
            >
              Equipping communities with the knowledge and skills to build a
              resilient future.
            </Typography>
          </Box>

          {/* Photo Gallery Section */}
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <PhotoLibraryIcon
                  sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                />
                Photo Gallery & Archive
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Explore our journey through climate-smart education initiatives
              </Typography>
            </Box>

            {/* Category Filter */}
            <Box sx={{ mb: 4 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {categories.map((category) => (
                  <Chip
                    key={category.key}
                    label={`${category.label} (${category.count})`}
                    onClick={() => setSelectedCategory(category.key)}
                    variant={
                      selectedCategory === category.key ? "filled" : "outlined"
                    }
                    color={
                      selectedCategory === category.key ? "primary" : "default"
                    }
                    sx={{
                      mb: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 2,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Gallery Grid */}
            <Grid container spacing={3}>
              {displayedData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Zoom in={true} timeout={300 + index * 100}>
                    <Card
                      sx={{
                        height: "100%",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
                        },
                      }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          height="250"
                          image={item.image}
                          alt={item.title}
                          sx={{
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            bgcolor: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        >
                          {item.date}
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 2 }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                            fontWeight: 600,
                            color: "text.primary",
                            mb: 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "0.8rem", sm: "0.85rem" },
                            lineHeight: 1.4,
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Chip
                          label={item.category}
                          size="small"
                          sx={{
                            mt: 1.5,
                            textTransform: "capitalize",
                            bgcolor: "primary.light",
                            color: "primary.contrastText",
                            fontSize: "0.7rem",
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>

            {/* Show More/Less Button */}
            {filteredData.length > 6 && (
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                  variant="outlined"
                  endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  onClick={() => setShowAll(!showAll)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  {showAll
                    ? "Show Less"
                    : `Show All ${filteredData.length} Photos`}
                </Button>
              </Box>
            )}
          </Box>

          {/* Image Modal */}
          <Dialog
            open={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 3,
                overflow: "hidden",
              },
            }}
          >
            {selectedImage && (
              <>
                <DialogTitle
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pb: 1,
                  }}
                >
                  <Typography variant="h6" component="div">
                    {selectedImage.title}
                  </Typography>
                  <IconButton
                    onClick={() => setSelectedImage(null)}
                    sx={{ color: "text.secondary" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent sx={{ p: 0 }}>
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        p: 2,
                      }}
                    >
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        {selectedImage.description}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip
                          label={selectedImage.category}
                          size="small"
                          sx={{
                            textTransform: "capitalize",
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                          }}
                        />
                        <Typography variant="caption" sx={{ ml: "auto" }}>
                          {selectedImage.date}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                </DialogContent>
              </>
            )}
          </Dialog>

          <Typography
            variant="body1"
            paragraph
            sx={{
              mt: { xs: 3, md: 4 },
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            CAPS (Climate Adaptation Plan Society) believes that education is
            paramount for development, as it is a fundamental human right and a
            key driver for individual and societal progress. Education equips
            individuals with the knowledge, skills, and critical thinking
            abilities needed to participate fully in the economy and contribute
            to a more prosperous and equitable society. Therefore, CAPS wants to
            implement every project through education and prioritize education
            first.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            We establish **Community Learning Centres (CLCs)** in small
            communities with a minimum of 20 and a maximum of 50 houses. As per
            our system, people from all walks of life encourage us to inaugurate
            the CLC in their small communities, as they see their children are
            falling behind in education due to climate change impacts. The
            frequent question we face is, "Why is there no CLC for our
            community? Why are our children deprived?" In this 20-50 house
            community system, children can swiftly and easily reach the centre
            within their small community, as it is much closer to their houses.
            This is crucial in the west-southern part of Asia, particularly the
            most vulnerable coastal area of Bangladesh, where heavy rainfall,
            drought, and sudden rough weather are important negative issues due
            to climate change.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            For the purpose of vulnerable coastal children's protection and
            their Education in Emergencies (EiE), we open CLC branches one after
            another in areas where we have already launched the project titled
            "Climate-smart education," which is also known as climate-resilient
            education. This involves integrating climate change adaptation and
            environmental sustainability into education systems. It aims to
            prepare learners to understand and address the impacts of climate
            change while fostering a more sustainable future. This includes
            equipping them with the knowledge, skills, and values to adapt to
            climate-related challenges and contribute to mitigation efforts.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            The "Climate-smart education" project will surely accelerate the
            resettlement process and activities of the most climate-vulnerable
            people in coastal areas. It focuses on integrating climate change
            awareness and resilience into educational systems to support
            communities being relocated due to climate change impacts. This
            approach aims to equip individuals with the knowledge, skills, and
            mindset needed to adapt to a changing environment and build
            sustainable livelihoods in new locations.
          </Typography>

          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            sx={{ mt: { xs: 4, md: 6 } }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                }}
              >
                CAPS's Principles of Climate-Smart Education
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <SchoolIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integrating Climate Change into the Curriculum"
                    secondary="Climate-smart education incorporates climate change science, its impacts, and adaptation strategies into existing subjects and creates new learning opportunities specifically focused on climate resilience."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <HandymanIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Experiential Learning"
                    secondary="This hands-on approach allows students to engage with local environmental challenges, explore indigenous knowledge, and develop solutions for their communities."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CastForEducationIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Teacher Training and Support"
                    secondary="We equip teachers with the knowledge and skills to effectively teach climate change and facilitate experiential learning activities."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <VolunteerActivismIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Climate Justice"
                    secondary="Our goal is to ensure all individuals, especially the most vulnerable to climate impacts, have access to the quality education and resources needed to adapt and thrive."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <EmojiEventsIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Building Resilience"
                    secondary="We empower individuals to cope with climate-related risks, such as extreme weather events, and build more sustainable and resilient communities in resettlement areas."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
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
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                }}
              >
                Relevance to Resettlement
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <PublicIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Understanding Climate Change Impacts"
                    secondary="Education helps resettled communities understand the reasons for their relocation and the potential climate risks in their new location."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <LightbulbIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Developing Sustainable Livelihoods"
                    secondary="Climate-smart education equips individuals with skills needed for climate-smart agriculture, water management, and other sustainable practices relevant to their new environment."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <PeopleIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fostering Community Participation"
                    secondary="Education facilitates community engagement in planning and decision-making related to resettlement and the development of climate-resilient infrastructure and livelihoods."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <BookIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Adaptation"
                    secondary="By providing knowledge and skills, education helps resettled communities adapt to new environmental conditions and build more sustainable and resilient lives."
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                      },
                      "& .MuiListItemText-secondary": {
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      },
                    }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
              }}
            >
              Examples of Climate-Smart Education in Practice
            </Typography>
            <List>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <ScienceIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Integrating climate change into existing subjects"
                  secondary="For example, teaching water conservation in a science class or discussing climate-resilient agriculture in social studies."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <GamesIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Developing climate-focused games and simulations"
                  secondary="Such as the Climate Fresco game or the Climate Game, to engage learners in climate change scenarios and decision-making."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <LandscapeIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Promoting stewardship and community engagement"
                  secondary="Through initiatives like the Bangladesh Youth Environmental Initiative (BYEI), which encourages youth to be responsible caretakers of nature."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <Diversity3Icon
                    color="primary"
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Supporting teacher training on climate change education"
                  secondary="Providing teachers with the necessary knowledge and pedagogical skills to effectively teach climate change."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartCommunityEducation;
