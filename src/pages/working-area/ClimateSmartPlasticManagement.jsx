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
import RecyclingIcon from "@mui/icons-material/Recycling";
import GavelIcon from "@mui/icons-material/Gavel";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const ClimateSmartPlasticManagement = () => {
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
              Climate-smart Plastic Management
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Minimizing the environmental impact of plastic throughout its
              lifecycle.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Sustainable+plastic+management"
              alt="A visual representation of sustainable plastic management."
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
            CAPS (Climate Adaptation Plan Society) aims at **Climate-smart
            plastic management** by developing strategies to minimize the
            environmental impact of plastic throughout its lifecycle. This
            approach considers both climate change mitigation and adaptation,
            focusing on reducing plastic consumption, improving recycling and
            waste management, and transitioning to sustainable alternatives. By
            addressing plastic pollution and climate change together, we can
            work towards a more sustainable and resilient future.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Aspects of Climate-Smart Plastic Management
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <RecyclingIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reducing Plastic Consumption"
                    secondary="Minimizing the production and use of single-use plastics and promoting reusable alternatives to encourage responsible consumption."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Improving Recycling and Waste Management"
                    secondary="Enhancing recycling infrastructure, developing innovative technologies, and implementing effective systems to reduce plastic leakage into the environment."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WbIncandescentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Transitioning to Sustainable Alternatives"
                    secondary="Exploring and adopting biodegradable or compostable plastics, developing alternative packaging solutions, and investing in research of sustainable materials."
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
                Interconnectedness of Plastic Pollution and Climate Change
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocalFloristIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="GHG Emissions"
                    secondary="The production, use, and disposal of plastics contribute significantly to greenhouse gas (GHG) emissions, exacerbating climate change."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Environmental Impacts"
                    secondary="Plastic pollution negatively impacts ecosystems, including oceans, which play a crucial role in regulating the climate."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WbIncandescentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Synergistic Solutions"
                    secondary="Addressing plastic pollution and climate change together leads to more effective solutions. For example, reducing plastic production also reduces GHG emissions."
                  />
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
              Specific Actions
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Individual Actions"
                  secondary="Individuals can reduce their plastic footprint by using reusable bags and water bottles, avoiding single-use plastics, and supporting businesses that prioritize sustainability."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StoreIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Corporate Actions"
                  secondary="Businesses can adopt sustainable packaging, invest in recycling technologies, and engage consumers in sustainability efforts."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Policy Interventions"
                  secondary="Governments can implement policies such as Extended Producer Responsibility (EPR), plastic taxes, and regulations to encourage sustainable practices."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartPlasticManagement;
