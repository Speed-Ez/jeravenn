import packingImg from "../../assets/7efef9847e5a42f8810474c41cfe9483dcac0989.png";
import { Zap, MapPin, Shield, Users, Settings, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery Network",
    description: "Our trained riders cover all Abuja zones with same-day and next-day delivery capabilities.",
  },
  {
    icon: MapPin,
    title: "Technology-Driven Tracking",
    description: "Real-time tracking dashboards keep you and your customers informed at every step.",
  },
  {
    icon: Shield,
    title: "Secure Package Handling",
    description: "Every package is treated with care. We ensure safe pickup, transit, and delivery.",
  },
  {
    icon: Users,
    title: "Reliable Dispatch Riders",
    description: "Our vetted and professional dispatch team is trained for reliability and speed.",
  },
  {
    icon: Settings,
    title: "Flexible Logistics Solutions",
    description: "Customized logistics plans for businesses of all sizes — startups to growing brands.",
  },
  {
    icon: TrendingUp,
    title: "Scale Your Business",
    description: "As your orders grow, our logistics infrastructure grows with you — seamlessly.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      style={{
        padding: "100px 24px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            backgroundColor: "rgba(110,43,184,0.08)",
            color: "#6E2BB8",
            padding: "6px 18px",
            borderRadius: "50px",
            fontSize: "13px",
            fontWeight: 600,
          }}>
            Our Advantage
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#1a1a2e",
            marginTop: "16px",
            marginBottom: "16px",
          }}>
            Why Choose <span style={{ color: "#6E2BB8" }}>Jeraven?</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            We combine technology, reliability, and local expertise to deliver logistics solutions that actually work for Nigerian e-commerce.
          </p>
        </div>

        <div className="why-layout">
          {/* Left: Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(110,43,184,0.2)",
            }}>
              <img
                src={packingImg}
                alt="Jeraven team packing"
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "400px", display: "block" }}
              />
            </div>
            {/* Overlay badge */}
            <div style={{
              position: "absolute",
              top: "24px",
              left: "24px",
              backgroundColor: "#6E2BB8",
              borderRadius: "12px",
              padding: "14px 20px",
              boxShadow: "0 8px 30px rgba(110,43,184,0.4)",
            }}>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>RC: 8319373</p>
              <p style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "white" }}>Jeraven</p>
              <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.75)" }}>Logistics Limited</p>
            </div>
          </div>

          {/* Right: Grid */}
          <div className="why-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px",
                    borderRadius: "14px",
                    border: "1px solid rgba(110,43,184,0.1)",
                    backgroundColor: "#fafafa",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,43,184,0.35)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#f8f4ff";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(110,43,184,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,43,184,0.1)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#fafafa";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(110,43,184,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={22} color="#6E2BB8" />
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 6px 0", fontSize: "15px", fontWeight: 700, color: "#1a1a2e" }}>
                      {reason.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: 1.65 }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .why-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 1000px) {
          .why-layout {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 540px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
