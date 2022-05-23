import React from "react";

const NavBar = () => {
  let imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";
  return (
    <nav>
      <div />
      <div>
        <img className="logo-header" src={imgUrl} alt="podekex-logo" />
      </div>
      <div>❤</div>
    </nav>
  );
};

export default NavBar;
