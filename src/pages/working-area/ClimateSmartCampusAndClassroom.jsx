import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Divider,
} from "@mui/material";
import {
  Architecture,
  Park,
  Recycling,
  WaterDrop,
  School,
  Groups,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ClimateSmartCampusAndClassroom = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  const handleGetInvolved = () => {
    navigate("/contact");
  };

  return (
    <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh", width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          color: "#fff",
          py: { xs: 8, sm: 12, md: 16, lg: 20 },
          textAlign: "center",
          overflow: "hidden",
          width: "100%",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            zIndex: 1,
          },
        }}
      >
        {/* Floating Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            zIndex: 2,
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "15%",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            zIndex: 2,
            animation: "float 4s ease-in-out infinite reverse",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "20%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
            zIndex: 2,
            animation: "float 8s ease-in-out infinite",
          }}
        />

        <Container
          maxWidth={false}
          sx={{ px: { xs: 2, sm: 3, md: 4 }, position: "relative", zIndex: 3 }}
        >
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.5 },
              mb: { xs: 3, sm: 4 },
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px)",
              borderRadius: "50px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Sustainable Education Initiative
            </Typography>
          </Box>

          {/* Main Title */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: { xs: 3, sm: 4 },
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "5.5rem",
              },
              lineHeight: { xs: 1.1, sm: 1.2 },
              background: "linear-gradient(45deg, #ffffff 30%, #f0f9ff 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              letterSpacing: { xs: "-0.02em", sm: "-0.03em" },
            }}
          >
            Climate Smart
            <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(45deg, #4ade80 30%, #22c55e 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Campus
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              maxWidth: { xs: "100%", sm: "600px", md: "700px" },
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: {
                xs: "1.1rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
              color: "rgba(255, 255, 255, 0.9)",
              mb: { xs: 4, sm: 6 },
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            Transform educational spaces into sustainable, resilient
            environments that inspire climate action
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 3 },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={handleGetInvolved}
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 600,
                background: "linear-gradient(45deg, #4ade80 30%, #22c55e 90%)",
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 8px 32px rgba(34, 197, 94, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #22c55e 30%, #16a34a 90%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 40px rgba(34, 197, 94, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get Involved
            </Button>
            <Button
              variant="outlined"
              onClick={handleLearnMore}
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 600,
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "50px",
                textTransform: "none",
                backdropFilter: "blur(10px)",
                background: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  background: "rgba(255, 255, 255, 0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Strip */}
      <Box
        sx={{
          bgcolor: "#0f2447",
          color: "#e3f2fd",
          py: { xs: 2, sm: 3, md: 4 },
          width: "100%",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
            {[
              { value: "40%", label: "Energy savings goal" },
              { value: "100%", label: "Water reuse on grounds" },
              { value: "Zero", label: "Single-use plastics" },
              { value: "24/7", label: "Climate learning access" },
            ].map((stat, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <Box sx={{ textAlign: "center", px: { xs: 1, sm: 2 } }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      fontSize: {
                        xs: "1.2rem",
                        sm: "1.4rem",
                        md: "1.6rem",
                        lg: "1.8rem",
                      },
                      mb: { xs: 0.5, sm: 1 },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: 0.85,
                      color: "white",
                      fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.9rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth={false}
        sx={{
          py: { xs: 3, sm: 4, md: 6, lg: 8 },
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          overflowX: "hidden",
          width: "100%",
        }}
      >
        {/* Overview */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, maxWidth: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: { xs: 2, sm: 3 },
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                md: "1.6rem",
                lg: "2rem",
              },
            }}
          >
            Overview
          </Typography>
          <Typography
            sx={{
              mb: { xs: 2, sm: 3 },
              lineHeight: 1.7,
              color: "#333",
              fontSize: {
                xs: "0.9rem",
                sm: "0.95rem",
                md: "1rem",
                lg: "1.05rem",
              },
              maxWidth: "100%",
            }}
          >
            Caps// Climate Adaptation Plan Society approaches "Climate-smart
            Campus and Classroom" focusing on creating sustainable and resilient
            learning environments that mitigate climate change impacts and adapt
            to future climate scenarios.
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.7,
              color: "#333",
              fontSize: {
                xs: "0.9rem",
                sm: "0.95rem",
                md: "1rem",
                lg: "1.05rem",
              },
              maxWidth: "100%",
            }}
          >
            Key aspects of a climate-smart campus and classroom include
            sustainable design, reduced carbon emissions, and fostering climate
            awareness among students and staff.
          </Typography>
        </Box>

        {/* Key Pillars */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, maxWidth: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: { xs: 2, sm: 3 },
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                md: "1.6rem",
                lg: "2rem",
              },
            }}
          >
            Key Pillars
          </Typography>
          <Divider sx={{ mb: { xs: 3, sm: 4 } }} />
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            sx={{ width: "100%" }}
          >
            {[
              {
                icon: <Architecture />,
                color: "#1976d2",
                title: "Sustainable Design and Construction",
                text: "Utilizing eco-friendly building materials, optimizing energy efficiency, and incorporating renewable energy sources like solar panels.",
              },
              {
                icon: <Park />,
                color: "#2e7d32",
                title: "Green Spaces and Biodiversity",
                text: "Creating native plant gardens, wildlife corridors, and outdoor learning spaces that enhance biodiversity and provide ecosystem services.",
              },
              {
                icon: <Recycling />,
                color: "#7b1fa2",
                title: "Waste Management and Circular Economy",
                text: "Implementing comprehensive recycling programs, composting systems, and promoting a culture of reduce, reuse, and recycle.",
              },
              {
                icon: <WaterDrop />,
                color: "#009688",
                title: "Water Conservation and Management",
                text: "Installing water-efficient fixtures, rainwater harvesting systems, and implementing smart irrigation for landscaping.",
              },
              {
                icon: <School />,
                color: "#ff9800",
                title: "Climate Education Integration",
                text: "Embedding climate change awareness, sustainability practices, and environmental stewardship into all aspects of learning.",
              },
              {
                icon: <Groups />,
                color: "#9c27b0",
                title: "Community Engagement and Partnerships",
                text: "Collaborating with local communities, businesses, and organizations to create shared climate action initiatives.",
              },
            ].map((pillar, i) => (
              <Grid item xs={12} sm={6} lg={4} key={i} sx={{ width: "100%" }}>
                <Card
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    height: "100%",
                    "&:hover": { boxShadow: 4 },
                    transition: "box-shadow 0.3s ease",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: { xs: 1.5, sm: 2 },
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 40, sm: 45, md: 50 },
                        height: { xs: 40, sm: 45, md: 50 },
                        mr: { xs: 1.5, sm: 2 },
                        color: pillar.color,
                        fontSize: { xs: 24, sm: 26, md: 28 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {pillar.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: {
                          xs: "1rem",
                          sm: "1.1rem",
                          md: "1.2rem",
                          lg: "1.3rem",
                        },
                        lineHeight: 1.3,
                        flex: 1,
                      }}
                    >
                      {pillar.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#333",
                      lineHeight: 1.6,
                      fontSize: {
                        xs: "0.85rem",
                        sm: "0.9rem",
                        md: "0.95rem",
                        lg: "1rem",
                      },
                      width: "100%",
                    }}
                  >
                    {pillar.text}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefits */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, maxWidth: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: { xs: 2, sm: 3 },
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                md: "1.6rem",
                lg: "2rem",
              },
            }}
          >
            Benefits
          </Typography>
          <Divider sx={{ mb: { xs: 3, sm: 4 } }} />
          <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ width: "100%" }}>
            {[
              {
                icon: <Architecture />,
                color: "#1976d2",
                text: "Lower operational costs through energy‑efficient buildings and smart controls.",
              },
              {
                icon: <Park />,
                color: "#2e7d32",
                text: "Healthier spaces with shade, biodiversity and better microclimates.",
              },
              {
                icon: <Recycling />,
                color: "#7b1fa2",
                text: "Waste diversion and culture of reuse across campus.",
              },
              {
                icon: <WaterDrop />,
                color: "#009688",
                text: "Reduced water consumption via harvesting and efficient fixtures.",
              },
              {
                icon: <School />,
                color: "#ff9800",
                text: "Embedded climate literacy and hands‑on learning for students.",
              },
              {
                icon: <Groups />,
                color: "#9c27b0",
                text: "Stronger community engagement and stewardship.",
              },
            ].map((benefit, i) => (
              <Grid item xs={12} sm={6} lg={4} key={i} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: { xs: 2, sm: 3 },
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      color: benefit.color,
                      mr: { xs: 1.5, sm: 2 },
                      mt: 0.5,
                      fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                      flexShrink: 0,
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography
                    sx={{
                      lineHeight: 1.7,
                      color: "#333",
                      fontSize: {
                        xs: "0.85rem",
                        sm: "0.9rem",
                        md: "0.95rem",
                        lg: "1rem",
                      },
                      flex: 1,
                    }}
                  >
                    {benefit.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Implementation Steps */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, maxWidth: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: { xs: 2, sm: 3 },
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                md: "1.6rem",
                lg: "2rem",
              },
            }}
          >
            Implementation Steps
          </Typography>
          <Divider sx={{ mb: { xs: 3, sm: 4 } }} />
          <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ width: "100%" }}>
            {[
              {
                icon: <Architecture />,
                color: "#1976d2",
                text: "Audit campus baseline for energy, water and waste.",
              },
              {
                icon: <Park />,
                color: "#2e7d32",
                text: "Design green corridors and native planting plans.",
              },
              {
                icon: <Recycling />,
                color: "#7b1fa2",
                text: "Roll out recycling stations and behavior nudges.",
              },
              {
                icon: <School />,
                color: "#ff9800",
                text: "Embed modules and projects in curricula and clubs.",
              },
            ].map((step, i) => (
              <Grid item xs={12} sm={6} key={i} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: { xs: 2, sm: 3 },
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      color: step.color,
                      mr: { xs: 1.5, sm: 2 },
                      mt: 0.5,
                      fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                      flexShrink: 0,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography
                    sx={{
                      lineHeight: 1.7,
                      color: "#333",
                      fontSize: {
                        xs: "0.85rem",
                        sm: "0.9rem",
                        md: "0.95rem",
                        lg: "1rem",
                      },
                      flex: 1,
                    }}
                  >
                    {step.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              color: "#fff",
              fontSize: "1.1rem",
              px: 5,
              py: 1.5,
              borderRadius: "8px",
              "&:hover": { opacity: 0.9 },
            }}
          >
            Transform Your Campus Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ClimateSmartCampusAndClassroom;
