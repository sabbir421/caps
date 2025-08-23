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
import WcIcon from "@mui/icons-material/Wc";
import AccessibleIcon from "@mui/icons-material/Accessible";
import GavelIcon from "@mui/icons-material/Gavel";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ScienceIcon from "@mui/icons-material/Science";
import SchoolIcon from "@mui/icons-material/School";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";

const ClimateSmartProgramsForPeopleWithDisabilities = () => {
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
              Climate-smart Programs for People with Disabilities
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              Ensuring disability inclusion in climate resilience strategies.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Inclusive+community+working+together"
              alt="A diverse group of people, including individuals with disabilities, working together in a community setting."
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
            CAPS (Climate Adaptation Plan Society) aims to incorporate
            disability inclusion into all its climate-smart activities and
            community benefits. As per CAPS’s regulations, disability inclusion
            will be in a ratio of 10:1, meaning one person with disabilities
            will be involved for every ten capable people. Climate-smart
            adaptation for disabled people involves integrating their specific
            needs and vulnerabilities into climate change resilience strategies.
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            This approach includes ensuring accessible infrastructure,
            developing inclusive early warning systems, and promoting livelihood
            diversification. It also requires actively involving disabled people
            in the planning and implementation of adaptation measures, ensuring
            their voices are heard and their rights are protected.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Key Goals of the Project
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Diversity3Icon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Social Integration"
                    secondary="CAPS works to reduce stigma and create opportunities for social interaction and personal development, organizing community events, workshops, and support groups."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Legal and Financial Support"
                    secondary="We offer assistance with legal matters, such as accessing disability benefits and managing financial obligations."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccessibleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Rehabilitation and Training"
                    secondary="We provide tailored rehabilitation programs, including vocational training and therapy, to help individuals acquire necessary skills and improve functional abilities."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScienceIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Promoting Innovation"
                    secondary="CAPS is involved in developing innovative technologies and strategies to address challenges faced by people with disabilities, enhancing support systems and accessibility."
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
                Core Activities
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HandshakeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Community-Based Rehabilitation"
                    secondary="Our focus is on empowering individuals to live independently and participate fully in their communities through local rehabilitation programs."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PsychologyIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Advocacy and Awareness"
                    secondary="We raise awareness about disability issues, advocate for policy changes, and promote inclusive practices in various sectors, including education, healthcare, and employment."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmojiEventsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Livelihood Programs"
                    secondary="We create inclusive livelihood programs that offer skills training, job placement assistance, and support for self-employment to enhance economic independence."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Inclusive Education"
                    secondary="We work to ensure access to quality education for children with disabilities through inclusive schooling, providing necessary support and resources."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CrisisAlertIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Humanitarian Relief"
                    secondary="CAPS incorporates disability-inclusive approaches in humanitarian relief efforts, ensuring that people with disabilities are not overlooked during emergencies or crises."
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

export default ClimateSmartProgramsForPeopleWithDisabilities;
