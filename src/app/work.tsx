export function Work() {
    return (
        <div style={{
            overflow: "hidden",
            backgroundColor: "#f3f4f6",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            padding: "1rem"
        }}>
        <h2 style={{
            fontFamily: "var(--font-alegreya-sans-sc), cursive",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem"
        }}>My Portfolio</h2>
        <p style={{
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6"
        }}>
            ここに作品を入れます。
        </p>
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                animation: "marquee 20s linear infinite",
                whiteSpace: "nowrap"
            }}>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3b82f6",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Breaking News</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Stock Update</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#06b6d4",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Weather Alert</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#fde047",
                    color: "#000",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Sports Scores</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#ef4444",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Traffic Report</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#a21caf",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Tech Update</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#ec4899",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Entertainment</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#6366f1",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Science News</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#14b8a6",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Health Tips</div>
                <div style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#f97316",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    minWidth: "120px",
                    textAlign: "center"
                }}>Food & Dining</div>
            </div>
        </div>
    );
}
