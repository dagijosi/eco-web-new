import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";

interface FooterLink {
  href: string;
  label: string;
}

interface ContactDetailsProps {
  icon: React.ElementType;
  title: string;
  details: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const SocialMediaLinks: React.FC = () => (
  <div className="flex space-x-4 mt-4">
    <a href="#" className="text-marigold-500 hover:text-marigold-600" aria-label="Facebook">
      <FaFacebookF  />
    </a>
    <a href="#" className="text-marigold-500 hover:text-marigold-600" aria-label="Twitter">
      <FaTwitter  />
    </a>
    <a href="#" className="text-marigold-500 hover:text-marigold-600" aria-label="Instagram">
      <FaInstagram />
    </a>
  </div>
);

const ContactDetails: React.FC<ContactDetailsProps> = ({ icon: Icon, title, details }) => (
  <article className="flex items-start space-x-2 mb-6">
    <Icon className="w-5 h-5 text-marigold-500" />
    <div>
      <h2 className="mb-2 font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">{details}</p>
    </div>
  </article>
);

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <article className="mb-6">
    <h2 className="mb-2 font-semibold">{title}</h2>
    <nav className="space-y-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="block text-gray-700 text-sm hover:text-marigold-500 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  </article>
);

const Footer: React.FC = () => {
  const helpLinks: FooterLink[] = [
    { href: "#", label: "FAQs" },
    { href: "#", label: "How it works" },
    { href: "#", label: "Support" },
  ];

  const customerCareLinks: FooterLink[] = [
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Contact Us" },
  ];

  return (
    <div>
      {/* Signup Section */}
      <section className="flex justify-center items-center gap-6 md:gap-10 bg-marigold-500 px-3 p-2 text-center text-white">
        <h1 className="font-bold text-base md:text-lg">Sign up to Rent</h1>
        <p className="text-xs md:text-sm">Receive the latest vehicles and best deals.</p>
      </section>

      <div className="bg-gray-50 py-12">
        <div className="gap-8 grid md:grid-cols-2 mx-auto px-6 md:px-2 container">
          <div>
            <ContactDetails
              icon={MdLocationOn}
              title="Address"
              details="456 Main Street, Anytown USA 12345"
            />
            <ContactDetails
              icon={MdPhone}
              title="Phone"
              details="+1 (555) 555-5555"
            />
            <article>
              <h2 className="font-semibold">Follow Us</h2>
              <SocialMediaLinks />
            </article>
          </div>

          <div className="flex justify-between px-2">
            <FooterLinks title="Let us help you" links={helpLinks} />
            <FooterLinks title="Customer Care" links={customerCareLinks} />
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-4">
        <div className="flex md:flex-row flex-col justify-between items-center mx-auto px-4 container">
          <p className="text-center text-sm md:text-left">
            &copy; 2023 Eco-Web Car Rentals. All rights reserved.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-marigold-500">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-marigold-500">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-marigold-500">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
