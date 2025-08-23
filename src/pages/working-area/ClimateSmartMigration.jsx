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
import PublicIcon from "@mui/icons-material/Public";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InsightsIcon from "@mui/icons-material/Insights";
import PeopleIcon from "@mui/icons-material/People";
import GavelIcon from "@mui/icons-material/Gavel";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HandshakeIcon from "@mui/icons-material/Handshake";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PolicyIcon from "@mui/icons-material/Policy";

const ClimateSmartMigration = () => {
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
              Climate-Smart Migration
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ textAlign: "justify" }}
            >
              A strategy to adapt to and build resilience against climate change
              impacts.
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <img
              src="https://placehold.co/1200x500/E0F2F1/004D40?text=Managed+migration+for+resilience"
              alt="A community of people moving to a new, resilient area."
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
            CAPS (Climate Adaptation Plan Society) approaches **Climate-Smart
            Migration** as a strategy to adapt to the impacts of climate change.
            It involves planned and managed migration to reduce vulnerability
            and build resilience to climate-related risks. This can include
            supporting local climate adaptation efforts, promoting livelihood
            diversification, and facilitating migration from increasingly
            inhospitable areas.
          </Typography>

          <Grid container spacing={6} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Understanding Climate-Smart Migration
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Adaptation Strategy"
                    secondary="We recognize that for communities facing severe climate impacts, migration can be a necessary and viable adaptation strategy."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AssignmentTurnedInIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Planned and Managed"
                    secondary="We emphasize the need for planned migration, not forced displacement, to ensure the safety, well-being, and rights of migrants."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InsightsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Livelihood Diversification"
                    secondary="Migration provides opportunities for individuals to diversify their livelihoods and reduce their dependence on climate-sensitive sectors."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MonetizationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Remittances"
                    secondary="Migrants can contribute to climate resilience in their home communities through remittances, which are used to support adaptation efforts."
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
                Examples of Climate-Smart Migration
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HandshakeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Supporting Local Adaptation"
                    secondary="Investing in climate-resilient infrastructure and diversifying livelihoods to help people stay and thrive in vulnerable areas, reducing the need for migration."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Facilitated Migration"
                    secondary="Creating legal migration pathways, such as temporary and circular migration schemes, to provide safe and orderly options for those facing climate-related displacement."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountTreeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Planned Relocation"
                    secondary="In cases where areas become uninhabitable, we assist with planned relocation as a necessary strategy to protect affected populations."
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
              Challenges and Considerations
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CrisisAlertIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Risks and Vulnerabilities"
                  secondary="Migration can expose individuals to new risks, such as precarious living conditions, exploitation, and social marginalization."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Trapped Populations"
                  secondary="Some individuals may be unable to migrate due to poverty or lack of resources, leaving them vulnerable to climate impacts."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PolicyIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Need for Comprehensive Policies"
                  secondary="Effective strategies require comprehensive policies that address both the causes and consequences of climate-related displacement, ensuring the protection of migrants' rights."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Diversity3Icon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="The Role of the International Community"
                  secondary="Addressing climate migration requires international cooperation, coordination, and adequate financing to support vulnerable countries and communities."
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartMigration;
