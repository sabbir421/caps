import React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkingArea from "./pages/WorkingArea";
import WhatWeDo from "./pages/WhatWeDo";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";

// Working Area Sub-pages
import ClimateAction from "./pages/working-area/ClimateAction";
import Education from "./pages/working-area/Education";
import Healthcare from "./pages/working-area/Healthcare";
import Agriculture from "./pages/working-area/Agriculture";
import WaterManagement from "./pages/working-area/WaterManagement";
import RenewableEnergy from "./pages/working-area/RenewableEnergy";

// What We Do Sub-pages
import ProgramsOverview from "./pages/what-we-do/ProgramsOverview";
import CommunityDevelopment from "./pages/what-we-do/CommunityDevelopment";
import ResearchInnovation from "./pages/what-we-do/ResearchInnovation";
import CapacityBuilding from "./pages/what-we-do/CapacityBuilding";
import AdvocacyPolicy from "./pages/what-we-do/AdvocacyPolicy";
import Partnerships from "./pages/what-we-do/Partnerships";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Working Area Routes */}
          <Route path="/working-area" element={<WorkingArea />} />
          <Route
            path="/working-area/climate-action"
            element={<ClimateAction />}
          />
          <Route path="/working-area/education" element={<Education />} />
          <Route path="/working-area/healthcare" element={<Healthcare />} />
          <Route path="/working-area/agriculture" element={<Agriculture />} />
          <Route path="/working-area/water" element={<WaterManagement />} />
          <Route path="/working-area/energy" element={<RenewableEnergy />} />

          {/* What We Do Routes */}
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/what-we-do/programs" element={<ProgramsOverview />} />
          <Route
            path="/what-we-do/community"
            element={<CommunityDevelopment />}
          />
          <Route path="/what-we-do/research" element={<ResearchInnovation />} />
          <Route path="/what-we-do/capacity" element={<CapacityBuilding />} />
          <Route path="/what-we-do/advocacy" element={<AdvocacyPolicy />} />
          <Route path="/what-we-do/partnerships" element={<Partnerships />} />

          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
