import { Outlet } from "react-router-dom";
import Header from "./header";
import { Footer } from "./footer";
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
