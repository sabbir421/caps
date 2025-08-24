import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import logo from "../assets/logo.jpeg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, sm: 5, md: 6 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
          opacity: 0.3,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 3, md: 0 },
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 2.5 },
            }}
          >
            <img
              src={logo}
              alt="CAPS Logo"
              style={{
                height: "220px",
                width: "auto",
                borderRadius: "12px",
                maxWidth: "100%",
              }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
                  mb: 1.5,
                  background:
                    "linear-gradient(45deg, #ffffff 30%, #f0f8ff 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 4px 8px rgba(0,0,0,0.15)",
                  lineHeight: 1.3,
                }}
              >
                Caps || Climate Adaptation Plan Society
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                  lineHeight: 1.5,
                }}
              >
                "An Albatross of Sustainable Development…"
              </Typography>
            </Box>
          </Box>

          <Divider
            sx={{
              width: 60,
              mx: "auto",
              borderColor: "rgba(255,255,255,0.4)",
              mt: { xs: 2, md: 3 },
              mb: { xs: 2, md: 3 },
            }}
          />
        </Box>

        {/* Mission Statement */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Box sx={{ maxWidth: { xs: "100%", sm: "700px" }, mx: "auto" }}>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              We work for sustainable development focused on meeting present
              needs without compromising the ability of future generations to
              meet their own. Our specialty is creating a world where societal
              needs are met without compromising the environment's ability to
              meet future needs.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
               
              }}
            >
              We balance economic growth, social progress, and environmental
              protection, aligned with the UN's Sustainable Development Goals
              (SDGs).
            </Typography>
          </Box>
        </Box>

        {/* Core Principles */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              textAlign: "center",
              color: "rgba(255,255,255,0.98)",
              fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
            }}
          >
            Core Principles
          </Typography>
          <Box sx={{ maxWidth: { xs: "100%", sm: "700px" }, mx: "auto" }}>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: {xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>Meeting Present Needs:</b> Ensuring essential resources and
              opportunities for the current generation.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>Future Generations:</b> Protecting the environment and
              resources so future generations can thrive.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: {xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>Holistic Approach:</b> Integrating economic development, social
              progress, and environmental protection to achieve true
              sustainability.
            </Typography>
          </Box>
        </Box>

        {/* Key Aspects */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              textAlign: "center",
              color: "rgba(255,255,255,0.98)",
              fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
            }}
          >
            Key Aspects
          </Typography>
          <Box sx={{ maxWidth: { xs: "100%", sm: "700px" }, mx: "auto" }}>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>Environmental Sustainability:</b> Conserving ecosystems,
              biodiversity, and natural resources.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem"},
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>Social Equity:</b> Ensuring fair access to resources,
              opportunities, and participation for all.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem"},
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>Economic Viability:</b> Promoting economic systems that support
              long-term prosperity.
            </Typography>
          </Box>
        </Box>

        {/* Climate Sustainability */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              textAlign: "center",
              color: "rgba(255,255,255,0.98)",
              fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
            }}
          >
            Climate Sustainability
          </Typography>
          <Box sx={{ maxWidth: { xs: "100%", sm: "700px" }, mx: "auto" }}>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: {xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>1. Climate Mitigation:</b> Reducing greenhouse gas emissions
              through renewable energy, efficiency, and sustainable land use.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>2. Climate Adaptation:</b> Building climate-resilient
              infrastructure and protecting vulnerable communities.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 2.5 },
                fontSize: { xs: "1rem", sm: "1rem", md: "1rem" },
                color: "rgba(255,255,255,0.95)",
                lineHeight: { xs: 1.7, md: 1.6 },
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              <b>3. Sustainable Lifestyle:</b> Promoting sustainable
              consumption, transportation, and education on climate action.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
