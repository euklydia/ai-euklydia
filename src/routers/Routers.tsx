import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Service } from "../pages/service/Service";
import { OurDNA } from "../pages/ourDNA/OurDNA";
import { GreenTech } from "../pages/green-tech/GreenTech";
import { OurDNA2 } from "../pages/ourDNA/OurDNA2";
import { Academy } from "../pages/academy/Academy";
import { Contact } from "../pages/contact/Contact";
import { OurValue } from "../pages/our-value/OurValue";
import { Blog01 } from "../pages/blogs/blog01";
import { Blog02 } from "../pages/blogs/blog02";
import { Blog03 } from "../pages/blogs/blog03";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/our-dna" element={<OurDNA />}></Route>
      <Route path="/GreenTech" element={<GreenTech />}></Route>
      <Route path="/green" element={<OurDNA2 />}></Route>
      <Route path="/academy" element={<Academy />}></Route>
      <Route path="/our-value" element={<OurValue />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route
        path="/blog/first-collaboration-designer-AI-agent"
        element={<Blog01 />}
      ></Route>
      <Route
        path="/blog/AI-supports-mental-health"
        element={<Blog02 />}
      ></Route>
      <Route path="/blog/low-cost-success" element={<Blog03 />}></Route>
    </Routes>
  );
};
