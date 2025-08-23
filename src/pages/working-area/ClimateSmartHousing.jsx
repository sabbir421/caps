import React from "react";
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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShieldIcon from "@mui/icons-material/Shield";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import NatureIcon from "@mui/icons-material/Nature";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import GroupsIcon from "@mui/icons-material/Groups";

const ClimateSmartHousing = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: { xs: 2, md: 6 }, borderRadius: 3 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              Climate-Smart Housing
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Buildings designed and constructed to withstand climate change
              impacts while minimizing environmental footprint.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
              alt="Climate-smart housing and sustainable buildings"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Typography
            variant="body1"
            paragraph
            sx={{ mt: 4, textAlign: "justify" }}
          >
            CAPS (Climate Adaptation Plan Society) Aims to take some initiatives
            for project as "Climate-smart housing" refers to buildings designed
            and constructed to withstand the impacts of climate change while
            also minimizing their own environmental footprint. It involves
            integrating features that enhance resilience to extreme weather
            events like cyclones and floods, while also promoting energy
            efficiency and sustainable resource management.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Aspects of Climate-Smart Housing
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ShieldIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Resilience to Climate Impacts"
                    secondary="Designing structures to withstand extreme weather events like cyclones, floods, and heat waves. This can involve using materials that are resistant to high winds, flooding, and extreme temperatures."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EnergySavingsLeafIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Energy Efficiency"
                    secondary="Reducing energy consumption through design features like proper insulation, efficient windows and doors, and passive heating and cooling systems."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Water Management"
                    secondary="Incorporating rainwater harvesting systems, water-efficient appliances, and greywater recycling to minimize water consumption and manage stormwater runoff."
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Additional Features
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <NatureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sustainable Materials"
                    secondary="Using locally sourced, renewable, and low-embodied energy materials in construction to minimize the environmental impact of building materials."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalFloristIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Food Production"
                    secondary="Integrating features that enable residents to grow their own food, such as vertical gardens, rooftop gardens, or small-scale aquaculture systems."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Integration"
                    secondary="Ensuring that climate-smart housing is integrated into the broader community and that it supports local livelihoods and economic development."
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartHousing;
