import { DataMuse } from "./ui/features/detailsPage/Datamuse.tsx";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./ui/layouts/main.layout.tsx";
import { HomePage } from "./ui/features/home/Home.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/DataMuse" element={<DataMuse />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
