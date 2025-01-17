const Footer = () => {
  return (
    <footer className="bg-gray-50 shadow-md mt-10 p-4">
      <div className="flex md:flex-row flex-col justify-between items-center mx-auto container">
        <p className="text-center md:text-left">&copy; 2023 Eco-Web Car Rentals. All rights reserved.</p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-gold">Privacy Policy</a>
          <a href="/terms" className="hover:text-gold">Terms of Service</a>
          <a href="/contact" className="hover:text-gold">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
