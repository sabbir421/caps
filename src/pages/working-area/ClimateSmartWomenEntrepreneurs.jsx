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
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const ClimateSmartWomenEntrepreneurs = () => {
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
              Climate-smart Women Entrepreneurs
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              Leading the charge in developing sustainable solutions for a
              greener future.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Women+working+in+a+sustainable+business"
              alt="A group of women collaborating on a sustainable project."
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
            CAPS (Climate Adaptation Plan Society) approaches **Climate-smart
            women entrepreneurs** as women who are leading the charge in
            developing and implementing sustainable solutions to address climate
            change. They are often involved in businesses that promote
            environmental sustainability, resource efficiency, and climate
            resilience. These entrepreneurs play a vital role in both mitigating
            climate change and adapting to its impacts, while also contributing
            to economic development and social empowerment.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Aspects of Their Work
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocalFloristIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Focus on Sustainability"
                    secondary="They work in sectors like renewable energy, sustainable agriculture, waste management, and water conservation, developing innovative solutions for a greener future."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Climate Resilience"
                    secondary="These entrepreneurs are at the forefront of developing and implementing strategies to help communities and businesses adapt to a changing climate, such as drought-resistant crops or water-efficient irrigation systems."
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
                Economic and Social Impact
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <MonetizationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Economic Empowerment"
                    secondary="Their businesses provide jobs, income generation, and economic opportunities, particularly in vulnerable communities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GroupsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Social Impact"
                    secondary="They often prioritize social equity and inclusion, ensuring that their businesses benefit marginalized communities and promote gender equality."
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

export default ClimateSmartWomenEntrepreneurs;
