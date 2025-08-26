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
import TeamsPage from "./pages/TeamsPage";

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
import ClimateSmartCommunityEducation from "./pages/working-area/ClimateSmartCommunityEducation";
import ClimateSmartChildprotection from "./pages/working-area/ClimateSmartChildprotection";
import ClimateSmartCodingEducation from "./pages/working-area/ClimateSmartCodingEducation";
import ClimateSmartProgramsForPeopleWithDisabilities from "./pages/working-area/ClimateSmartProgramsForPeopleWithDisabilities";
import ClimateSmartWomenEntrepreneurs from "./pages/working-area/ClimateSmartWomenEntrepreneurs";
import PrioritizingClimateVulnerablePeople from "./pages/working-area/PrioritizingClimateVulnerablePeople";
import ClimateSmartMigration from "./pages/working-area/ClimateSmartMigration";
import ClimateSmartCommunityGarbageManagement from "./pages/working-area/ClimateSmartCommunityGarbageManagement";
import ClimateSmartPlasticManagement from "./pages/working-area/ClimateSmartPlasticManagement";
import ClimateSmartAdaptationForSeaSpecies from "./pages/working-area/ClimateSmartAdaptationForSeaSpecies";
import ClimateSmartSundarbans from "./pages/working-area/ClimateSmartSundarbans";
import ClimateSmartAfforestation from "./pages/working-area/ClimateSmartAfforestation";
import ClimateSmartWildlifeAdaptation from "./pages/working-area/ClimateSmartWildlifeAdaptation";
import ClimateSmartWilderness from "./pages/working-area/ClimateSmartWilderness";
import ClimateSmartFishermanResettlement from "./pages/working-area/ClimateSmartFishermanResettlement";
import ClimateSmartResettlementForWomen from "./pages/working-area/ClimateSmartResettlementForWomen";
import ClimateSmartAgroForestry from "./pages/working-area/ClimateSmartAgroForestry";
import ClimateSmartAgriculture from "./pages/working-area/ClimateSmartAgriculture";
import ClimateSmartIrrigation from "./pages/working-area/ClimateSmartIrrigation";
import ClimateSmartWaterPlant from "./pages/working-area/ClimateSmartWaterPlant";
import ClimateSmartCanalAndRiverExcavation from "./pages/working-area/ClimateSmartCanalAndRiverExcavation";
import ClimateSmartAquaculture from "./pages/working-area/ClimateSmartAquaculture";
import GlobalGreenAmbassador from "./pages/working-area/GlobalGreenAmbassador";
import ClimateSmartTechnicalEducation from "./pages/working-area/ClimateSmartTechnicalEducation";
import ClimateSmartHousing from "./pages/working-area/ClimateSmartHousing";
import ClimateSmartSchooling from "./pages/working-area/ClimateSmartSchooling";
import ClimateSmartClub from "./pages/working-area/ClimateSmartClub";
import ClimateAdaptiveEnglishLearning from "./pages/working-area/ClimateAdaptiveEnglishLearning";

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

          {/*new Working Area Routes */}
          <Route
            path="/working-area/community-education/community-education"
            element={<ClimateSmartCommunityEducation />}
          />
          <Route
            path="/working-area/community-education/child-protection"
            element={<ClimateSmartChildprotection />}
          />
          <Route
            path="/working-area/community-education/coding-education"
            element={<ClimateSmartCodingEducation />}
          />
          <Route
            path="/working-area/community-education/disabilities"
            element={<ClimateSmartProgramsForPeopleWithDisabilities />}
          />
          <Route
            path="/working-area/community-education/women-entrepreneurs"
            element={<ClimateSmartWomenEntrepreneurs />}
          />
          <Route
            path="/working-area/community-education/vulnerable-people"
            element={<PrioritizingClimateVulnerablePeople />}
          />
          <Route
            path="/working-area/community-education/migration"
            element={<ClimateSmartMigration />}
          />

          {/* ******** */}
          <Route
            path="/working-area/waste-management/garbage-management"
            element={<ClimateSmartCommunityGarbageManagement />}
          />
          <Route
            path="/working-area/waste-management/plastic-management"
            element={<ClimateSmartPlasticManagement />}
          />
          <Route
            path="/working-area/marine-life/sea-species"
            element={<ClimateSmartAdaptationForSeaSpecies />}
          />
          <Route
            path="/working-area/coastal-forests/sundarbans"
            element={<ClimateSmartSundarbans />}
          />
          <Route
            path="/working-area/coastal-forests/afforestation"
            element={<ClimateSmartAfforestation />}
          />
          <Route
            path="/working-area/coastal-forests/wildlife"
            element={<ClimateSmartWildlifeAdaptation />}
          />
          <Route
            path="/working-area/coastal-forests/wilderness"
            element={<ClimateSmartWilderness />}
          />
          <Route
            path="/working-area/coastal-forests/fisherman-resettlement"
            element={<ClimateSmartFishermanResettlement />}
          />
          <Route
            path="/working-area/coastal-forests/women-resettlement"
            element={<ClimateSmartResettlementForWomen />}
          />
          <Route
            path="/working-area/agriculture-water/agro-forestry"
            element={<ClimateSmartAgroForestry />}
          />
          <Route
            path="/working-area/agriculture-water/csa"
            element={<ClimateSmartAgriculture />}
          />
          <Route
            path="/working-area/agriculture-water/irrigation"
            element={<ClimateSmartIrrigation />}
          />
          <Route
            path="/working-area/agriculture-water/water-plant"
            element={<ClimateSmartWaterPlant />}
          />
          <Route
            path="/working-area/agriculture-water/canal-river"
            element={<ClimateSmartCanalAndRiverExcavation />}
          />
          <Route
            path="/working-area/agriculture-water/aquaculture"
            element={<ClimateSmartAquaculture />}
          />
          <Route
            path="/working-area/global-green-ambassador"
            element={<GlobalGreenAmbassador />}
          />
          <Route
            path="/working-area/climate-smart-technical-education"
            element={<ClimateSmartTechnicalEducation />}
          />
          <Route
            path="/working-area/climate-smart-housing"
            element={<ClimateSmartHousing />}
          />
          <Route
            path="/working-area/climate-smart-schooling"
            element={<ClimateSmartSchooling />}
          />
          <Route
            path="/working-area/climate-smart-club"
            element={<ClimateSmartClub />}
          />
          <Route
            path="/working-area/climate-adaptive-english-learning"
            element={<ClimateAdaptiveEnglishLearning />}
          />

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
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
