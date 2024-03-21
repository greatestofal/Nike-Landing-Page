import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={130} />
        </a>
        <ul className="flex-1 flex gap-16 justify-center items-center max-lg:hidden"></ul>
      </nav>
    </header>
  );
};

export default Nav;
