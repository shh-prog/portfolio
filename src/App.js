import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("홈");

  return (
    <div className="App">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="main-content">
        {activeTab === "홈" && <Home />}
        {activeTab === "나의 소개" && <About />}
        {activeTab === "프로젝트" && <Projects />}
        {activeTab === "기술 스택" && <Skills />}
        {activeTab === "연락하기" && <Contact />}
      </main>
    </div>
  );
}

export default App;
