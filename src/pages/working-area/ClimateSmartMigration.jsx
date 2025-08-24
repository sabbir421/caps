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
              Climate-Smart Migration
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
              A strategy to adapt to and build resilience against climate change
              impacts.
            </Typography>
          </Box>

          <Box sx={{ mb: { xs: 4, md: 6 } }}>
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
            sx={{
              mt: { xs: 3, md: 4 },
              textAlign: "justify",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            CAPS (Climate Adaptation Plan Society) approaches **Climate-Smart
            Migration** as a strategy to adapt to the impacts of climate change.
            It involves planned and managed migration to reduce vulnerability
            and build resilience to climate-related risks. This can include
            supporting local climate adaptation efforts, promoting livelihood
            diversification, and facilitating migration from increasingly
            inhospitable areas.
          </Typography>

          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            sx={{ mt: { xs: 4, md: 6 } }}
          >
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
                Understanding Climate-Smart Migration
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <PublicIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Adaptation Strategy"
                    secondary="We recognize that for communities facing severe climate impacts, migration can be a necessary and viable adaptation strategy."
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
                    <AssignmentTurnedInIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Planned and Managed"
                    secondary="Climate-smart migration involves careful planning and management to ensure that migration is safe, orderly, and beneficial for both migrants and host communities."
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
                    <InsightsIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Risk Reduction"
                    secondary="The goal is to reduce vulnerability and build resilience to climate-related risks through strategic relocation and adaptation."
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
                    primary="Livelihood Diversification"
                    secondary="Supporting communities in developing alternative income sources and skills to adapt to changing environmental conditions."
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
                Examples of Climate-Smart Migration
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
                    primary="Supporting Local Adaptation"
                    secondary="Investing in climate-resilient infrastructure and diversifying livelihoods to help people stay and thrive in vulnerable areas, reducing the need for migration."
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
                    <GavelIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Facilitated Migration"
                    secondary="Creating legal migration pathways, such as temporary and circular migration schemes, to provide safe and orderly options for those facing climate-related displacement."
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
                    <AccountTreeIcon
                      color="primary"
                      sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Planned Relocation"
                    secondary="In cases where areas become uninhabitable, we assist with planned relocation as a necessary strategy to protect affected populations."
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

          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
              }}
            >
              Challenges and Considerations
            </Typography>
            <List>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <CrisisAlertIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Risks and Vulnerabilities"
                  secondary="Migration can expose individuals to new risks, such as precarious living conditions, exploitation, and social marginalization."
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
                  <PeopleIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Trapped Populations"
                  secondary="Some individuals may be unable to migrate due to poverty or lack of resources, leaving them vulnerable to climate impacts."
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
                  <PolicyIcon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Need for Comprehensive Policies"
                  secondary="Effective strategies require comprehensive policies that address both the causes and consequences of climate-related displacement, ensuring the protection of migrants' rights."
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
                  <Diversity3Icon
                    color="primary"
                    sx={{ fontSize: { xs: "1.5rem", md: "1.8rem" } }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="The Role of the International Community"
                  secondary="Addressing climate migration requires international cooperation, coordination, and adequate financing to support vulnerable countries and communities."
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
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ClimateSmartMigration;
