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
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SpaIcon from "@mui/icons-material/Spa";
import GrassIcon from "@mui/icons-material/Grass";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BoltIcon from "@mui/icons-material/Bolt";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";

const ClimateSmartWaterPlant = () => {
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
              Climate Smart Water Plant
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
              CAPS (Climate Adaptation Plan Society) focuses on creating more
              resilient and sustainable water systems in the face of climate
              change. This involves adapting to the impacts of climate change,
              such as increased droughts, floods, and changes in water quality,
              while also mitigating greenhouse gas emissions associated with
              water management.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <img
              src="https://placehold.co/1200x500/B3E5FC/01579B?text=Sustainable+Water+Management"
              alt="A climate-smart water plant with clean water and green surroundings."
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
            Key aspects include promoting water conservation, improving water
            use efficiency, exploring alternative water sources, and
            implementing climate-smart water management practices.
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
                Key Goals of the Program
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
                    primary="Rainwater Harvesting"
                    secondary="Caps approaches to construct and revive rainwater harvesting structures to replenish groundwater and support local communities."
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
                    primary="Water-Efficient Irrigation"
                    secondary="Caps promotes the adoption of water-efficient irrigation techniques like drip irrigation and sprinkler systems."
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
                    <SpaIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Water Conservation"
                    secondary="Caps implements water conservation measures in agriculture, industry, and households to reduce water wastage."
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
                    primary="Alternative Water Sources"
                    secondary="Caps explores and promotes the use of alternative water sources like treated wastewater and desalination."
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
                    primary="Energy-Efficient Water Treatment"
                    secondary="Caps promotes the use of energy-efficient technologies in water treatment and distribution systems."
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
                    primary="Groundwater Recharge"
                    secondary="Caps works on projects that enhance groundwater recharge through techniques like percolation tanks and artificial recharge structures."
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

              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mt: { xs: 3, md: 4 },
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                }}
              >
                Climate-Smart Agriculture Practices
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <SchoolIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Training and Capacity Building"
                    secondary="Caps approaches to conduct workshops, training sessions, and field demonstrations to educate farmers on climate-smart agriculture practices, including water-efficient techniques."
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
                    <ScienceIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Research and Development"
                    secondary="Caps tries to collaborates with scientists and researchers to identify and disseminate best practices in climate-smart agriculture, tailored to specific local contexts."
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
                    primary="Promoting Drought-Resistant Varieties"
                    secondary="Caps encourages the adoption of drought-resistant crop varieties that require less water."
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

            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                }}
              >
                Community Engagement and Advocacy
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <HandshakeIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community-Based Conservation"
                    secondary="Caps often involves local communities in the planning, implementation, and monitoring of water conservation and management projects."
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
                    primary="Policy Advocacy"
                    secondary="Caps advocates for policies that support sustainable water management at local, national, and international levels."
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
                    <NaturePeopleIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Raising Awareness"
                    secondary="Caps raises public awareness about the importance of water conservation and the impacts of climate change on water resources."
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

export default ClimateSmartWaterPlant;
