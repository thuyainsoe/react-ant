import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ProfileView from "./components/ProfileView";
import ProfileDetail from "./components/ProfileDetail";

function App() {
  const [tab, setTab] = useState("about");
  const tabClick = (tab) => {
    setTab(tab);
  };
  return (
    <>
      <Navbar />
      <ProfileView tabClick={tabClick} tab={tab} />
      <ProfileDetail tab={tab} />
    </>
  );
}

export default App;
