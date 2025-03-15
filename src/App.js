import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { DetailsPage } from "./components/Pages/DetailsPage";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return(
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<DetailsPage />} />
    </Routes>
    </>
  );
};