import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  return (
    <nav
      ref={navRef}
      className="navbar navbar-expand-lg navbar-dark  px-4 py-4 shadow-sm"
      data-aos="fade-down"
    >
      <div className="container-fluid">
        <Link href="/" className="navbar-brand text-white fw-bold fs-4">
          Coffee Shop
        </Link>
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center text-lg-start gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item hover" >
              <Link href="/menu" className="nav-link text-white">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://wa.me/94743364614" className="btn btn-outline-light px-3 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in">
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
