import { Link } from "react-router-dom";
import "./navbar.css";
import {
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaList,
  FaTable,
  FaEnvelope,
  FaImages,
} from "react-icons/fa";

const Navbar = () => {
  let menu = [
    { url: "/", title: "home", icon: FaHome },
    { url: "/about", title: "about", icon: FaInfoCircle },
    { url: "/general", title: "general", icon: FaLayerGroup },
    { url: "/list", title: "list", icon: FaList },
    { url: "/table", title: "table", icon: FaTable },
    { url: "/gallery", title: "gallery", icon: FaImages  },
    { url: "/contact", title: "contact", icon: FaEnvelope },
  ];
  return (
    <>
      <div className="style1">
        <div>
          <h1>Site Logo</h1>
        </div>
        <div className="style2">
          {menu.map((menuItem) => {
            const Icon = menuItem.icon;
            return (
              <Link className="linkStyle1" key={menuItem.url} to={menuItem.url}>
                <Icon /> {menuItem.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
