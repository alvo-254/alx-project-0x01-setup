import React from 'react';

// Define props type (optional, customize as needed)
interface FooterProps {
  companyName?: string;
  year?: number;
  links?: Array<{ name: string; url: string }>;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "My Company",
  year = new Date().getFullYear(),
  links = [
    { name: "Privacy Policy", url: "#privacy" },
    { name: "Terms of Service", url: "#terms" },
    { name: "Contact Us", url: "#contact" },
  ],
}) => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {year} {companyName}. All rights reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;