function Navbar({ activeTab, onTabChange }) {
  const menus = ["홈", "나의 소개", "프로젝트", "기술 스택", "연락하기"];

  return (
    <nav className="navbar">
      <div className="navbar-logo">PORTFOLIO</div>

      <ul className="navbar-menu">
        {menus.map((menu) => (
          <li key={menu}>
            <button
              className={activeTab === menu ? "active" : ""}
              onClick={() => onTabChange(menu)}
            >
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
