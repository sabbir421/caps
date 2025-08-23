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
import ScienceIcon from "@mui/icons-material/Science";
import PeopleIcon from "@mui/icons-material/People";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import WavesIcon from "@mui/icons-material/Waves";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GrassIcon from "@mui/icons-material/Grass";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import HubIcon from "@mui/icons-material/Hub";
import HandshakeIcon from "@mui/icons-material/Handshake";

const ClimateSmartAgriculture = () => {
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
              Climate-smart agriculture (CSA)
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              CAPS (Climate Adaptation Plan Society) Approaches at Climate-smart
              agriculture (CSA) is a method of farming that aims to sustainably
              increase productivity, enhance resilience to climate change, and
              reduce greenhouse gas emissions.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/F0F4C3/689F38?text=Climate-Smart+Farming"
              alt="A green agricultural field with modern irrigation, representing sustainable farming practices."
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            It's a holistic approach that integrates agriculture development
            with climate responsiveness, ultimately contributing to food
            security and broader development goals. CSA practices include
            adapting to changing conditions, improving soil health, and reducing
            emissions.
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key aspects of Climate-Smart Agriculture
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AgricultureIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Productivity"
                    secondary="CSA focuses on increasing agricultural output in a sustainable manner, ensuring food security for a growing population."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FilterDramaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Adaptation"
                    secondary="CSA involves implementing strategies to help agriculture adapt to the impacts of climate change, such as extreme weather events and changing rainfall patterns."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SpaIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Mitigation"
                    secondary="CSA aims to reduce greenhouse gas emissions from agriculture through various practices like improved land management and reduced fertilizer use."
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
                In Bangladesh, CSA is particularly relevant
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Bangladesh is a country highly vulnerable to climate change impacts." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HandshakeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="CSA can help farmers in Bangladesh adapt to these challenges and improve their livelihoods." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WbIncandescentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="There are ongoing efforts to disseminate knowledge about CSA and promote its adoption among farmers." />
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
              Examples of CSA practices
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <WaterDropIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Improved water management"
                  secondary="Implementing efficient irrigation systems and water conservation techniques."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GrassIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Soil conservation"
                  secondary="Using practices like no-till farming and cover cropping to improve soil health and fertility."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AgricultureIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Climate-resilient crops and varieties"
                  secondary="Selecting and cultivating crops that are more tolerant to drought, floods, and other climate-related stresses."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <HubIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Integrated pest management"
                  secondary="Employing strategies to control pests and diseases in a sustainable way, minimizing the use of harmful chemicals."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NaturePeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Diversification of farming systems"
                  secondary="Encouraging a mix of crops, livestock, and other agricultural activities to reduce risks and improve resilience."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartAgriculture;
