import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Collapse,
  Container,
  TextField,
  Stack,
} from "@mui/material";
import {
  Nature,
  School,
  LocalHospital,
  EmojiPeople,
  Opacity,
  Bolt,
  Group,
  Public,
  Agriculture,
  WaterDrop,
  Forest,
  Diversity3,
  Recycling,
  Business,
  Park,
  Home,
  Groups,
  Language,
  Hub,
  EmojiEvents,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const workAreas = [
  // Core working areas

  // Community Education cluster
  {
    title: "Community Education",
    description: "Lifelong learning and awareness for resilient communities.",
    icon: <School sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8=",
    link: "/working-area/community-education/community-education",
  },
  {
    title: "Child Protection",
    description: "Ensuring child safety, rights and inclusive development.",
    icon: <EmojiPeople sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://www.shutterstock.com/image-vector/care-kids-vommunity-protecting-children-600nw-2301756285.jpg",
    link: "/working-area/community-education/child-protection",
  },
  {
    title: "Coding Education",
    description: "Digital skills for the next generation of innovators.",
    icon: <School sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://media.istockphoto.com/id/1363276509/photo/teacher-giving-computer-science-lecture-to-diverse-multiethnic-group-of-female-and-male.jpg?s=612x612&w=0&k=20&c=iHDI7pI98XJfh95nFw-wT9L9jYr0IzSBYB53riWOVsk=",
    link: "/working-area/community-education/coding-education",
  },
  {
    title: "People with Disabilities",
    description: "Accessible programs and inclusive opportunities.",
    icon: <Diversity3 sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://www.shutterstock.com/image-photo/disabled-person-wheelchair-friend-on-260nw-2331518057.jpg",
    link: "/working-area/community-education/disabilities",
  },
  {
    title: "Women Entrepreneurs",
    description: "Supporting women-led enterprises and leadership.",
    icon: <EmojiPeople sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
    link: "/working-area/community-education/women-entrepreneurs",
  },
  {
    title: "Vulnerable People",
    description: "Prioritizing climate-vulnerable communities.",
    icon: <Group sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://img.freepik.com/free-vector/autumn-people-outside-illustration_52683-70764.jpg?semt=ais_hybrid&w=740&q=80",
    link: "/working-area/community-education/vulnerable-people",
  },
  {
    title: "Migration",
    description: "Safe and inclusive climate-smart migration pathways.",
    icon: <Public sx={{ fontSize: 40, color: "#667eea" }} />,
    image: "https://www.sei.org/wp-content/uploads/2020/12/mbd0040.jpg",
  },
  {
    title: "Climate Smart Campus & Class Room",
    description: "Creating sustainable and resilient learning environments.",
    icon: <School sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/working-area/climate-smart-campus-classroom",
  },
  {
    title: "Climate-Smart Extracurricular Activities",
    description: "Enhancing climate understanding through hands-on activities.",
    icon: <School sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
    link: "/working-area/climate-smart-extracurricular-activities",
  },
  {
    title: "Climate-Smart Online Education",
    description: "Digital learning for climate change impact recovery.",
    icon: <School sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    link: "/working-area/climate-smart-online-education",
  },
  {
    title: "Climate-Smart Ecotourism Park",
    description:
      "Sustainable tourism for climate adaptation and community resilience.",
    icon: <Park sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/working-area/climate-smart-ecotourism-park",
  },
  {
    title: "Climate Sustainability",
    description:
      "Building a sustainable future through climate adaptation and mitigation.",
    icon: <Nature sx={{ fontSize: 40, color: "#4caf50" }} />,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/working-area/climate-sustainability",
  },
  {
    title: "Climate-smart Technical Education",
    description:
      "Integrating climate adaptation strategies into technical and vocational training.",
    icon: <School sx={{ fontSize: 40, color: "#1976d2" }} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    link: "/working-area/climate-smart-technical-education",
  },
  {
    title: "Climate-smart Housing",
    description:
      "Building resilient homes that withstand climate impacts while minimizing environmental footprint.",
    icon: <Home sx={{ fontSize: 40, color: "#8e24aa" }} />,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
    link: "/working-area/climate-smart-housing",
  },
  {
    title: "Climate-smart Schooling",
    description:
      "Education that equips students with knowledge, skills, and values to address climate change.",
    icon: <School sx={{ fontSize: 40, color: "#ff6f00" }} />,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/working-area/climate-smart-schooling",
  },
  {
    title: "Climate Smart Club",
    description:
      "Extracurricular groups focused on educating students about climate change and empowering them to take action.",
    icon: <Groups sx={{ fontSize: 40, color: "#2e7d32" }} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    link: "/working-area/climate-smart-club",
  },
  {
    title: "Climate Adaptive English Learning",
    description:
      "Integrating climate change education into English language learning to equip individuals with knowledge and skills.",
    icon: <Language sx={{ fontSize: 40, color: "#1976d2" }} />,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
    link: "/working-area/climate-adaptive-english-learning",
  },
  {
    title: "Climate-smart Community Learning Research Centre",
    description:
      "Community-driven learning and research centers that empower communities to address climate change challenges.",
    icon: <Hub sx={{ fontSize: 40, color: "#6a1b9a" }} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    link: "/working-area/community-learning-research-centre",
  },
  {
    title: "Climate-smart Language Learning (CLL)",
    description:
      "Integrating climate action and environmental awareness into language education for enhanced skills and opportunities.",
    icon: <Language sx={{ fontSize: 40, color: "#d84315" }} />,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2022&q=80",
    link: "/working-area/climate-smart-language-learning",
  },
  {
    title: "Global Green Ambassador Program for Climate Adaptation",
    description:
      "Empowering individuals to drive positive change in their communities through climate adaptation and sustainability initiatives.",
    icon: <EmojiEvents sx={{ fontSize: 40, color: "#2e7d32" }} />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    link: "/working-area/global-green-ambassador-program",
  },

  // Waste Management
  {
    title: "Garbage Management",
    description: "Community-led solid waste solutions.",
    icon: <Recycling sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://uffizio.com/wp-content/themes/uffizio/use-case/img/Waste.jpg",
    link: "/working-area/waste-management/garbage-management",
  },
  {
    title: "Plastic Management",
    description: "Reducing plastic pollution and improving recycling.",
    icon: <Recycling sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://blog.ipleaders.in/wp-content/uploads/2020/07/5f12ff_a2ee15db9f884ea684e2d61e454fae03_mv2.jpg",
    link: "/working-area/waste-management/plastic-management",
  },

  // Marine Life
  {
    title: "Sea Species Adaptation",
    description: "Protecting marine biodiversity from climate impacts.",
    icon: <Public sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUVr8uOkGneefqZ3ANv7nnMoIcgI-evb_CQ&s",
    link: "/working-area/marine-life/sea-species",
  },

  // Coastal Forests
  {
    title: "Sundarbans",
    description: "Conserving the world's largest mangrove forest.",
    icon: <Forest sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://i.pinimg.com/736x/a2/ae/95/a2ae95d0323a21ae969312ae657eabfe.jpg",
    link: "/working-area/coastal-forests/sundarbans",
  },
  {
    title: "Afforestation",
    description: "Restoring forests to build resilience.",
    icon: <Forest sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzj6qcCnn7jP5kWDNnpiKMFn1bBNsF2mXJ3A&s",
    link: "/working-area/coastal-forests/afforestation",
  },
  {
    title: "Wildlife Adaptation",
    description: "Helping wildlife adapt to changing climates.",
    icon: <Nature sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://www.sciencing.com/sciencing/adaptations-animals-tropical-rainforest-6862950/20d066f0a3454d84823e0ed1eaf35b1d.jpg",
    link: "/working-area/coastal-forests/wildlife",
  },
  {
    title: "Wilderness",
    description: "Protecting wild landscapes and ecosystems.",
    icon: <Nature sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "/working-area/coastal-forests/wilderness",
  },
  {
    title: "Fisherman Resettlement",
    description: "Climate-resilient livelihoods for fishing communities.",
    icon: <Group sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfW9ZOIrDabSHw1pIFi5tlEvqghW6SEr6u8w&s",
    link: "/working-area/coastal-forests/fisherman-resettlement",
  },
  {
    title: "Women Resettlement",
    description: "Supporting women through safe resettlement initiatives.",
    icon: <Group sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://jsis.washington.edu/southasia/wp-content/uploads/sites/12/2023/12/Farrah-Hasan-interviews-migrants.png",
    link: "/working-area/coastal-forests/women-resettlement",
  },

  // Agriculture & Water Cluster
  {
    title: "Agro-Forestry",
    description:
      "Integrating trees with crops for productivity and resilience.",
    icon: <Agriculture sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://media.istockphoto.com/id/1280203624/photo/agroforestry.jpg?s=612x612&w=0&k=20&c=yOHed9ssGPObBvPP9Is7KuVU0_at5o5kT53cAdBbTPo=",
    link: "/working-area/agriculture-water/agro-forestry",
  },
  {
    title: "Climate-Smart Agriculture (CSA)",
    description: "Sustainable, efficient farming for changing climates.",
    icon: <Agriculture sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nwcM1eN75hVAE6uAIlSe629LBkr-fyrKYQ&s",
    link: "/working-area/agriculture-water/csa",
  },
  {
    title: "Irrigation",
    description: "Smart water use for agriculture and communities.",
    icon: <WaterDrop sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL0lycmlnYXRpb24uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
    link: "/working-area/agriculture-water/irrigation",
  },
  {
    title: "Water Plant",
    description: "Clean water access through treatment and distribution.",
    icon: <WaterDrop sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6ZEuu0QZjIK9tl4ZSxFD9jQ1dcIaac6piQ&s",
    link: "/working-area/agriculture-water/water-plant",
  },
  {
    title: "Canal & River Excavation",
    description: "Restoring waterways for flood control and irrigation.",
    icon: <WaterDrop sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://www.shutterstock.com/image-photo/big-powerful-excavator-digging-drainage-600nw-1390895063.jpg",
    link: "/working-area/agriculture-water/canal-river",
  },
  {
    title: "Aquaculture",
    description: "Fish and aquatic farming for resilient livelihoods.",
    icon: <Opacity sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://www.larive.com/wp-content/uploads/2023/06/Technology-image-01.jpg",
    link: "/working-area/agriculture-water/aquaculture",
  },

  // Volunteer & Community Engagement
  {
    title: "Climate-Smart Volunteer",
    description: "Empowering communities through active participation.",
    icon: <Group sx={{ fontSize: 40, color: "#667eea" }} />,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    link: "/working-area/climate-smart-volunteer",
  },
  {
    title: "Climate Smart Global Green Ambassador",
    description: "Promoting climate-smart solutions globally.",
    icon: <Public sx={{ fontSize: 40, color: "#f093fb" }} />,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/working-area/climate-smart-global-green-ambassador",
  },
];

const HomeContent = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const impactStats = [
    { number: "100K+", label: "People Reached", icon: Group },
    { number: "500+", label: "Projects", icon: Business },
    { number: "60+", label: "Districts", icon: Public },
    { number: "15+", label: "Years", icon: Nature },
  ];

  const successStories = [
    {
      title: "ইংরেজিতে অনর্গল কথা বলছে উপকূলের শিশুরা!",
      type: "facebook",
      iframe:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsomoynews.tv%2Fvideos%2F1837148566857222%2F&show_text=true&width=560&t=0",
      link: "https://www.facebook.com/share/p/1B5YCC9tqw/",
    },
    {
      title: "বড় শিক্ষক যখন ক্ষুদে শিক্ষকের ছাত্র!!",
      type: "facebook",
      iframe:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F1010617047570730%2F&show_text=true&width=267&t=0",
      link: "https://www.facebook.com/share/v/19g2zSP68z/",
    },
    {
      title: "মাইন্ড ম্যাথ। ব্রেইন ভালো করে দিনে দিনে...…",
      type: "facebook",
      iframe:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F718605014073531%2F&show_text=true&width=560&t=0",
      link: "https://www.facebook.com/share/v/173narxq7y/",
    },
    {
      title: "Climate change adapting peoples",
      type: "facebook",
      iframe:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1013351060215767%2F&show_text=true&width=267&t=0",
      link: "https://www.facebook.com/reel/1013351060215767",
    },
    {
      title: "Education for Climate Vulnerable Children. …",
      type: "facebook",
      iframe:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F1746989839199805%2F&show_text=true&width=560&t=0",
      link: "https://www.facebook.com/watch/?v=1746989839199805",
    },
    {
      title:
        "Polythene free Bangladesh, our target is to increase fertility of land and getting more crops.",
      type: "facebook",
      iframe:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F677712118025178%2F&show_text=true&width=560&t=0",
      link: "https://www.facebook.com/watch/?v=677712118025178",
    },
    {
      title:
        "ক্যাপস-এর অধীনে জলবায়ু পরিবর্তন ও এর নেতিবাচক প্রভাব থেকে জীবজগৎ কে বাঁচাতে কাজ করছে এক ঝাঁক নিবেদিত…",
      type: "facebook",
      iframe:
        "https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2F61572729269078%2Fvideos%2F1173940100758759%2F&show_text=true&width=560&t=0",
      link: "https://www.facebook.com/watch/?v=1173940100758759",
    },
  ];

  const partnerLogos = [
    "https://dummyimage.com/140x56/cccccc/ffffff&text=Partner+1",
    "https://dummyimage.com/140x56/cccccc/ffffff&text=Partner+2",
    "https://dummyimage.com/140x56/cccccc/ffffff&text=Partner+3",
    "https://dummyimage.com/140x56/cccccc/ffffff&text=Partner+4",
    "https://dummyimage.com/140x56/cccccc/ffffff&text=Partner+5",
    "https://dummyimage.com/140x56/cccccc/ffffff&text=Partner+6",
  ];

  const renderAreaCard = (area, idx) => (
    <Card
      key={idx}
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-6px) scale(1.03)",
          boxShadow: "0 8px 32px 0 rgba(102,126,234,0.16)",
        },
        background: "#fff",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={area.image}
          alt={area.title}
          sx={{
            height: 180,
            objectFit: "cover",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            width: "100%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 2,
            background: "rgba(255,255,255,0.85)",
            borderRadius: "50%",
            p: 1,
          }}
        >
          {area.icon}
        </Box>
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {area.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {area.description}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href={area.link}
          sx={{
            mt: "auto",
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );

  const firstBatch = workAreas.slice(0, 6);
  const remaining = workAreas.slice(6);

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.secondary }}>
      {/* We Believe Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          We Believe
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto" }}
        >
          We believe in empowering rural communities through climate action,
          education, healthcare, and sustainable development. Our mission is to
          build a brighter, more resilient future for all, leaving no one
          behind.
        </Typography>
      </Box>

      {/* Impact Stats */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="center">
            {impactStats.map((s, i) => (
              <Grid item xs={12} sm={6} md={3} key={`stat-${i}`}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.primary.main,
                      color: "#fff",
                      mb: 2,
                    }}
                  >
                    <s.icon />
                  </Box>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    color={theme.palette.primary.main}
                  >
                    {s.number}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {s.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Work Areas Section (Grid) */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Our Work Areas
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
        >
          We are dedicated to creating sustainable change in rural communities
          through climate action, education, healthcare, women empowerment, and
          more. Explore our key focus areas below.
        </Typography>

        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="center">
            {firstBatch.map((area, idx) => (
              <Grid item xs={12} sm={6} md={3} lg={4} key={`area-${idx}`}>
                {renderAreaCard(area, idx)}
              </Grid>
            ))}
          </Grid>

          {remaining.length > 0 && (
            <>
              <Button
                variant="text"
                color="primary"
                onClick={() => setShowMore((v) => !v)}
                sx={{ mt: 3, fontWeight: 700, textTransform: "none" }}
              >
                {showMore ? "Show Less" : "Show More"}
              </Button>

              <Collapse in={showMore} timeout={300} unmountOnExit>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={3} justifyContent="center">
                    {remaining.map((area, idx) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={4}
                        key={`more-${idx}`}
                      >
                        {renderAreaCard(area, idx + firstBatch.length)}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Collapse>
            </>
          )}
        </Container>
      </Box>

      {/* Success Stories */}
      <Box sx={{ py: 6, backgroundColor: "#fff" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
          >
            Success Stories
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {successStories.map((story, idx) => (
              <Grid item xs={12} md={4} key={`story-${idx}`}>
                <Card sx={{ height: "100%" }}>
                  {story.type === "facebook" ? (
                    <Box sx={{ p: 2 }}>
                      <iframe
                        src={story.iframe}
                        width="100%"
                        height="314"
                        style={{
                          border: "none",
                          overflow: "hidden",
                          borderRadius: "8px",
                        }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </Box>
                  ) : (
                    <CardMedia
                      component="img"
                      height={200}
                      image={story.image}
                      alt={story.title}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {story.title}
                    </Typography>
                    {story.quote && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        "{story.quote}"
                      </Typography>
                    )}
                    <Button href={story.link} variant="outlined" size="small">
                      {story.type === "facebook" ? "Watch Video" : "Read More"}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Partners */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "text.secondary", mb: 3 }}
          >
            Trusted by Partners and Supporters
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {partnerLogos.map((src, i) => (
              <Grid item key={`logo-${i}`}>
                <Box
                  component="img"
                  src={src}
                  alt={`Partner ${i + 1}`}
                  sx={{
                    height: 36,
                    filter: "grayscale(100%)",
                    opacity: 0.8,
                    transition: "all .2s",
                    "&:hover": { filter: "none", opacity: 1 },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ fontWeight: 700, px: 5, py: 1.5, borderRadius: 2 }}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default HomeContent;
