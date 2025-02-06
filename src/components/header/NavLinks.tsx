import { Link } from "react-router-dom";

export default function NavLinks() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Education & Awareness", url: "/education-and-awareness" },
    { name: "About Us", url: "/about-us" },
    { name: "Contact Us", url: "/contact-us" },
  ];

  return (
    <ol className="flex gap-6">
      {links.map((link) => (
        <li key={link.name} className="text-secondary-dark text-lg underline hover:scale-105 transition-all">
          <Link className="hover:text-tertiary" to={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}
