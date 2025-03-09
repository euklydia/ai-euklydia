import { useHorizontalScroll } from "../../hook";
import { Expertise } from "./Expertise";
import { WhyUs } from "./WhyUs";

export const WhyChooseUs = () => {
  useHorizontalScroll();

  return (
    <>
      <div style={{ paddingTop: "180px" }} />
      <WhyUs />
      <div style={{ paddingTop: "180px" }} />
      <Expertise />
    </>
  );
};
