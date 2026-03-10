import packingImg from "../../assets/7efef9847e5a42f8810474c41cfe9483dcac0989.png";
import deliveryImg from "../../assets/fcf9861636b7b93e1b77ac9fe40b698726a1182c.png";
import truckImg from "../../assets/7d16dca7ee0f60f1f0f9c9faab3b7f2e1d4c138d.png";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const badges = [
  "Same-Day Delivery",
  "Real-Time Tracking",
  "Secure Warehousing",
  "E-Commerce Fulfillment",
];

const heroImages = [packingImg, deliveryImg, truckImg];

export function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f4ff 0%, #ffffff 50%, #f0e6ff 100%)",
        display: "flex",
        alignItems: "center",
        paddingTop: "70px",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(110,43,184,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-50px",
        left: "-50px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(110,43,184,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px", width: "100%" }}>
        <div className="hero-grid">
          {/* Left Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", zIndex: 1 }}>
            {/* Label */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(110,43,184,0.1)",
              color: "#6E2BB8",
              padding: "8px 16px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 600,
              width: "fit-content",
            }}>
              <span style={{ width: "8px", height: "8px", backgroundColor: "#6E2BB8", borderRadius: "50%", display: "inline-block" }} />
              Abuja's #1 E-Commerce Logistics Partner
            </div>

            {/* Headline */}
            <div>
              <h1 style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#1a1a2e",
                margin: 0,
              }}>
                Reliable{" "}
                <span style={{ color: "#6E2BB8" }}>E-Commerce</span>
                <br />
                Logistics in Abuja
              </h1>
              <p style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "#666",
                marginTop: "20px",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}>
                We handle delivery, warehousing, and fulfillment so your business can focus on growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <button
                onClick={() => handleScroll("#contact")}
                style={{
                  backgroundColor: "#6E2BB8",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.25s",
                  boxShadow: "0 4px 20px rgba(110,43,184,0.35)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(110,43,184,0.45)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(110,43,184,0.35)"; }}
              >
                Get a Delivery Quote
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                style={{
                  backgroundColor: "transparent",
                  color: "#6E2BB8",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  border: "2px solid #6E2BB8",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: 600,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#6E2BB8"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#6E2BB8"; }}
              >
                Partner With Us
              </button>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
              {badges.map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "white",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "1px solid rgba(110,43,184,0.15)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#333",
                    whiteSpace: "nowrap",
                  }}
                >
                  <CheckCircle size={15} color="#6E2BB8" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Carousel */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(110,43,184,0.25)",
            }}>
              {heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Jeraven Logistics"
                  style={{
                    width: "100%",
                    height: "440px",
                    objectFit: "cover",
                    position: i === 0 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    opacity: currentImg === i ? 1 : 0,
                    transition: "opacity 0.8s ease",
                    display: "block",
                  }}
                />
              ))}
            </div>

            {/* Dots */}
            <div style={{ position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px" }}>
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  style={{
                    width: currentImg === i ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor: currentImg === i ? "white" : "rgba(255,255,255,0.5)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>

            {/* Floating stat card */}
            <div style={{
              position: "absolute",
              bottom: "-16px",
              left: "-16px",
              backgroundColor: "white",
              borderRadius: "14px",
              padding: "14px 20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              zIndex: 10,
            }}>
              <p style={{ margin: 0, fontSize: "11px", color: "#999", fontWeight: 500 }}>DELIVERIES COMPLETED</p>
              <p style={{ margin: 0, fontSize: "24px", fontWeight: 800, color: "#6E2BB8" }}>500+</p>
              <p style={{ margin: 0, fontSize: "11px", color: "#666" }}>Across Abuja</p>
            </div>

            <div style={{
              position: "absolute",
              top: "20px",
              right: "-12px",
              backgroundColor: "#6E2BB8",
              borderRadius: "14px",
              padding: "12px 18px",
              boxShadow: "0 8px 30px rgba(110,43,184,0.35)",
              zIndex: 10,
            }}>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>SATISFACTION RATE</p>
              <p style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "white" }}>98%</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
