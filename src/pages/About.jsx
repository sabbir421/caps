import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "#f8f9fa",
  width: "100%",
}));

const AltSectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "white",
  width: "100%",
}));

const TimelineCard = styled(Card)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  "&::before": {
    content: '""',
    position: "absolute",
    left: "20px",
    top: "60px",
    bottom: "-30px",
    width: "3px",
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
    borderRadius: 2,
  },
  "&:last-child::before": {
    display: "none",
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "15px",
  top: "20px",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  border: `3px solid ${theme.palette.background.paper}`,
  zIndex: 2,
  boxShadow: "0 0 6px rgba(25, 118, 210, 0.7)",
}));

// New card for values/testimonials
const ValueCard = styled(Card)(({ theme }) => ({
  height: "100%",
  textAlign: "center",
  padding: theme.spacing(4),
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
  maxWidth: 400,
  margin: "auto",
}));

function About() {
  return (
    <Box
      sx={{
        width: "100%",
        pt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        scrollBehavior: "smooth",
      }}
    >
      {/* Hero Section */}
      <AltSectionBox sx={{ width: "100%", pb: 10 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 3,
              letterSpacing: 1,
            }}
          >
            About Green Future Initiative
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 720,
              mx: "auto",
              color: "text.secondary",
              mb: 5,
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            We are a dedicated non-profit committed to creating sustainable
            change in rural communities through climate action, education, and
            healthcare initiatives. Join us in our mission to build a greener,
            healthier future.
          </Typography>
        </Container>
      </AltSectionBox>

      {/* Mission & Vision Section */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={8}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 10 }}
          >
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
                  >
                    Our Goals
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      mb: 4,
                      color: "text.primary",
                      textAlign: "justify",
                    }}
                  >
                    Caps || Climate Adaptation Plan Society has designed a
                    comprehensive strategy to help communities as well as
                    societies adapt to the impacts of climate change. The
                    Society outlines strategies and actions, takes to prepare
                    for and adjust to the unavoidable impacts of climate change.
                    These plans aim to reduce vulnerability, build resilience,
                    and integrate adaptation into various sectors and levels of
                    governance. They often involve a combination of
                    infrastructural, institutional, behavioral, and nature-based
                    solutions. Our specialty is in the point.... <br /> <br />
                    A. Limited cost, service more <br />
                    B. Small work, total solution <br />
                    C. Area small, full support, achievement 100%
                    <br /> <br />
                    Based on the point <strong>B+C,</strong>  we declare a small community having
                    Min20, Max50 houses and then following the point A we
                    emphasize on cost management and try to be a sustainable
                    Development Partner providing more social development
                    support within our limit for the people of the country
                    specially, coastal districts, as a whole Lower Southern Part
                    of Bangladesh that can be go under water for climate change
                    impact predicted by Scientists. <br /> <br />
                    Education Program is the Mother program of all programs,
                    bearing the sense, Caps takes Climate Smart Education
                    program first among the 40 programs of Climate Adaptation
                    Plan sothat all the programs can be launched fruitfully one
                    after one through Education program as guardians make
                    connections and keep the connections with Educational
                    Institutions. Based on B+C, Caps sets up a CLC-Community
                    Learning Centre in the proposed community for all types of
                    Education, for all age’s people. Caps works in the root of
                    climate change impact and under goes Nature Based Solution
                    for sustainable development of the most vulnerable coastal
                    poor people of southern part of Bangladesh. It’s our Goal.{" "}
                    <br /> <br />
                    <strong>
                      Key components of Climate Adaptation Plan Society:
                    </strong>{" "}
                    <br />
                    <b>Vulnerability Assessment:</b> <br /> Identifying
                    communities and sectors most at risk from climate change
                    impacts like sea-level rise, extreme weather events, and
                    water scarcity. <br />
                    <b>Adaptation Strategies:</b> <br /> Developing and
                    implementing measures to reduce vulnerability and build
                    resilience. <br /> This can include: <br /> Infrastructural:
                    Building seawalls, flood defenses, and resilient
                    infrastructure. <br />
                    Institutional: Developing new insurance schemes, early
                    warning systems, and climate-resilient building codes.{" "}
                    <br />
                    Behavioral: Changing crop planting times, promoting water
                    conservation, and adopting climate-smart agricultural
                    practices. <br /> Nature-based Solutions: Utilizing green
                    infrastructure, restoring wetlands, and promoting
                    sustainable land management. <br /> Integration into
                    Planning: Incorporating climate adaptation considerations
                    into national and local development plans, policies, and
                    programs. <br /> Stakeholder Engagement: Involving
                    vulnerable communities, local governments, civil society
                    organizations, and other stakeholders in the planning and
                    implementation process. <br />{" "}
                    <b>Monitoring and Evaluation:</b> <br /> Tracking the
                    effectiveness of adaptation measures and making adjustments
                    as needed. <br /> <br />{" "}
                    <b>Examples of Climate Adaptation Plans:</b> <br />{" "}
                    <b>National Adaptation Plans (NAPs):</b> These are
                    country-led strategies that outline how countries will adapt
                    to climate change in the medium and long term. <br />{" "}
                    <b>Community-Based Adaptation (CBA):</b> <br />
                    These initiatives empower vulnerable communities to adapt to
                    climate change impacts through participatory planning and
                    action. <br />
                    <b>City-Level Adaptation Plans: </b> <br /> Many cities are
                    developing their own plans to address climate risks specific
                    to their urban environment. <br /> <br />
                    <b>Importance of Climate Adaptation Plans:</b> <br />
                    <b>Reducing Vulnerability:</b> <br /> Adaptation plans help
                    communities and societies become more resilient to the
                    impacts of climate change. <br />
                    <b>
                      Protecting Livelihoods and Infrastructure:
                    </b> <br /> Adaptation measures can safeguard livelihoods,
                    infrastructure, and economic activity. <br /> Building
                    <b>Building a Sustainable Future:</b> <br /> Climate
                    adaptation is crucial for achieving sustainable development
                    goals and ensuring a healthy planet for future generations.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "text.primary",
                      textAlign: "justify",
                    }}
                  >
                    Since our founding, we've worked with over 50 rural
                    communities across the country, implementing innovative
                    solutions for environmental conservation and community
                    development.
                  </Typography>

                  <Box sx={{ mt: 5 }}>
                    <Chip
                      label="Climate Action"
                      color="primary"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                    <Chip
                      label="Education"
                      color="secondary"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                    <Chip
                      label="Healthcare"
                      color="success"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                    <Chip
                      label="Rural Development"
                      color="info"
                      sx={{ mr: 2, mb: 2, fontSize: "1rem", py: 1 }}
                    />
                  </Box>
                </Box>
              </Fade>
            </Grid>

            <Grid item xs={12} md={6}>
              <Fade in timeout={1500}>
                <Card
                  sx={{
                    boxShadow: 6,
                    borderRadius: 4,
                    overflow: "hidden",
                    "& img": {
                      transition: "transform 0.5s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="450"
                    image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                    alt="Community meeting"
                  />
                </Card>
              </Fade>
            </Grid>
          </Grid>

          {/* Key Approaches Section */}
          <Box sx={{ mt: 8, mb: 8 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "primary.main",
                mb: 6,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Key Approaches of the Society
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.primary",
                textAlign: "justify",
                mb: 4,
              }}
            >
              Our comprehensive strategy integrates multiple approaches to build
              climate-resilient communities and achieve sustainable development
              goals. The Society employs a multifaceted approach encompassing{" "}
              <strong>Vulnerability Assessment</strong>,{" "}
              <strong>Risk Management</strong>, and{" "}
              <strong>Adaptive Capacity Building</strong> to identify and
              address the most pressing climate challenges. We implement{" "}
              <strong>Ecosystem-Based Adaptation</strong> strategies alongside{" "}
              <strong>Infrastructure Development</strong> to create sustainable
              solutions that work with nature rather than against it.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.primary",
                textAlign: "justify",
                mb: 4,
              }}
            >
              At the governance level, we focus on{" "}
              <strong>Policy and Governance</strong> reforms while ensuring{" "}
              <strong>Community Engagement</strong> remains at the heart of all
              our initiatives. Our <strong>Early Warning Systems</strong> and{" "}
              <strong>Disaster Preparedness</strong> programs help communities
              anticipate and respond to climate-related emergencies effectively.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.primary",
                textAlign: "justify",
                mb: 4,
              }}
            >
              In addressing resource management, we prioritize{" "}
              <strong>Water Resource Management</strong> and{" "}
              <strong>Agricultural Diversification</strong> to ensure food
              security and sustainable livelihoods. Our{" "}
              <strong>Coastal Protection</strong> initiatives and{" "}
              <strong>Urban Green Spaces</strong> development create resilient
              environments for both rural and urban communities.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "text.primary",
                textAlign: "justify",
                mb: 4,
              }}
            >
              The ultimate goals of our approach are{" "}
              <strong>Protecting Lives and Livelihoods</strong>,{" "}
              <strong>Reducing Economic Losses</strong>, and{" "}
              <strong>Building Climate-Resilient Societies</strong>. Through
              these integrated strategies, we work towards{" "}
              <strong>Achieving Sustainable Development Goals</strong> while
              ensuring no community is left behind in the face of climate
              change.
            </Typography>
          </Box>

          {/* Why Choose Us Section */}
          <Box sx={{ textAlign: "center", mb: 12 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
            >
              Why Choose Us?
            </Typography>
            <Grid
              container
              spacing={6}
              justifyContent="center"
              maxWidth="lg"
              mx="auto"
            >
              {[
                {
                  icon: "🌍",
                  title: "Global Impact",
                  description:
                    "We focus on sustainable projects with measurable positive effects worldwide.",
                },
                {
                  icon: "🤝",
                  title: "Community Driven",
                  description:
                    "Local participation and respect for indigenous knowledge is at the core of our work.",
                },
                {
                  icon: "💡",
                  title: "Innovative Solutions",
                  description:
                    "We use cutting-edge, scalable solutions tailored to each community’s unique needs.",
                },
              ].map(({ icon, title, description }, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <ValueCard>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                      {icon}
                    </Typography>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="primary"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {description}
                    </Typography>
                  </ValueCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </SectionBox>

      {/* Core Values Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 10, fontWeight: "bold" }}
          >
            Our Core Values
          </Typography>
          <Grid
            container
            spacing={6}
            justifyContent="center"
            maxWidth="lg"
            mx="auto"
          >
            {[
              {
                emoji: "🌱",
                title: "Sustainability",
                description:
                  "We create environmentally sustainable and economically viable solutions for long-term growth.",
              },
              {
                emoji: "🤝",
                title: "Community Partnership",
                description:
                  "We collaborate closely with local communities, respecting their knowledge and culture.",
              },
              {
                emoji: "🎯",
                title: "Impact-Driven",
                description:
                  "Every program is designed to create measurable, positive impacts on people and the environment.",
              },
            ].map(({ emoji, title, description }, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <ValueCard>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {emoji}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="primary"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {description}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Timeline Section */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 8, fontWeight: "bold" }}
          >
            Our Journey
          </Typography>
          <Box sx={{ maxWidth: "700px", mx: "auto" }}>
            {[
              {
                year: "2021 - Foundation",
                desc: "CAPS is founded with a vision to address climate change impact & Climate change and it's Impact, Adaptation and  vulnerable coastal development challeng,  ",
              },
              {
                year: "2023 - First Milestone",
                desc: "Successful governance of 27 community Learning Centre.",
              },
              {
                year: "2024 - Expansion",
                desc: "Successfully raise community awareness about Adaptation",
              },
              {
                year: "2030 - Future Vision",
                desc: "Sustainable climate Adaptation Development",
              },
            ].map(({ year, desc }, idx) => (
              <TimelineCard key={idx}>
                <TimelineDot />
                <CardContent sx={{ pl: 6 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {year}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {desc}
                  </Typography>
                </CardContent>
              </TimelineCard>
            ))}
          </Box>
        </Container>
      </SectionBox>

      {/* Team Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 8, fontWeight: "bold" }}
          >
            Meet Our Team
          </Typography>
          <Grid
            container
            spacing={6}
            justifyContent="center"
            maxWidth="lg"
            mx="auto"
          >
            {[
              {
                name: "Dr. Sarah Johnson",
                title: "Executive Director",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                desc: "15+ years experience in environmental conservation and rural development.",
              },
              {
                name: "Michael Chen",
                title: "Program Director",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
                desc: "Expert in community development and sustainable agriculture practices.",
              },
              {
                name: "Maria Rodriguez",
                title: "Education Coordinator",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
                desc: "Dedicated to improving educational access and quality in rural areas.",
              },
            ].map(({ name, title, img, desc }, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card
                  sx={{
                    textAlign: "center",
                    height: "100%",
                    boxShadow: 4,
                    borderRadius: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="320"
                    image={img}
                    alt={name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                      sx={{ fontStyle: "italic" }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Testimonials Section */}
      <SectionBox sx={{ width: "100%", backgroundColor: "#e3f2fd" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", mb: 8, fontWeight: "bold" }}
          >
            What Our Supporters Say
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                quote:
                  "Green Future Initiative has transformed our village with their sustainable programs. Their dedication is unmatched!",
                name: "Amina S.",
                role: "Community Leader",
              },
              {
                quote:
                  "I am proud to support an organization that truly listens and respects the communities it serves.",
                name: "James T.",
                role: "Donor",
              },
              {
                quote:
                  "Their education initiatives are changing lives, and their impact is visible everywhere.",
                name: "Linda K.",
                role: "Volunteer",
              },
            ].map(({ quote, name, role }, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <TestimonialCard>
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", mb: 3, color: "text.secondary" }}
                  >
                    “{quote}”
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {role}
                  </Typography>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionBox>

      {/* Call to Action Section */}
      <AltSectionBox sx={{ width: "100%", pt: 10, pb: 10 }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
          >
            Join Us in Making a Difference
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Your support helps us bring sustainable change to rural communities.
            Volunteer, donate, or partner with us today.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ px: 6, py: 1.8, fontWeight: 700, borderRadius: 3, mr: 3 }}
            href="/volunteer"
          >
            Volunteer
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ px: 6, py: 1.8, fontWeight: 700, borderRadius: 3 }}
            href="/donate"
          >
            Donate
          </Button>
        </Container>
      </AltSectionBox>
    </Box>
  );
}

export default About;
