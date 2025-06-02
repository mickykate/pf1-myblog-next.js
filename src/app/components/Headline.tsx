export function Headline() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", position: "sticky", top: 0,backgroundColor: "white", zIndex: 1000}}>
            <div style={{ marginRight: "auto" }}>ロゴ</div>
            <nav style={{ display: "flex", gap: "2rem" }}>
                <a href="#top" style={{ 
                  textDecoration: "none",
                  color: "#333",
                  transition: "color 0.3s"
                }}>top</a>
                <a href="#about" style={{ 
                  textDecoration: "none",
                  color: "#333",
                  transition: "color 0.3s"
                }}>about</a>
                <a href="#work" style={{ 
                  textDecoration: "none",
                  color: "#333",
                  transition: "color 0.3s"
                }}>work</a>
                <a href="#skills" style={{ 
                  textDecoration: "none",
                  color: "#333",
                  transition: "color 0.3s"
                }}>skills</a>
                <a href="#contact" style={{ 
                  textDecoration: "none",
                  color: "#333",
                  transition: "color 0.3s"
                }}>contact</a>
            </nav>
        </header>
    )
}
