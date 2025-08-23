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
import SpaIcon from "@mui/icons-material/Spa";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PolicyIcon from "@mui/icons-material/Policy";
import ScienceIcon from "@mui/icons-material/Science";
import PeopleIcon from "@mui/icons-material/People";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import InsightsIcon from "@mui/icons-material/Insights";
import ForestIcon from "@mui/icons-material/Forest";
import ParkIcon from "@mui/icons-material/Park";
import GavelIcon from "@mui/icons-material/Gavel";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import HubIcon from "@mui/icons-material/Hub";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const ClimateSmartWildlifeAdaptation = () => {
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
              Climate-Smart Wildlife Adaptation
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              CAPS (Climate Adaptation Plan Society) has taken some initiatives
              focused on incorporating climate change considerations into
              wildlife conservation and management practices. This involves
              adapting to the impacts of climate change on species and
              ecosystems while also mitigating the drivers of climate change.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/D1C4E9/4527A0?text=Adapting+Wildlife+to+a+Changing+Climate"
              alt="Wildlife in a natural habitat, representing climate adaptation efforts."
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Such an organization would likely focus on strategies that help
            wildlife and their habitats become more resilient to climate change
            impacts, such as extreme weather events, habitat loss, and changes
            in food availability. CAPS follows the National Wildlife Federation
            (NWF), World Wildlife Fund (WWF), Wildlife Conservation Society
            (WCS), and Point Blue Conservation Science (PRBO) as leaders in
            promoting climate-smart conservation.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                1. Climate-Smart Conservation Principles
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <InsightsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Understanding Climate Impacts"
                    secondary="Assessing how climate change affects specific species, ecosystems, and human communities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountTreeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integrating Climate into Planning"
                    secondary="Incorporating climate change considerations into all stages of conservation planning and implementation."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SpaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Resilience"
                    secondary="Focusing on strategies that enhance the ability of species and ecosystems to withstand climate-related disturbances."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CrisisAlertIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Addressing Secondary Stressors"
                    secondary="Recognizing that climate change can exacerbate existing threats like habitat degradation and disease."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NaturePeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Nature-based Solutions"
                    secondary="Utilizing natural systems and processes to adapt to climate change, such as restoring wetlands or creating wildlife corridors."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PeopleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Engagement"
                    secondary="Working with local communities to develop and implement adaptation strategies that benefit both wildlife and people."
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
                2. Specific Activities
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ForestIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Habitat Restoration and Management"
                    secondary="Restoring degraded habitats, creating wildlife corridors, and managing forests to enhance their resilience to climate change."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ParkIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Species-Specific Adaptation"
                    secondary="Developing strategies tailored to the needs of particular species, such as providing artificial shade for heat-sensitive species or creating artificial nesting sites."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScienceIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Monitoring and Research"
                    secondary="Conducting research to understand the impacts of climate change on wildlife and to evaluate the effectiveness of adaptation strategies."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PolicyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Policy and Advocacy"
                    secondary="Working with governments and other organizations to promote policies that support climate-smart wildlife conservation."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HubIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community Outreach and Education"
                    secondary="Raising awareness about the impacts of climate change on wildlife and empowering communities to take action."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate-Smart Communities"
                    secondary="Promoting climate-smart practices in urban areas to benefit both people and wildlife."
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
                3. Key Considerations
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FilterDramaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Balancing Mitigation and Adaptation"
                    secondary="Climate-smart approaches recognize the need to both reduce greenhouse gas emissions (mitigation) and adapt to the unavoidable impacts of climate change (adaptation)."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WbIncandescentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Adaptive Management"
                    secondary="Conservation efforts need to be flexible and adaptable, as climate change impacts may be uncertain and evolve over time."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HubIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ecosystem-based Approaches"
                    secondary="Focusing on the health and resilience of entire ecosystems, rather than individual species, is often a more effective way to adapt to climate change."
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

export default ClimateSmartWildlifeAdaptation;
