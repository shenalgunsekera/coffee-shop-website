import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg navbar-dark px-4 py-4 shadow-sm fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
      data-aos="fade-down"
    >
      <div className="container-fluid">
        <Link href="/" passHref legacyBehavior>
          <a className="navbar-brand text-white fw-bold fs-4">Coffee Shop</a>
        </Link>

        <button
          className="navbar-toggler border-white"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)} // React toggle
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-center text-lg-start gap-3">
            <li className="nav-item">
              <Link href="/" passHref legacyBehavior>
                <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/menu" passHref legacyBehavior>
                <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Menu</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" passHref legacyBehavior>
                <a className="nav-link text-white" onClick={() => setIsOpen(false)}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref legacyBehavior>
                <a className="nav-link text-white" onClick={() => setIsOpen(false)}>Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://wa.me/94743364614"
                className="btn btn-outline-light px-3 py-2"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
