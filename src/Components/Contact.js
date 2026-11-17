function Contact() {
  const email = "labixhh@gmail.com";
  const github = "https://github.com/shh-prog";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("이메일 주소가 복사되었습니다.");
  };

  return (
    <section className="contact-section">
      <div className="section-header">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h1>연락하기</h1>
        <p>새로운 기회와 다양한 경험을 통해 함께 성장하고 싶습니다.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>궁금한 점이나 함께 나누고 싶은 이야기가 있다면 연락해 주세요.</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>{email}</p>
            <button onClick={copyEmail}>이메일 복사</button>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <a href={github} target="_blank" rel="noreferrer">
              shh-prog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
