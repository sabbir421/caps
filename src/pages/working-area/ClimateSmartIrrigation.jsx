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
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import GrassIcon from "@mui/icons-material/Grass";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PublicIcon from "@mui/icons-material/Public";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BoltIcon from "@mui/icons-material/Bolt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HubIcon from "@mui/icons-material/Hub";

const ClimateSmartIrrigation = () => {
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
              Climate-smart irrigation
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                maxWidth: { xs: "100%", sm: "800px", md: "900px" },
                mx: "auto",
              }}
            >
              CAPS (Climate Adaptation Plan Society) aims to promote
              climate-smart irrigation practices to enhance agricultural
              productivity, build resilience to climate change, and minimize
              greenhouse gas emissions related to irrigation.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <img
              src="https://placehold.co/1200x500/E1F5FE/01579B?text=Efficient+Water+for+Farming"
              alt="A field with a modern, efficient irrigation system."
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
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            It emphasizes efficient water use, water conservation, and the
            integration of weather information and technology to optimize
            irrigation scheduling.
          </Typography>

          <Grid container spacing={{ xs: 3, md: 6 }}>
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
                Caps's Activities in Climate-Smart Irrigation
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <WbIncandescentIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Precision Irrigation"
                    secondary="Utilizing technologies like sensors, drones, and IoT to monitor soil moisture and crop needs, enabling targeted and efficient water application."
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
                    <WaterDropIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Micro-Irrigation"
                    secondary="Employing systems like drip irrigation that deliver water directly to plant roots, minimizing water loss through evaporation and runoff."
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
                    <PublicIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Water Harvesting"
                    secondary="Implementing techniques to collect and store rainwater or runoff for later use, reducing reliance on external water sources."
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
                    <AgricultureIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Drought-Resistant Crops"
                    secondary="Selecting and cultivating crop varieties that are tolerant to water scarcity and high temperatures, reducing irrigation needs."
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
                    <GrassIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Soil Moisture Management"
                    secondary="Utilizing practices like mulching and cover cropping to retain soil moisture and reduce evaporation."
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
                    <LocalFloristIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="No-Till Farming"
                    secondary="Reducing soil disturbance during planting, which helps improve water infiltration and retention."
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
                    <HubIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integrated Water Management"
                    secondary="Combining different water management techniques to optimize water use and ensure sustainable irrigation practices."
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
                    <WbIncandescentIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Remote Sensing"
                    secondary="Leveraging satellite and drone imagery to assess soil conditions and crop health, enabling timely irrigation interventions."
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
                    <LightbulbIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Automated Irrigation Systems"
                    secondary="Implementing automated systems that control irrigation based on real-time data and pre-defined schedules, improving efficiency."
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
            </Grid>

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
                Benefits of Climate-Smart Irrigation
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <WaterDropIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Increased Water Use Efficiency"
                    secondary="Reduced water wastage and improved water productivity."
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
                    <ShowChartIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Enhanced Crop Yields"
                    secondary="Optimized water application leads to better crop growth and higher yields."
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
                    <BoltIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reduced Energy Consumption"
                    secondary="Lower energy requirements for irrigation, especially when using solar-powered pumps."
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
                    <PublicIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Mitigation of Climate Change Impacts"
                    secondary="Reduced greenhouse gas emissions from irrigation and increased resilience to droughts."
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
                    <GrassIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Improved Soil Health"
                    secondary="Practices like no-till farming and cover cropping improve soil structure and water retention."
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
                    <MonetizationOnIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Cost Savings for Farmers"
                    secondary="Reduced water and energy bills, leading to increased profitability."
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
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartIrrigation;
