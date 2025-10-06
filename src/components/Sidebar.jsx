import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar / Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 flex items-center justify-start p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-white border-r border-gray-200 
          p-6 pt-20 md:pt-6  /* push content below navbar on mobile */
          z-40 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-1">Dávid Zachar</h1>
        <p className="text-sm text-gray-600 mb-6">
          Student @ FIIT STU in Bratislava
        </p>
        <nav className="space-y-4">
          <Link to="/about" className="block text-gray-800 font-medium" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/projects" className="block text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </nav>
      </aside>
    </>
  );
}
