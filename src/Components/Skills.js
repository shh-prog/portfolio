import skills from "./Data/skill";

import Programming from "./Skills/Programming";
import WebDevelopment from "./Skills/WebDevelopment";
import System from "./Skills/System";
import DatabaseNetwork from "./Skills/DatabaseNetwork";

function Skills() {
  return (
    <section className="skills-section">
      <div className="section-header">
        <p className="section-subtitle">MY SKILLS</p>
        <h1>기술 스택</h1>
        <p>컴퓨터공학을 공부하며 익힌 기술과 도구들을 소개합니다.</p>
      </div>

      <div className="skills-container">
        <Programming items={skills[0].items} />
        <WebDevelopment items={skills[1].items} />
        <System items={skills[2].items} />
        <DatabaseNetwork items={skills[3].items} />
      </div>
    </section>
  );
}

export default Skills;
