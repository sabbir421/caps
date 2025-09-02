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

const ClimateSmartCampusAndClassroom = () => {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh", width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "#fff",
          py: { xs: 4, sm: 6, md: 8, lg: 12 },
          textAlign: "center",
          px: { xs: 2, sm: 0 },
          width: "100%",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Typography
            variant="h2"
            sx={{
              color:"white",
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              maxWidth: "100%",
            }}
          >
            Climate Smart Campus & Classroom
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: { xs: "100%", sm: "600px", md: "700px" },
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
              color:"white",
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.1rem",
                lg: "1.2rem",
              },
              opacity: 0.9,
              px: { xs: 2, sm: 0 },
            }}
          >
            Creating sustainable and resilient learning environments that
            mitigate climate change impacts and adapt to future climate
            scenarios.
          </Typography>
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
                      color:"white",
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
                      color:"white",
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
