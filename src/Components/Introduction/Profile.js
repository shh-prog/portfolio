function Profile() {
  return (
    <div className="profile-content">
      <p className="about-intro">
        안녕하세요. 컴퓨터공학을 전공하고 있는 신현호입니다.
        <br />
        프로그래밍과 정보보안 분야에 관심을 가지고 꾸준히 배우고 있습니다.
      </p>

      <div className="about-info">
        <div className="info-card">
          <h3>전공</h3>
          <p>컴퓨터공학</p>
        </div>

        <div className="info-card">
          <h3>관심 분야</h3>
          <p>사이버 보안</p>
        </div>

        <div className="info-card">
          <h3>목표</h3>
          <p>정보보안 역량 강화를 통한 모의해킹 전문가</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
