export function Headline() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
            <div style={{ marginRight: "auto" }}>ロゴ</div>
            <nav style={{ display: "flex", gap: "2rem" }}>
                <a href="#about">about</a>
                <a href="#work">work</a>
                <a href="#skills">skills</a>
                <a href="#contact">contact</a>
            </nav>
        </header>
    )
}
