function BackToTop({ show }) {
  if (!show) {
    return null;
  }

  return (
    <button
      className="back-to-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      ↑
    </button>
  );
}

export default BackToTop;