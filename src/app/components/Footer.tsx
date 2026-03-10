import logoImg from "../../assets/32e381516cd8f43d0cadd6958a60dae189135fc2.png";
import { MapPin, Phone, Mail, Instagram, Twitter, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Last-Mile Delivery",
  "Warehousing",
  "Order Fulfillment",
  "Real-Time Tracking",
  "Merchant Partnership",
];

export function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0f0a1f",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        paddingTop: "64px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-grid">
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={logoImg}
                alt="Jeraven Logistics"
                style={{ width: "44px", height: "44px", borderRadius: "8px", objectFit: "cover" }}
              />
              <div>
                <p style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#c084fc" }}>Jeraven</p>
                <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>Logistics Limited</p>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: 0, maxWidth: "260px" }}>
              Abuja's trusted e-commerce logistics partner. Fast, reliable, and technology-driven delivery solutions.
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0 }}>RC: 8319373</p>

            {/* Social */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/jeravenlogistics" },
                { icon: Twitter, label: "Twitter/X", href: "https://x.com/JeravenEcomLog" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(110,43,184,0.25)",
                    border: "1px solid rgba(110,43,184,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#6E2BB8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(110,43,184,0.25)"; }}
                >
                  <Icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "20px", marginTop: 0 }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  <ArrowRight size={13} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "20px", marginTop: 0 }}>
              Our Services
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  onClick={(e) => { e.preventDefault(); handleScroll("#services"); }}
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  <ArrowRight size={13} />
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "20px", marginTop: 0 }}>
              Contact Info
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <MapPin size={18} color="#6E2BB8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                  Block C, C1001 Apo Urban Market,<br />
                  Apo Resettlement, Abuja
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Phone size={18} color="#6E2BB8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <a href="tel:+2349026707113" style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>+234 902 670 7113</a>
                  <a href="tel:+2348132800260" style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>+234 813 280 0260</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Mail size={18} color="#6E2BB8" style={{ flexShrink: 0 }} />
                <a href="mailto:Jeravenlogistics@gmail.com" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                  Jeravenlogistics@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Instagram size={18} color="#6E2BB8" style={{ flexShrink: 0 }} />
                <a href="https://instagram.com/abuja_ecommerce_logistics" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                  @abuja_ecommerce_logistics
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: "60px",
          paddingTop: "24px",
          paddingBottom: "24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            © 2024 Jeraven Logistics Limited. All rights reserved. RC: 8319373
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            Abuja's Leading E-Commerce Logistics Partner
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.4fr;
          gap: 48px;
        }
        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>
    </footer>
  );
}
