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
              Climate Smart Water Plant
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              CAPS (Climate Adaptation Plan Society) focuses on creating more
              resilient and sustainable water systems in the face of climate
              change. This involves adapting to the impacts of climate change,
              such as increased droughts, floods, and changes in water quality,
              while also mitigating greenhouse gas emissions associated with
              water management.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
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

                      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Key aspects include promoting water conservation, improving water
              use efficiency, exploring alternative water sources, and
              implementing climate-smart water management practices.
            </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Goals of the Program
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Rainwater Harvesting"
                    secondary="Caps approaches to construct and revive rainwater harvesting structures to replenish groundwater and support local communities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WbIncandescentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Water-Efficient Irrigation"
                    secondary="Caps promotes techniques like drip irrigation and precision irrigation to maximize water use efficiency in agriculture, especially during droughts or erratic rainfall."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SpaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Restoration of Freshwater Bodies"
                    secondary="Caps focuses on reviving and restoring lakes, ponds, and other freshwater habitats that have been degraded due to human activities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BoltIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Check Dam Construction"
                    secondary="Caps approaches to facilitate the construction of check dams and other water harvesting structures to improve water availability for drinking and irrigation."
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
                Groundwater Recharge
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <GrassIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Groundwater Recharge"
                    secondary="Caps works on projects that enhance groundwater recharge through techniques like percolation tanks and artificial recharge structures."
                  />
                </ListItem>
              </List>

              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 4 }}
              >
                Climate-Smart Agriculture Practices
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Training and Capacity Building"
                    secondary="Caps approaches to conduct workshops, training sessions, and field demonstrations to educate farmers on climate-smart agriculture practices, including water-efficient techniques."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScienceIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Research and Development"
                    secondary="Caps tries to collaborates with scientists and researchers to identify and disseminate best practices in climate-smart agriculture, tailored to specific local contexts."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AgricultureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Drought-Resistant Varieties"
                    secondary="Caps encourages the adoption of drought-resistant crop varieties that require less water."
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Community Engagement and Advocacy
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HandshakeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community-Based Conservation"
                    secondary="Caps often involves local communities in the planning, implementation, and monitoring of water conservation and management projects."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Policy Advocacy"
                    secondary="Caps advocates for policies that support sustainable water management at local, national, and international levels."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Raising Awareness"
                    secondary="Caps raises public awareness about the importance of water conservation and the impacts of climate change on water resources."
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
