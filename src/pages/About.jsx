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
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import asad2 from "../assets/asad3.jpeg";
import nasirImg from "../assets/nasir.jpeg";
import khokonImg from "../assets/khokon.jpeg";
import jakariaImg from "../assets/jakaria.jpeg";
import morshedaImg from "../assets/morsheda.jpeg";
import taslimaImg from "../assets/taslima.png";
import masudImg from "../assets/masud.jpeg";
import mamunImg from "../assets/mamun.jpeg";

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

// Team card styling (same as Teams page)
const AboutTeamCard = styled(Card)(({ theme }) => ({
  height: "100%",
  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "16px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
  },
  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    "& .avatar": {
      transform: "scale(1.1)",
    },
  },
}));

const AboutAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  margin: "0 auto 20px",
  border: "4px solid #fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  fontSize: "2rem",
  fontWeight: 600,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "& img": {
    objectFit: "cover",
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-16px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "2px",
  },
}));

function About() {
  // Team Members Data (same as Teams page)
  const teamMembers = [
    {
      name: "Muhammad Asaduzzaman",
      position: "Director General",
      email: "muhammad.asaduzzaman@capsbd.org",
      department: "Leadership",
      description:
        "Leading the overall strategic direction and management of CAPS. Overseeing all programs and ensuring organizational excellence.",
      img: asad2,
      avatar: "MA",
    },
    {
      name: "Muhammad Golam Sarwar",
      position: "Chairperson",
      email: "muhammad.golam.sarwar@capsbd.org",
      department: "Leadership",
      description:
        "Providing strategic leadership and governance oversight. Ensuring CAPS mission alignment and sustainable growth.",
      img: undefined,
      avatar: "MGS",
    },
    {
      name: "Md. Masud Rana Milton",
      position: "Director, Climate Finance & Resource Mobilization",
      email: "masud.hossain@capsbd.org",
      department: "Climate Finance",
      description:
        "Leading climate finance initiatives and resource mobilization strategies for sustainable development projects.",
      img: masudImg,
      avatar: "MRM",
    },
    {
      name: "Taslima Khanam",
      position: "Director, Education & Training",
      email: "taslima.khanam@capsbd.org",
      department: "Education & Training",
      description:
        "Leading climate-smart education initiatives and capacity building programs for sustainable community development.",
      img: taslimaImg,
      avatar: "TK",
    },
    {
      name: "M. Nasir Hossain Panchayet",
      position: "Executive Director",
      email: "nasir.hossain@capsbd.org",
      department: "Executive",
      description:
        "Managing day-to-day operations and implementing strategic initiatives for climate adaptation and community resilience.",
      img: nasirImg,
      avatar: "NHP",
    },
    {
      name: "Muhammad Siddikur Rahman Khokon",
      position: "Executive Director",
      email: "siddikur.rahman@capsbd.com",
      department: "Executive",
      description:
        "Coordinating executive operations and strategic planning for sustainable development and climate resilience programs.",
      img: khokonImg,
      avatar: "MSRK",
    },
    {
      name: "Muhammad Jakaria Hossain",
      position: "Director, Administration & Operation",
      email: "jakaria.hossain@capsbd.com",
      department: "Administration & Operation",
      description:
        "Managing administrative functions and operational efficiency to support CAPS programs and initiatives.",
      img: jakariaImg,
      avatar: "MKH",
    },
    {
      name: "Mst. Morshada",
      position: "Director, Community Mobilization",
      email: "morshada@capsbd.com",
      department: "Community Mobilization",
      description:
        "Engaging communities and building partnerships for effective climate adaptation and sustainable development initiatives.",
      img: morshedaImg,
      avatar: "MM",
    },
    {
      name: "Muhammad Al Mamun Hawlader",
      position: "Director, Project Management",
      email: "al.mamun@capsbd.com",
      department: "Project Management",
      description:
        "Overseeing project planning, implementation, and monitoring to ensure successful delivery of climate adaptation programs.",
      img: mamunImg,
      avatar: "MAH",
    },
  ];

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
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: { xs: 2, md: 3 },
              letterSpacing: 1,
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.5rem",
                lg: "3rem",
              },
            }}
          >
            About Green Future Initiative
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: { xs: "100%", sm: "600px", md: "720px" },
              mx: "auto",
              color: "text.secondary",
              mb: { xs: 3, md: 5 },
              fontWeight: 500,
              lineHeight: 1.6,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              px: { xs: 2, sm: 0 },
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
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: { xs: 6, md: 10 } }}
          >
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Container>
                  <Box>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        color: "primary.main",
                        fontWeight: "bold",
                        mb: { xs: 2, md: 4 },
                        fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                      }}
                    >
                      Our Goals
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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
                      for and adjust to the unavoidable impacts of climate
                      change. These plans aim to reduce vulnerability, build
                      resilience, and integrate adaptation into various sectors
                      and levels of governance. They often involve a combination
                      of infrastructural, institutional, behavioral, and
                      nature-based solutions. Our specialty is in the point....{" "}
                      <br /> <br />
                      A. Limited cost, service more <br />
                      B. Small work, total solution <br />
                      C. Area small, full support, achievement 100%
                      <br /> <br />
                      Based on the point <strong>B+C,</strong> we declare a
                      small community having Min20, Max50 houses and then
                      following the point A we emphasize on cost management and
                      try to be a sustainable Development Partner providing more
                      social development support within our limit for the people
                      of the country specially, coastal districts, as a whole
                      Lower Southern Part of Bangladesh that can be go under
                      water for climate change impact predicted by Scientists.{" "}
                      <br /> <br />
                      Education Program is the Mother program of all programs,
                      bearing the sense, <strong>Caps</strong> takes{" "}
                      <strong> Climate Smart Education </strong> program first
                      among the 40 programs of Climate Adaptation Plan sothat
                      all the programs can be launched fruitfully one after one
                      through Education program as guardians make connections
                      and keep the connections with Educational Institutions.
                      Based on B+C, Caps sets up a CLC-Community Learning Centre
                      in the proposed community for all types of Education, for
                      all age's people. Caps works in the root of climate change
                      impact and under goes Nature Based Solution for
                      sustainable development of the most vulnerable coastal
                      poor people of southern part of Bangladesh. It's our Goal.{" "}
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
                      resilience. <br /> This can include <br />{" "}
                      Infrastructural: Building seawalls, flood defenses, and
                      resilient infrastructure. <br />
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
                      effectiveness of adaptation measures and making
                      adjustments as needed. <br /> <br />{" "}
                      <b>Examples of Climate Adaptation Plans:</b> <br />{" "}
                      <b>National Adaptation Plans (NAPs):</b> These are
                      country-led strategies that outline how countries will
                      adapt to climate change in the medium and long term.{" "}
                      <br /> <b>Community-Based Adaptation (CBA):</b> <br />
                      These initiatives empower vulnerable communities to adapt
                      to climate change impacts through participatory planning
                      and action. <br />
                      <b>City-Level Adaptation Plans: </b> <br /> Many cities
                      are developing their own plans to address climate risks
                      specific to their urban environment. <br /> <br />
                      <b>Importance of Climate Adaptation Plans:</b> <br />
                      <b>Reducing Vulnerability:</b> <br /> Adaptation plans
                      help communities and societies become more resilient to
                      the impacts of climate change. <br />
                      <b>
                        Protecting Livelihoods and Infrastructure:
                      </b> <br /> Adaptation measures can safeguard livelihoods,
                      infrastructure, and economic activity. <br />
                      <b>Building a Sustainable Future:</b> <br /> Climate
                      adaptation is crucial for achieving sustainable
                      development goals and ensuring a healthy planet for future
                      generations.
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
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

                    <Box sx={{ mt: { xs: 3, md: 5 } }}>
                      <Chip
                        label="Climate Action"
                        color="primary"
                        sx={{
                          mr: { xs: 1, sm: 2 },
                          mb: 2,
                          fontSize: { xs: "0.8rem", sm: "1rem" },
                          py: 1,
                        }}
                      />
                      <Chip
                        label="Education"
                        color="secondary"
                        sx={{
                          mr: { xs: 1, sm: 2 },
                          mb: 2,
                          fontSize: { xs: "0.8rem", sm: "1rem" },
                          py: 1,
                        }}
                      />
                      <Chip
                        label="Healthcare"
                        color="success"
                        sx={{
                          mr: { xs: 1, sm: 2 },
                          mb: 2,
                          fontSize: { xs: "0.8rem", sm: "1rem" },
                          py: 1,
                        }}
                      />
                      <Chip
                        label="Rural Development"
                        color="info"
                        sx={{
                          mr: { xs: 1, sm: 2 },
                          mb: 2,
                          fontSize: { xs: "0.8rem", sm: "1rem" },
                          py: 1,
                        }}
                      />
                    </Box>
                  </Box>
                </Container>
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
                    height="400"
                    image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    alt="Team working together"
                  />
                </Card>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </SectionBox>

      {/* Key Approaches Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: { xs: 4, md: 8 },
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Key Approaches of the Society
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "text.primary",
              textAlign: "justify",
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            Our comprehensive approach to climate adaptation encompasses
            multiple strategies designed to build resilience and promote
            sustainable development. We focus on{" "}
            <strong>Vulnerability Assessment</strong> to identify communities
            and sectors most at risk from climate change impacts like sea-level
            rise, extreme weather events, and water scarcity. Our{" "}
            <strong>Risk Management</strong> strategies involve developing and
            implementing measures to reduce vulnerability and build resilience
            through infrastructural improvements, institutional reforms, and
            behavioral changes.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "text.primary",
              textAlign: "justify",
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            <strong>Adaptive Capacity Building</strong> is central to our
            mission, as we work to enhance communities' ability to respond to
            and recover from climate impacts. We implement{" "}
            <strong>Ecosystem-Based Adaptation</strong> solutions, utilizing
            green infrastructure, restoring wetlands, and promoting sustainable
            land management practices. Our{" "}
            <strong>Infrastructure Development</strong> focuses on building
            climate-resilient structures that can withstand extreme weather
            events while minimizing environmental impact.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "text.primary",
              textAlign: "justify",
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            We emphasize <strong>Policy and Governance</strong> by incorporating
            climate adaptation considerations into development plans, policies,
            and programs at all levels. <strong>Community Engagement</strong> is
            fundamental to our approach, as we involve vulnerable communities,
            local governments, civil society organizations, and other
            stakeholders in the planning and implementation process. Our{" "}
            <strong>Early Warning Systems</strong> help communities prepare for
            and respond to climate-related disasters effectively.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "text.primary",
              textAlign: "justify",
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            <strong>Water Resource Management</strong> strategies address the
            critical challenges of water scarcity and flooding through
            sustainable practices and infrastructure. We promote{" "}
            <strong>Agricultural Diversification</strong> to help farmers adapt
            to changing climate conditions and maintain food security.{" "}
            <strong>Coastal Protection</strong> measures safeguard vulnerable
            coastal communities from sea-level rise and storm surges.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "text.primary",
              textAlign: "justify",
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            Our <strong>Urban Green Spaces</strong> initiatives create resilient
            urban environments that can withstand climate impacts while
            providing multiple benefits to communities.{" "}
            <strong>Disaster Preparedness</strong> programs ensure communities
            are ready to respond to climate-related emergencies. We focus on{" "}
            <strong>Protecting Lives and Livelihoods</strong> by implementing
            measures that safeguard both human well-being and economic
            stability.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "text.primary",
              textAlign: "justify",
              maxWidth: { xs: "100%", sm: "800px", md: "900px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            Through <strong>Reducing Economic Losses</strong>, we help
            communities minimize the financial impact of climate change while
            building more resilient economic systems. Our ultimate goal is{" "}
            <strong>Building Climate-Resilient Societies</strong> that can
            thrive despite climate challenges. We work towards{" "}
            <strong>Achieving Sustainable Development Goals</strong> by
            integrating climate action with broader development objectives,
            ensuring that our efforts contribute to a more sustainable and
            equitable future for all.
          </Typography>
        </Container>
      </AltSectionBox>

      {/* Timeline Section */}
      <SectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: { xs: 4, md: 8 },
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Our Journey
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                year: "2020",
                title: "Foundation",
                description:
                  "Started with a vision to create sustainable change in rural communities through climate action and education.",
              },
              {
                year: "2021",
                title: "First Community Project",
                description:
                  "Successfully implemented our first climate adaptation project in a coastal village, benefiting over 200 families.",
              },
              {
                year: "2022",
                title: "Expansion",
                description:
                  "Expanded our programs to 15 communities across the region, focusing on education and healthcare initiatives.",
              },
              {
                year: "2023",
                title: "Innovation Hub",
                description:
                  "Launched our community learning centers, providing education and skills training to over 1,000 students.",
              },
              {
                year: "2024",
                title: "Future Vision",
                description:
                  "Continuing to expand our impact, reaching more communities and developing new sustainable solutions.",
              },
            ].map(({ year, title, description }, idx) => (
              <Grid item xs={12} md={6} lg={4} key={idx}>
                <TimelineCard>
                  <TimelineDot />
                  <CardContent sx={{ pl: 6, pr: 3, py: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "primary.main",
                        fontWeight: "bold",
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                      }}
                    >
                      {year}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </TimelineCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionBox>

      {/* Values Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "primary.main",
              mb: { xs: 4, md: 8 },
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {[
              {
                title: "Sustainability",
                desc: "We believe in creating lasting solutions that benefit both current and future generations.",
              },
              {
                title: "Community",
                desc: "Every decision we make is guided by the needs and aspirations of the communities we serve.",
              },
              {
                title: "Innovation",
                desc: "We continuously seek new and creative ways to address complex environmental and social challenges.",
              },
              {
                title: "Integrity",
                desc: "We maintain the highest standards of transparency and accountability in all our operations.",
              },
              {
                title: "Equity",
                desc: "We ensure that our programs benefit all members of society, especially the most vulnerable.",
              },
              {
                title: "Collaboration",
                desc: "We work with partners, governments, and communities to maximize our collective impact.",
              },
            ].map(({ title, desc }, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <ValueCard>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "1.1rem", sm: "1.3rem" },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "0.8rem", sm: "0.875rem" },
                    }}
                  >
                    {desc}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Team Section */}
      <AltSectionBox sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <SectionHeader>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#1e3c72",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              Our Leadership Team
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Meet the dedicated professionals leading our mission for
              sustainable development and environmental protection
            </Typography>
          </SectionHeader>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <AboutTeamCard>
                  <CardContent sx={{ textAlign: "center", p: 4 }}>
                    <AboutAvatar
                      className="avatar"
                      src={member.img}
                      alt={member.name}
                    >
                      {member.avatar}
                    </AboutAvatar>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "#1e3c72",
                        fontSize: { xs: "1.2rem", md: "1.3rem" },
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "#667eea",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Chip
                      label={member.department}
                      sx={{
                        mb: 3,
                        backgroundColor: "rgba(102, 126, 234, 0.1)",
                        color: "#667eea",
                        fontWeight: 600,
                        borderRadius: "20px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: "#666",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {member.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pt: 2,
                        borderTop: "1px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#888",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                        }}
                      >
                        <strong>Email:</strong> {member.email}
                      </Typography>
                    </Box>
                  </CardContent>
                </AboutTeamCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AltSectionBox>

      {/* Testimonials Section */}
      <SectionBox sx={{ width: "100%", backgroundColor: "#e3f2fd" }}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "primary.main",
              mb: { xs: 4, md: 8 },
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            What Our Supporters Say
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
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
                    sx={{
                      fontStyle: "italic",
                      mb: 3,
                      color: "text.secondary",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    "{quote}"
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
                  >
                    {role}
                  </Typography>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionBox>

      {/* Call to Action Section */}
    </Box>
  );
}

export default About;
