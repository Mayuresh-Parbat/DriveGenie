import { useEffect, useState } from "react";

function Navbar({ theme, favoritesCount, onToggleTheme }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">DriveGenie</h1>

      <div className="nav-right">
        <div className="wishlist-counter">❤️ {favoritesCount}</div>

        <div className="live-clock">🕒 {currentTime}</div>

        <button onClick={onToggleTheme} className="theme-btn">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;