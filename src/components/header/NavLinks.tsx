export default function NavLinks() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Education & Awareness", url: "/" },
    { name: "About Us", url: "/" },
    { name: "Contact Us", url: "/" },
  ];

  return (
    <ol className="flex gap-6">
      {links.map((link) => (
        <li key={link.name} className="text-secondary-dark text-lg underline hover:scale-105 transition-all">
          <a className="hover:text-tertiary" href={link.url}>
            {link.name}
          </a>
        </li>
      ))}
    </ol>
  );
}
