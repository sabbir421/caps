import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
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
  Zoom,
  Fade,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
} from "@mui/material";
import {
  PhotoLibrary as PhotoLibraryIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  DateRange as DateRangeIcon,
  LocationOn as LocationOnIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Nature as NatureIcon,
  Build as BuildIcon,
  Science as ScienceIcon,
  Groups as GroupsIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);

  const galleryData = [
    {
      id: 1,
      title: "Community Learning Center",
      category: "infrastructure",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Modern learning environment for climate education with state-of-the-art facilities",
      date: "2024",
      location: "Dhaka, Bangladesh",
      tags: ["education", "infrastructure", "modern"],
    },
    {
      id: 2,
      title: "Students in Action",
      category: "education",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Students participating in climate awareness activities and environmental projects",
      date: "2024",
      location: "Chittagong, Bangladesh",
      tags: ["students", "climate", "awareness"],
    },
    {
      id: 3,
      title: "Environmental Workshop",
      category: "workshop",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Hands-on learning about environmental sustainability and climate adaptation",
      date: "2024",
      location: "Sylhet, Bangladesh",
      tags: ["workshop", "environment", "learning"],
    },
    {
      id: 4,
      title: "Community Garden",
      category: "sustainability",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Sustainable agriculture practices in action with community involvement",
      date: "2024",
      location: "Khulna, Bangladesh",
      tags: ["garden", "sustainability", "agriculture"],
    },
    {
      id: 5,
      title: "Teacher Training",
      category: "training",
      image:
        "https://images.unsplash.com/photo-1523240798034-6a5c0eaa0f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Educating educators about climate-smart teaching methodologies",
      date: "2024",
      location: "Rajshahi, Bangladesh",
      tags: ["teachers", "training", "education"],
    },
    {
      id: 6,
      title: "Youth Engagement",
      category: "education",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Empowering young minds for climate action and environmental stewardship",
      date: "2024",
      location: "Barisal, Bangladesh",
      tags: ["youth", "engagement", "climate"],
    },
    {
      id: 7,
      title: "Research Activities",
      category: "research",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Scientific research on climate adaptation and environmental monitoring",
      date: "2024",
      location: "Rangpur, Bangladesh",
      tags: ["research", "science", "monitoring"],
    },
    {
      id: 8,
      title: "Community Meeting",
      category: "community",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Community discussions on climate resilience and adaptation strategies",
      date: "2024",
      location: "Mymensingh, Bangladesh",
      tags: ["community", "meeting", "resilience"],
    },
    {
      id: 9,
      title: "Climate Smart Agriculture",
      category: "sustainability",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Innovative farming techniques adapted for climate change challenges",
      date: "2024",
      location: "Jessore, Bangladesh",
      tags: ["agriculture", "climate", "innovation"],
    },
    {
      id: 10,
      title: "Water Management",
      category: "infrastructure",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Sustainable water management systems for climate resilience",
      date: "2024",
      location: "Comilla, Bangladesh",
      tags: ["water", "management", "sustainability"],
    },
    {
      id: 11,
      title: "Renewable Energy",
      category: "sustainability",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Solar and wind energy solutions for rural communities",
      date: "2024",
      location: "Pabna, Bangladesh",
      tags: ["renewable", "energy", "solar"],
    },
    {
      id: 12,
      title: "Disaster Preparedness",
      category: "training",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Community training for disaster preparedness and emergency response",
      date: "2024",
      location: "Cox's Bazar, Bangladesh",
      tags: ["disaster", "preparedness", "training"],
    },
  ];

  const categories = [
    {
      key: "all",
      label: "All Photos",
      count: galleryData.length,
      icon: <PhotoLibraryIcon />,
    },
    {
      key: "education",
      label: "Education",
      count: galleryData.filter((item) => item.category === "education").length,
      icon: <SchoolIcon />,
    },
    {
      key: "infrastructure",
      label: "Infrastructure",
      count: galleryData.filter((item) => item.category === "infrastructure")
        .length,
      icon: <BuildIcon />,
    },
    {
      key: "workshop",
      label: "Workshops",
      count: galleryData.filter((item) => item.category === "workshop").length,
      icon: <GroupsIcon />,
    },
    {
      key: "sustainability",
      label: "Sustainability",
      count: galleryData.filter((item) => item.category === "sustainability")
        .length,
      icon: <NatureIcon />,
    },
    {
      key: "training",
      label: "Training",
      count: galleryData.filter((item) => item.category === "training").length,
      icon: <EmojiEventsIcon />,
    },
    {
      key: "research",
      label: "Research",
      count: galleryData.filter((item) => item.category === "research").length,
      icon: <ScienceIcon />,
    },
    {
      key: "community",
      label: "Community",
      count: galleryData.filter((item) => item.category === "community").length,
      icon: <PeopleIcon />,
    },
  ];

  const filteredData =
    selectedCategory === "all"
      ? galleryData.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
      : galleryData.filter(
          (item) =>
            item.category === selectedCategory &&
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              item.tags.some((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
              ))
        );

  const displayedData = showAll ? filteredData : filteredData.slice(0, 12);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 0) {
      setSelectedCategory("all");
    } else {
      const categoryKeys = [
        "education",
        "infrastructure",
        "workshop",
        "sustainability",
        "training",
        "research",
        "community",
      ];
      setSelectedCategory(categoryKeys[newValue - 1]);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      {/* Ultra Modern Hero Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 10, md: 16 },
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* Animated Background Elements */}
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "3%",
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
              opacity: 0.1,
              animation: "float 8s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                "50%": { transform: "translateY(-30px) rotate(180deg)" },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "15%",
              right: "5%",
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(45deg, #a8e6cf, #ffd3a5)",
              opacity: 0.1,
              animation: "float 6s ease-in-out infinite reverse",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "10%",
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "linear-gradient(45deg, #ff9a9e, #fecfef)",
              opacity: 0.1,
              animation: "float 10s ease-in-out infinite",
            }}
          />

          {/* Main Title with Glitch Effect */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 900,
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5.5rem",
                lg: "7rem",
              },
              background:
                "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #feca57 100%)",
              backgroundSize: "400% 400%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 0.9,
              mb: 4,
              letterSpacing: "-0.03em",
              animation: "gradientShift 8s ease infinite",
              "@keyframes gradientShift": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
              textShadow: "0 0 30px rgba(255, 107, 107, 0.3)",
            }}
          >
            PHOTO GALLERY
          </Typography>

          {/* Subtitle with Modern Typography */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 300,
              fontSize: { xs: "1.3rem", sm: "1.6rem", md: "2rem" },
              color: "rgba(255, 255, 255, 0.8)",
              mb: 8,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.4,
              letterSpacing: "0.02em",
            }}
          >
            Immerse yourself in our climate-smart education journey through
            breathtaking visual storytelling
          </Typography>

          {/* Ultra Modern Search Bar */}
          <Box
            sx={{
              maxWidth: "700px",
              mx: "auto",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  background:
                    "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
                  borderRadius: 3,
                  zIndex: -1,
                  animation: "gradientShift 3s ease infinite",
                },
              }}
            >
              <TextField
                fullWidth
                placeholder="Search photos, locations, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={{ color: "#ff6b6b", fontSize: "1.5rem" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    bgcolor: "rgba(15, 15, 35, 0.9)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "1.2rem",
                    py: 2,
                    color: "white",
                    "&:hover": {
                      bgcolor: "rgba(15, 15, 35, 0.95)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    },
                    "&.Mui-focused": {
                      bgcolor: "rgba(15, 15, 35, 0.95)",
                      boxShadow: "0 20px 40px rgba(255, 107, 107, 0.2)",
                    },
                    "& fieldset": {
                      border: "none",
                    },
                    "& input::placeholder": {
                      color: "rgba(255, 255, 255, 0.6)",
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Ultra Modern Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          bgcolor: "rgba(15, 15, 35, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "60px 60px 0 0",
          mt: -6,
          pt: 10,
          pb: 10,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderBottom: "none",
        }}
      >
        <Container maxWidth="xl">
          {/* Ultra Modern Category Filter */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "white",
                mb: 6,
                textAlign: "center",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                background:
                  "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              EXPLORE CATEGORIES
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3,
                mb: 6,
              }}
            >
              {categories.map((category) => (
                <Box
                  key={category.key}
                  onClick={() => {
                    const tabIndex =
                      category.key === "all"
                        ? 0
                        : categories.findIndex((c) => c.key === category.key);
                    setSelectedTab(tabIndex);
                    setSelectedCategory(category.key);
                  }}
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      p: 3,
                      borderRadius: 4,
                      minWidth: 180,
                      textAlign: "center",
                      background:
                        selectedCategory === category.key
                          ? "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)"
                          : "rgba(255, 255, 255, 0.05)",
                      border:
                        selectedCategory === category.key
                          ? "none"
                          : "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(20px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          selectedCategory === category.key
                            ? "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)"
                            : "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color:
                          selectedCategory === category.key
                            ? "white"
                            : "#ff6b6b",
                        mb: 2,
                        "& .MuiSvgIcon-root": {
                          fontSize: "2.5rem",
                        },
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color:
                          selectedCategory === category.key ? "white" : "white",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        mb: 1,
                      }}
                    >
                      {category.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          selectedCategory === category.key
                            ? "rgba(255, 255, 255, 0.8)"
                            : "rgba(255, 255, 255, 0.6)",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {category.count} Photos
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Ultra Modern Gallery Grid */}
          <Grid
            container
            spacing={{ xs: 4, sm: 5, md: 6 }}
            sx={{ px: { xs: 2, sm: 0 } }}
          >
            {displayedData.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={item.id}
                sx={{ width: "100%" }}
              >
                <Zoom in={true} timeout={400 + index * 150}>
                  <Box
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-20px) scale(1.03)",
                      },
                    }}
                    onClick={() => setSelectedImage(item)}
                  >
                    {/* Glowing Border Effect */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: -2,
                        left: -2,
                        right: -2,
                        bottom: -2,
                        background:
                          "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
                        borderRadius: 4,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    />

                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 4,
                        overflow: "hidden",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
                        },
                      }}
                    >
                      <Box sx={{ position: "relative", overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          height="320"
                          image={item.image}
                          alt={item.title}
                          sx={{
                            objectFit: "cover",
                            transition:
                              "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              transform: "scale(1.15)",
                            },
                          }}
                        />

                        {/* Ultra Modern Gradient Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.8) 100%)",
                            opacity: 0,
                            transition: "opacity 0.4s ease",
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        />

                        {/* Modern Date Badge */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            bgcolor: "rgba(255, 107, 107, 0.9)",
                            backdropFilter: "blur(20px)",
                            color: "white",
                            px: 3,
                            py: 1.5,
                            borderRadius: 4,
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            boxShadow: "0 8px 25px rgba(255, 107, 107, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <DateRangeIcon sx={{ fontSize: "1rem" }} />
                          {item.date}
                        </Box>

                        {/* Modern Location Badge */}
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            left: 20,
                            bgcolor: "rgba(78, 205, 196, 0.9)",
                            backdropFilter: "blur(20px)",
                            color: "white",
                            px: 3,
                            py: 1.5,
                            borderRadius: 4,
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            boxShadow: "0 8px 25px rgba(78, 205, 196, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <LocationOnIcon sx={{ fontSize: "1rem" }} />
                          {item.location}
                        </Box>
                      </Box>

                      <CardContent
                        sx={{ p: 4, bgcolor: "rgba(15, 15, 35, 0.8)" }}
                      >
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontSize: { xs: "1.2rem", sm: "1.3rem" },
                            fontWeight: 800,
                            color: "white",
                            mb: 2,
                            lineHeight: 1.2,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            mb: 3,
                            color: "rgba(255, 255, 255, 0.8)",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.description}
                        </Typography>

                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          gap={1}
                        >
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Chip
                              key={tagIndex}
                              label={tag}
                              size="small"
                              sx={{
                                textTransform: "capitalize",
                                bgcolor: "rgba(255, 255, 255, 0.1)",
                                color: "white",
                                fontSize: "0.8rem",
                                height: 28,
                                fontWeight: 600,
                                borderRadius: 3,
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                "&:hover": {
                                  bgcolor: "rgba(255, 255, 255, 0.2)",
                                },
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Box>
                </Zoom>
              </Grid>
            ))}
          </Grid>

          {/* Ultra Modern Show More Button */}
          {filteredData.length > 12 && (
            <Box
              sx={{
                textAlign: "center",
                mt: 10,
                px: { xs: 2, sm: 0 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    background:
                      "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
                    borderRadius: 8,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    animation: "gradientShift 3s ease infinite",
                  },
                  "&:hover::before": {
                    opacity: 1,
                  },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  onClick={() => setShowAll(!showAll)}
                  sx={{
                    px: { xs: 8, sm: 10 },
                    py: 4,
                    borderRadius: 8,
                    textTransform: "none",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)",
                    boxShadow: "0 15px 35px rgba(255, 107, 107, 0.4)",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(20px)",
                    color: "white",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-6px) scale(1.08)",
                      boxShadow: "0 25px 50px rgba(255, 107, 107, 0.6)",
                      background:
                        "linear-gradient(135deg, #ff5252 0%, #26c6da 100%)",
                    },
                  }}
                >
                  {showAll
                    ? "SHOW LESS"
                    : `SHOW ALL ${filteredData.length} PHOTOS`}
                </Button>
              </Box>
            </Box>
          )}

          {/* No Results Message */}
          {filteredData.length === 0 && (
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                px: { xs: 2, sm: 0 },
              }}
            >
              <Typography variant="h5" color="text.secondary" gutterBottom>
                No photos found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search terms or category filter
              </Typography>
            </Box>
          )}

          {/* Modern Image Modal */}
          <Dialog
            open={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            maxWidth="lg"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 4,
                overflow: "hidden",
                maxHeight: "95vh",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
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
                    p: 3,
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {selectedImage.title}
                  </Typography>
                  <IconButton
                    onClick={() => setSelectedImage(null)}
                    sx={{
                      color: "white",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
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
                        maxHeight: "65vh",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
                        color: "white",
                        p: 4,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          fontSize: "1.2rem",
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      >
                        {selectedImage.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={3}
                        alignItems="center"
                        flexWrap="wrap"
                        gap={2}
                        sx={{ mb: 3 }}
                      >
                        <Chip
                          label={selectedImage.category}
                          size="medium"
                          sx={{
                            textTransform: "capitalize",
                            bgcolor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            fontWeight: 600,
                            backdropFilter: "blur(10px)",
                          }}
                        />
                        <Stack direction="row" spacing={1} alignItems="center">
                          <DateRangeIcon sx={{ fontSize: "1.1rem" }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {selectedImage.date}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <LocationOnIcon sx={{ fontSize: "1.1rem" }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {selectedImage.location}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        gap={1}
                      >
                        {selectedImage.tags.map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                              textTransform: "capitalize",
                              color: "white",
                              borderColor: "rgba(255, 255, 255, 0.3)",
                              bgcolor: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(10px)",
                              "&:hover": {
                                bgcolor: "rgba(255, 255, 255, 0.2)",
                                borderColor: "rgba(255, 255, 255, 0.5)",
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </DialogContent>
              </>
            )}
          </Dialog>
        </Container>
      </Box>
    </Box>
  );
};

export default PhotoGallery;
