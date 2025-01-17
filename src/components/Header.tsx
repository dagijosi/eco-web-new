import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const logoSrc = "/logo.png";
  const title = "Eco-Web Car Rentals";
  // const navLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/products", label: "Cars" },
  //   { href: "/cart", label: "Cart" },
  //   { href: "/contact", label: "Contact" },
  // ];

  return (
    <header className="top-0 z-10 sticky flex md:flex-row flex-col justify-between items-center bg-gray-50 shadow-md px-6 py-2 transition-all duration-300">
      {/* Logo and Title */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center">
          {/* <img src={logoSrc} alt={title} className="mr-4 h-10 md:h-12" /> */}
          <a
            href="/"
            className="bg-clip-text bg-gradient-to-r from-gold-light to-gold font-bold text-transparent text-xl"
          >
            {title}
          </a>
        </div>
        <button
          className="md:hidden text-gold text-xl focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links
      <nav
        className={`flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex transition-all duration-300`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-base hover:text-gold transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav> */}

      {/* Profile and Login Buttons */}
      <div
        className={`flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex transition-all duration-300`}
      >
        <a
          href={"/signup"}
          className="text-base hover:text-gold transition-colors duration-300"
        >
          Sign Up
        </a>
        <a
          href={"/login"}
          className="bg-gradient-to-r from-gold-light hover:from-gold to-gold hover:to-gold-dark px-4 py-2 rounded-md font-bold text-white transform transition-transform duration-300 hover:scale-105"
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
