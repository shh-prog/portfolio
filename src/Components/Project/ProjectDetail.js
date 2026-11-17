function ProjectDetail({ project, onBack }) {
  return (
    <section className="project-detail">
      <button className="back-button" onClick={onBack}>
        ← 프로젝트 목록
      </button>

      <div className="section-header">
        <p className="section-subtitle">PROJECT DETAIL</p>
        <h1>{project.title}</h1>
      </div>

      <div className="project-detail-content">
        <div className="detail-item">
          <h2>프로젝트 소개</h2>
          <p>{project.description}</p>
        </div>

        <div className="detail-item">
          <h2>제작 목적</h2>
          <p>프로젝트를 제작한 목적을 작성하는 공간입니다.</p>
        </div>

        <div className="detail-item">
          <h2>사용 기술</h2>
          <p>사용한 기술을 작성하는 공간입니다.</p>
        </div>

        <div className="detail-item">
          <h2>주요 기능</h2>
          <p>주요 기능을 작성하는 공간입니다.</p>
        </div>

        <div className="detail-item">
          <h2>배운 점</h2>
          <p>프로젝트를 진행하면서 배운 점을 작성하는 공간입니다.</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
