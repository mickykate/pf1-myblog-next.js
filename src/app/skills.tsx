export function Skills () {
    return (
        <div style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: "#f8f9fa"
        }}>
        <h2 style={{
            fontFamily: "var(--font-alegreya-sans-sc), cursive",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem"
        }}>My Skills</h2>
        <div style={{
            display: "flex",
            maxWidth: "1200px",
            width: "100%",
            gap: "3rem",
            alignItems: "center"
        }}>
            <p>スキルを追加する</p>
            </div>
        </div>
    )
}
