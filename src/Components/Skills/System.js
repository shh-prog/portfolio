function System({ items }) {
  return (
    <div className="skill-card">
      <h2>System</h2>

      <div className="skill-tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default System;
