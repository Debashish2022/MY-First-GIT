import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeJbs from "./screens/HomeJbs/HomeJbs";
import Footer from "./components/Footer/Footer";
import mail from "../src/assets/Group 1.png";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Privacypolicy from "./screens/PrivacyPolicy/Privacypolicy";
import Project from "./screens/Project/Project";
import Getintouch from "./screens/Getintouch/Getintouch";
import ServiceConstruction from "./screens/ServiceConstruction/ServiceConstruction";
import ServicesResidential from "./screens/ServicesResidential/ServicesResidential";
import ServiceFabrication from "./screens/ServiceFabrication/ServiceFabrication";
import ServiceFabricationms from "./screens/ServiceFabricationms/ServiceFabricationms";
import ServiceOffice from "./screens/ServiceOffice/ServiceOffice";
import ServiceRestaurant from "./screens/ServiceRestaurant/ServiceRestaurant";
import Servicegarden from "./screens/Servicegarden/Servicegarden";
import Serviceoutdoor from "./screens/Serviceoutdoor/Serviceoutdoor";
import Servicekitchen from "./screens/Servicekitchen/Servicekitchen";
import ServiceWardrobes from "./screens/ServiceWardrobes/ServiceWardrobes";
import ServiceFalse from "./screens/Servicefalse/ServiceFalse";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jbs.home" element={<HomeJbs />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/privacypolicy" element={<Privacypolicy/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/getintouch" element={<Getintouch/>}/>
        <Route path="/services" element={<ServiceConstruction/>} />
        <Route path="/fabrication" element={<ServiceFabrication/>} />
        <Route path="/fabricationms" element={<ServiceFabricationms/>} />
        <Route path="/restaurant" element={<ServiceRestaurant/>} />
        <Route path="/garden" element={<Servicegarden/>} />
        <Route path="/outdoor" element={<Serviceoutdoor/>} />
        <Route path="/kitchen" element={<Servicekitchen/>} />
        <Route path="/wardrobes" element={<ServiceWardrobes/>} />
        <Route path="/false-ceiling" element={<ServiceFalse/>} />
        <Route path="/residential" element={<ServicesResidential/>} />
        <Route path="/construction" element={<ServiceConstruction/>} />
        <Route path="/office" element={<ServiceOffice/>} />
      </Routes>
      <Footer />
      {/* <ServiceFabrication/> */}
      {/* <ServiceFabricationms/> */}
      {/* <ServiceRestaurant/> */}
      {/* <Servicegarden/> */}
      {/* <Serviceoutdoor/> */}
      {/* <Servicekitchen/> */}
      {/* <ServiceWardrobes/> */}
      {/* <ServiceFalse/> */}
      {/* <ServicesResidential/> */}
      {/* <ServiceConstruction/> */}
      {/* <ServiceOffice/> */}
      {/* <Footer
        showlinks="true"
        footerBackground="backgroundFooter"
        footerbelowdiv="footerbelowdiv"
        secondfooter={mail}
      /> */}


      {/* For JBS green Footer */}


      {/* <Footer
        footerBackground="backgroundGreenFooter"
        footerbelowdiv="greenfooterbelowdiv"
        secondfooter={jbs}
      /> */}
    </>
  );
}

export default App;
