import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_DETAILS, NAV_LINKS, LEGAL_LINKS } from "../constants/company";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <ShieldCheck className="h-8 w-8 text-indigo-500" />
              <span className="font-bold text-xl tracking-tight">
                {COMPANY_DETAILS.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering UK businesses with cutting-edge IT solutions, managed services, and strategic technology consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-sm">
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-indigo-500 shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-indigo-400">
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Company Registration Number: {COMPANY_DETAILS.crn} | Registered in England and Wales</p>
          </div>
          <div className="flex space-x-6">
            <p>VAT: {COMPANY_DETAILS.vat}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
