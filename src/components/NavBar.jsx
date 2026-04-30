import { useState, useEffect, useRef } from "react";
import Reveal from "./Reveal";

const links = ["home", "about", "projects", "contact"];
function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuRef = useRef();
  const buttonRef = useRef();



  // 🔹 Smooth scroll
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  // 🔹 Active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  // 🔹 Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/10 dark:bg-sky-500/10 rounded-t-none rounded-b-2xl backdrop-blur-md border border-white/10 dark:border-slate-900/20 shadow-xl">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h2 className="text-2xl font-bold bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent cursor-default">Hackix</h2>

        {/* Desktop Menu */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 text-sky-600 dark:text-sky-500">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleScrollTo(link)}
                  className={`capitalize transition ${active === link
                    ? "text-sky-500 font-bold dark:text-sky-400"
                    : "hover:text-sky-600 cursor-pointer font-100"
                    }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4"> 
            {/* Hamburger */}
            <button
              ref={buttonRef}
              onClick={() => setOpen(!open)}
              className="md:hidden cursor-pointer text-2xl font-bold text-sky-500 dark:text-sky-400"
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <Reveal>
          <div
            ref={menuRef}
            className="md:hidden  p-6 py-4 space-y-4 bg-white/10 dark:bg-sky-500/5 rounded-t-none rounded-b-2xl backdrop-blur-md border border-white/20"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleScrollTo(link)}
                className={`block w-full cursor-pointer text-left text-sky-600 font-bold dark:text-sky-400 capitalize ${active === link ? "text-purple-400 font-semibold" : ""
                  }`}
              >
                {link}
              </button>
            ))}
          </div>
        </Reveal>
      )}
    </header>
  );
}

export default Navbar;