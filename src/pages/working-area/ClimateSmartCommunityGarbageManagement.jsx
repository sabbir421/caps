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
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PublicIcon from "@mui/icons-material/Public";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GroupsIcon from "@mui/icons-material/Groups";
import GavelIcon from "@mui/icons-material/Gavel";
import RecyclingIcon from "@mui/icons-material/Recycling";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";

const ClimateSmartCommunityGarbageManagement = () => {
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
              Climate Smart Community Garbage Management
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Establishing community-based systems to control carbon and methane
              emissions.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Community-led+waste+management"
              alt="A community-led waste management initiative."
              style={{
                width: "100%",
                height: "auto",
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
            As "Cooling the planet" is a burning issue of the present world,
            CAPS (Climate Adaptation Plan Society) aims to control carbon
            ($CO_2$) and methane ($CH_4$) by establishing a community-based
            garbage management system. This local initiative focuses on
            improving waste management practices within communities of 20 to 50
            houses, applicable in villages, towns, and cities. Our core work is
            to promote **waste reduction, proper segregation, and efficient
            disposal**, contributing to a cleaner and healthier environment.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Core Functions and Activities
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <RecyclingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Waste Reduction" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RecyclingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Proper Waste Segregation" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RecyclingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Efficient Waste Collection and Disposal" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Awareness and Education" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Community Engagement" />
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
                Key Objectives
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocalFloristIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Environmental Protection" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HealthAndSafetyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Public Health Improvement" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Community Well-being" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RecyclingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Waste Segregation Programs, Composting, and Recycling" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Cleanliness Campaigns and Awareness Programs" />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Key Areas for Methane Emission Control
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <GavelIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Waste Management"
                  secondary="Implementing landfill gas capture, waste reduction and recycling, and wastewater treatment."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LandscapeIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Agriculture"
                  secondary="Promoting dietary adjustments and improved waste and land management practices."
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Economic and Social Benefits
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocalFloristIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Climate Change Mitigation" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CrisisAlertIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Improved Air Quality" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GavelIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Economic Opportunities" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LandscapeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Land Conservation" />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartCommunityGarbageManagement;
