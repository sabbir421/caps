import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import {
  Nature,
  School,
  LocalHospital,
  EmojiPeople,
  Opacity,
  Bolt,
  Group,
  Public,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const workAreas = [
  {
    title: "Climate Action",
    description:
      "Empowering rural communities to combat climate change through sustainable practices and awareness.",
    icon: <Nature sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
    link: "/working-area/climate-action",
  },
  {
    title: "Education",
    description:
      "Ensuring access to quality education and digital literacy for every child in rural areas.",
    icon: <School sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    link: "/working-area/education",
  },
  {
    title: "Healthcare",
    description:
      "Providing essential healthcare services, medical camps, and health education in underserved regions.",
    icon: <LocalHospital sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
    link: "/working-area/healthcare",
  },
  {
    title: "Plastic Management",
    description:
      "Promoting plastic waste reduction and management for a cleaner, healthier environment.",
    icon: <Public sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "/what-we-do/programs",
  },
  {
    title: "Women Empowerment",
    description:
      "Supporting women's self-help groups, vocational training, and leadership development.",
    icon: <EmojiPeople sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    link: "/what-we-do/community",
  },
  {
    title: "Water Management",
    description:
      "Implementing rainwater harvesting, clean water access, and efficient irrigation systems.",
    icon: <Opacity sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    link: "/working-area/water",
  },
  {
    title: "Renewable Energy",
    description:
      "Promoting solar, wind, and other renewable energy sources in rural areas.",
    icon: <Bolt sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    link: "/working-area/energy",
  },
  {
    title: "Community Development",
    description:
      "Fostering community participation in local governance, infrastructure, and social welfare projects.",
    icon: <Group sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
    link: "/what-we-do/community",
  },
];

const HomeContent = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.secondary }}>
      {/* We Believe Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          We Believe
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          We believe in empowering rural communities through climate action,
          education, healthcare, and sustainable development. Our mission is to
          build a brighter, more resilient future for all, leaving no one
          behind.
        </Typography>
      </Box>
      {/* Our Work Areas Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Our Work Areas
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          We are dedicated to creating sustainable change in rural communities
          through climate action, education, healthcare, women empowerment, and
          more. Explore our key focus areas below.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {workAreas.map((area, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                height: 420,
                minWidth: 280, // Set fixed minWidth
                maxWidth: 280, // Same maxWidth
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.03)",
                  boxShadow: "0 8px 32px 0 rgba(102,126,234,0.16)",
                },
                background: "#fff",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={area.image}
                  alt={area.title}
                  sx={{
                    height: 160,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    width: "100%",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    zIndex: 2,
                    background: "rgba(255,255,255,0.85)",
                    borderRadius: "50%",
                    p: 1,
                  }}
                >
                  {area.icon}
                </Box>
              </Box>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {area.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {area.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href={area.link}
                  sx={{
                    mt: "auto",
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ fontWeight: 700, px: 5, py: 1.5, borderRadius: 2 }}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default HomeContent;
