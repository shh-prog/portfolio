function Programming({ items }) {
  return (
    <div className="skill-card">
      <h2>Programming</h2>

      <div className="skill-tags">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Programming;
