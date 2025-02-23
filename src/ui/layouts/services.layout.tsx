import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { BackToTop } from "../components";
import { FooterDesktop } from "./footer/components";
export const ServicesLayout = () => {
  return (
    <>
      <Outlet />
      {/* <NewsLetter /> */}
      {/* <Divider /> */}
      {/* <JoinAsAssociate /> */}
      <BackToTop />
    </>
  );
};
