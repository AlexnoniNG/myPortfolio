import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <ProfileCard />
      <Experience />
    </>
  );
}

export default App;
