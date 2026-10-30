import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navigationLinks = [
  { label: "Home", sectionId: "home" },
  { label: "Browse Cars", sectionId: "browse-cars" },
  { label: "Recommendations", sectionId: "recommendation" },
  { label: "EMI Calculator", sectionId: "calculator" },
];

function Navbar({ theme, favoritesCount, onToggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTime, setCurrentTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 850) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = navigationLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const goToSection = (sectionId) => {
    setMenuOpen(false);
    setActiveSection(sectionId);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);

      window.setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);

      return;
    }

    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goHome = () => {
    setMenuOpen(false);
    setActiveSection("home");

    if (location.pathname !== "/") {
      navigate("/");
    }

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="navbar">
      <button type="button" className="logo logo-btn" onClick={goHome}>
        DriveGenie
      </button>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {navigationLinks.map((link) => (
          <button
            type="button"
            key={link.sectionId}
            className={`nav-link ${
              activeSection === link.sectionId ? "active-nav-link" : ""
            }`}
            onClick={() => goToSection(link.sectionId)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="nav-right">
        <button
          type="button"
          className="wishlist-counter nav-wishlist-btn"
          onClick={() => goToSection("favorite-cars")}
          title="View favorite cars"
        >
          ❤️ {favoritesCount}
        </button>

        <div className="live-clock">🕒 {currentTime}</div>

        <button type="button" onClick={onToggleTheme} className="theme-btn">
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;