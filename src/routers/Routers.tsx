import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
