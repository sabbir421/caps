import React from "react";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)",
        color: "white",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.1), transparent 70%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.1), transparent 70%)",
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 1 }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <Typography
          component={motion.h2}
          variants={childVariants}
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Climate Adaptation Plan Society
        </Typography>

        {/* Subtext */}
        <Typography
          component={motion.p}
          variants={childVariants}
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "rgba(255,255,255,0.9)",
            maxWidth: "600px",
            mx: "auto",
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          Building a sustainable future — balancing people, planet, and
          prosperity.
        </Typography>

        {/* Call to action */}
        <Stack
          component={motion.div}
          variants={childVariants}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            variant="contained"
            size="large"
            onClick={() => navigate("/about")}
            sx={{
              backgroundColor: "white",
              color: "#3B82F6",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: "#f9fafb",
              },
            }}
          >
            Learn More
          </Button>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            variant="outlined"
            size="large"
            onClick={() => navigate("/contact")}
            sx={{
              borderColor: "rgba(255,255,255,0.7)",
              color: "white",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Get Involved
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
