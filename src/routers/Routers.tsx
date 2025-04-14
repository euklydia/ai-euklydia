import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Service } from "../pages/service/Service";
import { OurDNA } from "../pages/ourDNA/OurDNA";
import { GreenTech } from "../pages/green-tech/GreenTech";
import { OurDNA2 } from "../pages/ourDNA/OurDNA2";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/our-dna" element={<OurDNA />}></Route>
      <Route path="/green-tech" element={<GreenTech />}></Route>
      <Route path="/green" element={<OurDNA2 />}></Route>
    </Routes>
  );
};
