import { useState } from "react";
import intros from "./Data/Intros";

function About() {
  const [tabIndex, setTabIndex] = useState(0);

  const contentChange = (e) => {
    setTabIndex(Number(e.currentTarget.value));
  };

  return (
    <section className="about-section">
      <div className="section-header">
        <p className="section-subtitle">ABOUT ME</p>
        <h1>나의 소개</h1>
      </div>

      <div className="about-tabs">
        {intros.map((intro, i) => (
          <button
            key={intro.tab}
            onClick={contentChange}
            value={i}
            className={tabIndex === i ? "active" : ""}
          >
            {intro.tab}
          </button>
        ))}
      </div>

      <div className="about-content">{intros[tabIndex].content}</div>
    </section>
  );
}

export default About;
