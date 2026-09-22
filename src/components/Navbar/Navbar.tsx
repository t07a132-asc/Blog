import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Camera, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-5 py-2 rounded-full transition-all duration-200 block ${isActive ? "bg-orange-600 text-white font-semibold" : "text-neutral-400 hover:text-white"
    }`;

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `w-full text-right px-4 py-2.5 rounded-xl transition-all duration-200 block ${isActive
      ? "bg-orange-600 text-white font-semibold"
      : "text-neutral-400 hover:text-white"
    }`;

  return (
    <nav
      className="bg-[#121212] fixed top-0 text-white py-5 px-4 md:px-12 w-full border-b border-white border-neutral-800 z-50 rounded-full"
      dir="rtl"
    >
      <div className="max-w-7xl container flex items-center justify-between rounded-full  ">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-500 shrink-0">
            <Camera className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-wide leading-tight">
              عدسة
            </span>
            <span className="text-xs text-amber-700 font-medium">
              عالم التصوير الفوتوغرافي
            </span>
          </div>
        </NavLink>

        <div className="hidden md:flex items-center bg-[#1a1a1a] border border-neutral-800 rounded-full p-1 text-sm font-medium">
          <NavLink to="" className={getNavLinkClass}>
            الرئيسية
          </NavLink>

          <NavLink to="blog" className={getNavLinkClass}>
            المدونة
          </NavLink>

          <NavLink to="about" className={getNavLinkClass}>
            من نحن
          </NavLink>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            aria-label="Search"
            className="p-2 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-800"
          >
            <Search className="w-5 h-5" />
          </button>

          <NavLink
            to="blog"
            className="hidden sm:block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-md shadow-orange-600/20 active:scale-95 text-center"
          >
            ابدأ القراءة
          </NavLink>

          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 left-0 bg-[#121212] border-b border-neutral-800 py-4 px-6 flex flex-col gap-4 shadow-xl z-50">
          <div className="flex flex-col gap-2 bg-[#1a1a1a] p-2 rounded-2xl border border-neutral-800">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass}
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="blog"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass}
            >
              المدونة
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={getMobileNavLinkClass}
            >
              من نحن
            </NavLink>
          </div>

          <NavLink
            to="blog"
            onClick={() => setIsMenuOpen(false)}
            className="sm:hidden w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-full text-sm transition-all text-center"
          >
            ابدأ القراءة
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
