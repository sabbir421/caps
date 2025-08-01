import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  Nature,
  School,
  LocalHospital,
  Agriculture,
  Opacity,
  Bolt,
} from "@mui/icons-material";

const workingAreas = [
  {
    title: "Climate Action",
    description:
      "Promoting sustainable practices and climate resilience in rural communities. We implement tree plantation drives, awareness campaigns, and support local adaptation strategies to reduce the impact of climate change. Our projects empower communities to adopt eco-friendly technologies and build resilience against natural disasters.",
    image:
      "https://images.pexels.com/photos/2229887/pexels-photo-2229887.jpeg?cs=srgb&dl=pexels-guillaume-falco-1112556-2229887.jpg&fm=jpg",
    icon: <Nature fontSize="large" color="primary" />,
    link: "/working-area/climate-action",
  },
  {
    title: "Education",
    description:
      "Ensuring access to quality education for every child in rural areas. We run community schools, provide scholarships, and distribute learning materials to underprivileged children. Our focus is on inclusive education, digital literacy, and skill development for lifelong learning.",
    image:
      "https://img.freepik.com/free-vector/characters-people-holding-green-energy-icons_53876-66137.jpg?semt=ais_hybrid&w=740",
    icon: <School fontSize="large" color="primary" />,
    link: "/working-area/education",
  },
  {
    title: "Healthcare",
    description:
      "Providing essential healthcare services and awareness in underserved regions. We organize medical camps, maternal and child health programs, and health education sessions. Our initiatives aim to improve access to doctors, medicines, and preventive care for rural families.",
    image:
      "https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?semt=ais_hybrid&w=740",
    icon: <LocalHospital fontSize="large" color="primary" />,
    link: "/working-area/healthcare",
  },
  {
    title: "Agriculture",
    description:
      "Empowering farmers with modern techniques and sustainable agriculture. We provide training on organic farming, distribute high-yield seeds, and promote water-efficient irrigation. Our goal is to increase productivity, ensure food security, and improve rural livelihoods.",
    image:
      "https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?semt=ais_hybrid&w=740",
    icon: <Agriculture fontSize="large" color="primary" />,
    link: "/working-area/agriculture",
  },
  {
    title: "Water Management",
    description:
      "Innovative solutions for water conservation and management. We construct rainwater harvesting systems, restore ponds, and educate communities on efficient water use. Our projects help ensure clean water access and sustainable agriculture in water-scarce areas.",
    image:
      "https://media.istockphoto.com/id/505176828/photo/water-treatment-plant-at-sunset.jpg?s=612x612&w=0&k=20&c=TqbiqmeZcjlZeB2TLoWPrRIyVsYx2m8mZC4rMbNmsXc=",
    icon: <Opacity fontSize="large" color="primary" />,
    link: "/working-area/water",
  },
  {
    title: "Renewable Energy",
    description:
      "Promoting clean and renewable energy sources in rural areas. We install solar panels, train local technicians, and advocate for the adoption of wind and biogas solutions. Our efforts reduce carbon emissions and bring reliable electricity to off-grid communities.",
    image:
      "https://beyondexclamation.com/wp-content/uploads/2020/01/renewable-energy-sources.jpg",
    icon: <Bolt fontSize="large" color="primary" />,
    link: "/working-area/energy",
  },
];

const HeroSection = () => {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % workingAreas.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () =>
    setCurrent(
      (prev) => (prev - 1 + workingAreas.length) % workingAreas.length
    );
  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % workingAreas.length);

  const area = workingAreas[current];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 0, sm: 2 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: 320, sm: 380, md: 420 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 360, sm: 600, md: 950 },
          mx: "auto",
          borderRadius: 2,
          boxShadow: 3,
          overflow: "hidden",
          backgroundColor: "white",
          color: theme.palette.text.primary,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
            boxShadow: "none",
            background: "none",
            minHeight: { xs: 320, sm: 260, md: 400 },
          }}
        >
          <CardMedia
            component="img"
            image={area.image}
            alt={area.title}
            sx={{
              width: { xs: "100%", sm: 260, md: 360 },
              height: { xs: 180, sm: 260, md: 400 },
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <CardContent
            sx={{
              flex: 1,
              p: { xs: 2, sm: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {area.icon}
              <Typography variant="h5" sx={{ fontWeight: 700, ml: 1 }}>
                {area.title}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {area.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={area.link}
              sx={{ borderRadius: 2, fontWeight: 600, alignSelf: "flex-start" }}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1, sm: 2 },
            py: 1,
            backgroundColor: theme.palette.background.secondary,
          }}
        >
          <Button onClick={handlePrev} size="small">
            Prev
          </Button>
          <Typography variant="caption">
            {current + 1} / {workingAreas.length}
          </Typography>
          <Button onClick={handleNext} size="small">
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
