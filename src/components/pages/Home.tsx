import { useEffect, useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Content from "../Content";

function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSidebarVisible(window.scrollY < 50);
      setScrolled(window.scrollY > 20); // activa difuminado superior
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        width:"100%",
        margin: "0 auto",
        padding: "3rem 2rem",
        fontFamily: "-apple-system, BlinkMacSystemFont",
        position: "relative",
      }}
    >
      {/* Difuminado superior */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          pointerEvents: "none",
          zIndex: 20,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
          transition: "opacity 0.5s ease-in-out",
          opacity: scrolled ? 1 : 0,
        }}
      />

      {/* Difuminado inferior */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60px",
          pointerEvents: "none",
          zIndex: 20,
          background:
            "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
        }}
      />

      <div
        className="display"
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          transition: "margin-top 0.6s ease-in-out",
          marginTop: sidebarVisible ? "0px" : "40px",
        }}
      >
        <Header />
        <Navbar />

        <div
          style={{
            display: "flex",
            width: "100%",
            transition: "all 0.5s ease-in-out",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              width: sidebarVisible ? "30%" : "0px",
              overflow: "hidden",
              transition:
                "width 0.5s ease-in-out, opacity 0.5s ease-in-out",
              opacity: sidebarVisible ? 1 : 0,
              flexShrink: 0,
            }}
          >
            <Sidebar />
          </div>

          {/* Content */}
          <div
            style={{
              flex: 1,
              transition: "padding 0.5s ease-in-out",
              boxSizing: "border-box",
            }}
          >
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;