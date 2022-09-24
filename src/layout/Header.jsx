const Header = () => {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;