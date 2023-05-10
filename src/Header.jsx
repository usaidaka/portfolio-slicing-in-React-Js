import logo from "../asset/wings.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="back">
          <h4>Back</h4>
        </div>
        <img src={logo} alt="" />
        <div className="hello">
          <h4>Hello, You</h4>
        </div>
      </header>
    </>
  );
};

export default Header;
