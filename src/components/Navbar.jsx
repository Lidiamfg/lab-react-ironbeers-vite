import { Link } from "react-router-dom";
import home from "../assets/home-icon.png";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to="/">
        <img src={home} />
      </Link>
    </div>
  );
}

export default Navbar;
