import React, { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrollBackground ? "scroll-background" : ""}`}>
      <div className="nav-container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
        <div className="nav-links">
          <p>Home</p>
          <p>TV shows</p>
          <p>Movies</p>
          <p>Recently Added</p>
          <p>My List</p>
        </div>
        <img
          className="avatar"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUNfoD///8AenwAd3kAdHYAcHL4+/vT4+Mth4moycnc7O0AcnXh7Ozz+Pjk7+/Y6epLlJax0NHD19h7sbKXwMFsp6m71NRdnp9SmZs7j5BkoqQeiIqJtbYsjpCgwcHr9PWiFkV5AAACOUlEQVR4nO2Y25LiIBRFyQFCMEZzxSRq+/9/2ailBh1bKOh5mNnr1WJncZUDYwAAAAAAAAAAAADgV+ElCU6p0mwWF2FpVHStUn1NSSSIDUYpvWMBaaI7ZRfaFA5iXF3TVOGdVursxibE/I1Bd0/La880GrIHbawBTfkjbeM5DmK1UMjmyGHgZpnWc582tF+2yZoyTkE4aWvhpX1wGm28vN9CRyetKrwUvlyFuImg2lWYfOJ45yp4Dd17BXda/UbheS3EKTBROWvBb2UJtWw0xu4IvUzr/FYW7RY7uYk+mvanR5rymgeLeOyJbfwJzR898luMV4dxe2mSaxkrcHY4tlcDE9Iforo3ZvD/W/mQNtm0rggcUeJCxB1KL2nJbh8AAAAA+IdJ81YQAad5ji/UF3GhlyDOurWtI3zL+8/0rZkCJMgKXOv1bYoLsUVeLtialX4SJPf9vZhIcyG9v4Homn9MpHI/LJ8YIuvDW+q91KmUvej/YMGpGPVmWdGZyOeKm8JukXlqO2Yv6M/7jYhzwTrjfN/Wh0kELLJxg1fmMBdcSlGKM6WUrB769pQ90RRpxuAMH9bP8XleKdN86V6bdpvnzz/b4dLHpEcTZ4eXPv7I5lAkL6fsRG+9BcwcfJR5Ybe7fpmPP0xAM8vA9+cQCWKTVtX7z1dKj6EFdbiFoGnoVfWy/vLK9MNEv9d/x4K4LPfjcDhvBovWfTfUTEr+l/+cz2fRnZeTCgAAAAAAAAAAAAAAAAAA/yvfacgTzCUfGG4AAAAASUVORK5CYII="
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
