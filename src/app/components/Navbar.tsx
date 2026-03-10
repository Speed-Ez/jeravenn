import { useState, useEffect } from "react";
import logoImg from "../../assets/32e381516cd8f43d0cadd6958a60dae189135fc2.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        boxShadow: scrolled ? "0 2px 20px rgba(110,43,184,0.12)" : "0 1px 8px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo */}
          <a href="#home" onClick={() => handleNavClick("#home")} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img
              src={logoImg}
              alt="Jeraven Logistics"
              style={{ width: "44px", height: "44px", borderRadius: "8px", objectFit: "cover" }}
            />
            <div>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#6E2BB8", letterSpacing: "-0.3px" }}>
                Jeraven
              </span>
              <p style={{ fontSize: "10px", color: "#666", margin: 0, lineHeight: 1, marginTop: "1px" }}>
                Logistics Limited
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#333",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6E2BB8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              style={{
                backgroundColor: "#6E2BB8",
                color: "white",
                padding: "10px 22px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#5a1f9e"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#6E2BB8"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#6E2BB8",
              display: "none",
            }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "1px solid #f0e6ff",
              padding: "16px 0",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
            className="show-mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  padding: "12px 8px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#333",
                  textDecoration: "none",
                  borderRadius: "6px",
                  transition: "background 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              style={{
                backgroundColor: "#6E2BB8",
                color: "white",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              Get a Quote
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
