import Link from 'next/link';

export function Headline() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", position: "sticky", top: 0, backgroundColor: "#FFFEF7", color: "#000000", zIndex: 1000}}>
            <div style={{ marginRight: "auto" }}>
              <Link href="/">
              <img src="/mylogo.jpeg" alt="My Logo"
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                objectFit: "cover"
              }}  />
              </Link>
            </div>
            <nav style={{ display: "flex", gap: "2rem" }}>
                <a href="#top" style={{ 
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#666",
                  transition: "color 0.3s"
                }}>top</a>
                <a href="#about" style={{ 
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#666",
                  transition: "color 0.3s"
                }}>about</a>
                <a href="#work" style={{ 
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#666",
                  transition: "color 0.3s"
                }}>work</a>
                <a href="#skills" style={{ 
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#666",
                  transition: "color 0.3s"
                }}>skills</a>
                <a href="#contact" style={{ 
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#666",
                  transition: "color 0.3s"
                }}>contact</a>
            </nav>
        </header>
    )
}
