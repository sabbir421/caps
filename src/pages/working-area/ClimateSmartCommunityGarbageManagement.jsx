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
              Climate Smart Community Garbage Management
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                maxWidth: { xs: "100%", sm: "800px", md: "900px" },
                mx: "auto",
              }}
            >
              Establishing community-based systems to control carbon and methane
              emissions.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
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
            sx={{
              mt: { xs: 3, md: 4 },
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
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

          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            sx={{ mt: { xs: 4, md: 6 } }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                }}
              >
                Core Functions and Activities
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <RecyclingIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Waste Reduction"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <RecyclingIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Proper Waste Segregation"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <RecyclingIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Efficient Waste Collection and Disposal"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <HealthAndSafetyIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Public Health Improvement"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <GroupsIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Well-being"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <RecyclingIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Waste Segregation Programs, Composting, and Recycling"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <PublicIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cleanliness Campaigns and Awareness Programs"
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
              }}
            >
              Key Areas for Methane Emission Control
            </Typography>
            <List>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <GavelIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Waste Management"
                  secondary="Implementing landfill gas capture, waste reduction and recycling, and wastewater treatment."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Agriculture"
                  secondary="Promoting dietary adjustments and improved waste and land management practices."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    },
                    "& .MuiListItemText-secondary": {
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
              }}
            >
              Economic and Social Benefits
            </Typography>
            <List>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <LocalFloristIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Climate Change Mitigation"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <CrisisAlertIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Improved Air Quality"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <GavelIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Economic Opportunities"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <LandscapeIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Land Conservation"
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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

export default ClimateSmartCommunityGarbageManagement;
