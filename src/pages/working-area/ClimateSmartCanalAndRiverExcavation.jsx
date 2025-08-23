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
import WavesIcon from "@mui/icons-material/Waves";
import PublicIcon from "@mui/icons-material/Public";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HubIcon from "@mui/icons-material/Hub";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SpaIcon from "@mui/icons-material/Spa";
import GrassIcon from "@mui/icons-material/Grass";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import ScienceIcon from "@mui/icons-material/Science";
import PeopleIcon from "@mui/icons-material/People";
import ConstructionIcon from "@mui/icons-material/Construction";
import SettingsIcon from "@mui/icons-material/Settings";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";

const ClimateSmartCanalAndRiverExcavation = () => {
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
              Climate-smart Canal and River Excavation
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              CAPS (Climate Adaptation Plan Society) approaches Climate-smart
              canal and river excavation involves strategically dredging and
              reshaping waterways to improve water management, enhance
              resilience to climate change impacts, and potentially mitigate
              some of those impacts. This approach can help with flood control,
              drainage, irrigation, and even provide ecosystem benefits.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E3F2FD/1565C0?text=Excavating+for+a+Smarter+Future"
              alt="An image of a river being excavated to improve water management."
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Here's a breakdown of how it works:
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                1. Improved Water Management:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WavesIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Flood Control"
                    secondary="Excavating canals and rivers can increase their capacity to carry excess water during heavy rainfall or storm surges, reducing the risk of flooding."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Drainage"
                    secondary="Proper excavation can improve drainage in low-lying areas, preventing waterlogging and making land more suitable for agriculture or other uses."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AgricultureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Irrigation"
                    secondary="Canals can be designed to deliver water more efficiently to farms, especially in arid or semi-arid regions, reducing water waste and improving agricultural productivity."
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
                2. Climate Resilience:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SpaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Drought Mitigation"
                    secondary="In some cases, excavated canals can be used to store water during the rainy season, which can then be released during drier periods, providing a buffer against drought."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WbIncandescentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Salinity Management"
                    secondary="In coastal areas, excavation can help manage salinity intrusion by flushing out saltwater and improving drainage of freshwater."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GrassIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ecosystem Restoration"
                    secondary="By carefully reshaping waterways and restoring connectivity, excavation can help improve riverine ecosystems and enhance biodiversity."
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
                3. Climate Change Mitigation (Indirect):
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reduced Greenhouse Gas Emissions"
                    secondary="Improved water management through excavation can lead to more efficient agricultural practices, potentially reducing greenhouse gas emissions associated with agriculture."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Carbon Sequestration"
                    secondary="Restoring wetlands and other riparian areas alongside excavated canals can enhance carbon sequestration, helping to offset greenhouse gas emissions."
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
                4. Key Considerations:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ConstructionIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Planning and Design"
                    secondary="Careful planning and design are crucial to ensure that excavation projects are effective and avoid unintended consequences, such as increased erosion or disruption of natural water flows."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Engagement"
                    secondary="Involving local communities in the planning and implementation of excavation projects is essential to ensure that they are sustainable and meet local needs."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SettingsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Monitoring and Maintenance"
                    secondary="Regular monitoring and maintenance of excavated canals and rivers are necessary to ensure their continued effectiveness and to address any potential issues that may arise."
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

export default ClimateSmartCanalAndRiverExcavation;
