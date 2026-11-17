function SearchBar(props) {
  const { filter, changeFilter } = props;

  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="프로젝트 검색..."
        value={filter}
        onChange={changeFilter}
      />
    </form>
  );
}

export default SearchBar;
