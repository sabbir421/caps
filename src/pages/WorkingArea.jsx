import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import { styled, useTheme } from "@mui/material/styles";
import { Fade } from "@mui/material";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PublicIcon from "@mui/icons-material/Public";

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: "#f8f9fa",
  width: "100%",
}));

const AltSectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14, 0),
  backgroundColor: "white",
  width: "100%",
}));

const StatCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  height: "100%",
  boxShadow: theme.shadows[4],
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[8],
  },
}));

const InfoCard = styled(Card)(({ theme }) => ({
  height: "100%",
  boxShadow: theme.shadows[4],
  display: "flex",
  flexDirection: "column",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: 48,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

function WorkingArea() {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", pt: 8 }}>
      {/* Hero Section */}
      <AltSectionBox>
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  textAlign: "center",
                  mb: 6,
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  letterSpacing: "0.07em",
                }}
              >
                Our Working Areas
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  mb: 8,
                  maxWidth: "850px",
                  mx: "auto",
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                }}
              >
                We operate across diverse rural communities, implementing
                sustainable solutions for climate change, education, and
                healthcare challenges to create lasting impact.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </AltSectionBox>

      {/* Geographic Coverage */}
      <SectionBox>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 8,
              color: theme.palette.primary.main,
              fontWeight: "bold",
              letterSpacing: "0.05em",
            }}
          >
            Geographic Coverage
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {/* Rural Communities */}
            <Grid item xs={12} md={6}>
              <InfoCard>
                <CardMedia
                  component="img"
                  height="320"
                  image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Rural village"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    <NaturePeopleIcon
                      sx={{ verticalAlign: "middle", mr: 1, fontSize: 30 }}
                    />
                    Rural Communities
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Working directly with rural villages to implement
                    sustainable farming practices, renewable energy solutions,
                    and community-based conservation programs.
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label="50+ Villages"
                      color="primary"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Sustainable Farming"
                      color="success"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Renewable Energy"
                      color="info"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    <strong>Focus:</strong> Climate-resilient agriculture, solar
                    power adoption, water conservation, and community-led
                    environmental initiatives.
                  </Typography>
                </CardContent>
              </InfoCard>
            </Grid>

            {/* Educational Institutions */}
            <Grid item xs={12} md={6}>
              <InfoCard>
                <CardMedia
                  component="img"
                  height="320"
                  image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80"
                  alt="School children"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    <SchoolIcon
                      sx={{ verticalAlign: "middle", mr: 1, fontSize: 30 }}
                    />
                    Educational Institutions
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Partnering with schools in rural areas to provide quality
                    education, environmental awareness programs, and digital
                    learning resources.
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label="25+ Schools"
                      color="primary"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Digital Literacy"
                      color="secondary"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Environmental Education"
                      color="success"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    <strong>Focus:</strong> School infrastructure, teacher
                    training, environmental curriculum, and technology
                    integration.
                  </Typography>
                </CardContent>
              </InfoCard>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Healthcare Centers */}
      <AltSectionBox>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 8,
              color: theme.palette.primary.main,
              fontWeight: "bold",
              letterSpacing: "0.05em",
            }}
          >
            Healthcare Centers
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            {/* Rural Healthcare Facilities */}
            <Grid item xs={12} md={6}>
              <InfoCard>
                <CardMedia
                  component="img"
                  height="320"
                  image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Healthcare"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    <LocalHospitalIcon
                      sx={{ verticalAlign: "middle", mr: 1, fontSize: 30 }}
                    />
                    Rural Healthcare Facilities
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ textAlign: "justify" }}
                  >
                    Supporting rural healthcare facilities with medical
                    supplies, health education programs, and mobile medical
                    units.
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label="15+ Centers"
                      color="primary"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Mobile Camps"
                      color="secondary"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Health Education"
                      color="info"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    <strong>Focus:</strong> Maternal and child health, nutrition
                    programs, disease prevention, and mental health support.
                  </Typography>
                </CardContent>
              </InfoCard>
            </Grid>

            {/* Mobile Medical Units */}
            <Grid item xs={12} md={6}>
              <InfoCard>
                <CardMedia
                  component="img"
                  height="320"
                  image="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Mobile medical unit"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    <PublicIcon
                      sx={{ verticalAlign: "middle", mr: 1, fontSize: 30 }}
                    />
                    Mobile Medical Units
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Deploying mobile medical units to reach remote communities
                    and provide essential healthcare services where access is
                    limited.
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label="5 Mobile Units"
                      color="primary"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Remote Access"
                      color="secondary"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                    <Chip
                      label="Emergency Care"
                      color="error"
                      sx={{ mr: 1, mb: 1, fontWeight: "bold" }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    <strong>Focus:</strong> Emergency care, vaccinations, health
                    screenings, and community health awareness campaigns.
                  </Typography>
                </CardContent>
              </InfoCard>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Regional Focus */}
      <SectionBox>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 8,
              color: theme.palette.primary.main,
              fontWeight: "bold",
              letterSpacing: "0.05em",
            }}
          >
            Regional Focus Areas
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={4}>
              <StatCard>
                <CardContent>
                  <Typography sx={{ mb: 2 }}>
                    <Box
                      component="span"
                      sx={{
                        fontSize: 48,
                        display: "inline-block",
                        mb: 1,
                        color: theme.palette.primary.main,
                      }}
                    >
                      🏔️
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Mountain Regions
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Working in high-altitude communities to address climate
                    change impacts, water scarcity, and sustainable agriculture
                    practices.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    <strong>Communities:</strong> 15 villages
                    <br />
                    <strong>Focus:</strong> Water conservation, terrace farming,
                    renewable energy
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard>
                <CardContent>
                  <Typography sx={{ mb: 2 }}>
                    <Box
                      component="span"
                      sx={{
                        fontSize: 48,
                        display: "inline-block",
                        mb: 1,
                        color: theme.palette.primary.main,
                      }}
                    >
                      🌾
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Agricultural Plains
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Supporting farming communities with sustainable agriculture
                    techniques, crop diversification, and climate-resilient
                    farming methods.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    <strong>Communities:</strong> 25 villages
                    <br />
                    <strong>Focus:</strong> Organic farming, crop rotation, soil
                    conservation
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard>
                <CardContent>
                  <Typography sx={{ mb: 2 }}>
                    <Box
                      component="span"
                      sx={{
                        fontSize: 48,
                        display: "inline-block",
                        mb: 1,
                        color: theme.palette.primary.main,
                      }}
                    >
                      🌊
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Coastal Areas
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Addressing climate change impacts in coastal communities
                    through mangrove restoration, disaster preparedness, and
                    sustainable fishing.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    <strong>Communities:</strong> 10 villages
                    <br />
                    <strong>Focus:</strong> Mangrove restoration, disaster
                    resilience, eco-tourism
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Impact Statistics */}
      <AltSectionBox>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 8,
              color: theme.palette.primary.main,
              fontWeight: "bold",
              letterSpacing: "0.05em",
            }}
          >
            Impact Across Our Working Areas
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    50+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Rural Communities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    Actively working across diverse regions
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    25+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Schools Supported
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    Educational infrastructure and programs
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    15+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Healthcare Centers
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    Medical facilities and mobile units
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard>
                <CardContent>
                  <Typography
                    variant="h3"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    100%
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Coverage
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontStyle: "italic" }}
                  >
                    All regions have active programs
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
          </Grid>
        </Container>
      </AltSectionBox>
    </Box>
  );
}

export default WorkingArea;
