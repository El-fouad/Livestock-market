import "./App.css";
import Layout from "./layout/Layout";
import AnnouncementDetails from "./pages/AnnouncementDetails";
import FilteredAnnouncements from "./pages/FilteredAnnouncements";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view/announce/id" element={<AnnouncementDetails />} />
          <Route path="/search/id" element={<FilteredAnnouncements />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
