import { useState, useEffect } from "react";

function Header() {
  const [btn, setBtn] = useState(null);

  useEffect(() => {
    setBtn(localStorage.getItem("btn"));
  }, []);

  return (
    <header className="header">
      <div className="head"></div>
      <div id="header"></div>
    </header>
  );
}

export default Header;
