// import React from "react";
// import { HashLink as Link } from "react-router-hash-link";

// const Navbar = ({ toggle }) => {
//   return (
//     <div className="navStyle fixed w-full top-0">
//       <nav
//         className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
//         role="navigation"
//       >
//         <Link to="/" className="linkStyle pl-12">
//           LOUDENT EVENTS
//         </Link>
//         <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </div>
//         <div className="pr-8 md:block hidden ">
//           <Link smooth to="/" className="p-6 active">
//             HOME
//           </Link>
//           <Link smooth to="#services" className="p-6 ">
//             SERVICES
//           </Link>
//           <Link smooth to="#about" className="p-6 ">
//             ABOUT
//           </Link>
//           {/* <Link smooth to="#about" className="p-4">
//             ABOUT
//           </Link> */}
//           <Link smooth to="#contact" className="p-6">
//             CONTACT
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

//my trying navbar

import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            LOUDENT EVENTS
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="#content"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="#about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="#contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
