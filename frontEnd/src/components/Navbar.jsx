import React, { useState } from "react";
import { data } from "../restApi.json"; // Import restaurant data
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling on the same page
import { Link } from "react-router-dom"; // For navigation between pages
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <img
          className="logo"
           src= 'logo (2).png' //"/Yellow-Blue-Simple-Illustratio-unscreen.gif"
          alt="Restaurant Logo"
        />

        {/* Navigation Links */}
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              element.title === "CONTACT US" ? (
                <Link to="/contact" key={element.id}>
                  {element.title}
                </Link>
              ) : (
                <ScrollLink
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={element.id}
                >
                  {element.title}
                </ScrollLink>
              )
            ))}
          </div>

          {/* Button to Navigate to Popular Dishes Section */}
          <ScrollLink to="popular" spy={true} smooth={true} duration={500}>
            <button className="menuBtn">Check Out MENU</button>
          </ScrollLink>
        </div>

        {/* Hamburger Menu for Mobile View */}
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
