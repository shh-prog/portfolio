function WebDevelopment({ items }) {
  return (
    <div className="skill-card">
      <h2>Web Development</h2>

      <div className="skill-tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default WebDevelopment;
