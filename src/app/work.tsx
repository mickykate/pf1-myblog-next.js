export function Work() {
    //ポートフォリオのデータをここに記載。title, url, color...
    const portfolios = [
        {
            title: "準備中",
            url: "",
            color: "#3b82f6"
        },
        {
            title: "準備中",
            url: "",
            color: "#3b82f6"
        },
        {
            title: "準備中",
            url: "",
            color: "#3b82f6"
        }
    ];
    //ループさせるために2回繰り返して、永遠に流れてくるように見せる。
    const items = [...portfolios, ...portfolios]

    return (
        <div style={{
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "#fffaf0",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            margin: 0,
            padding: "2rem 0",
        }}>
            <div style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "2rem 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
            <h2 style={{
                fontFamily: "var(--font-alegreya-sans-sc), cursive",
                fontSize: "2.5rem",
                textAlign: "center",
                marginBottom: "3rem"
            }}>My Portfolio</h2>
            <p style={{
                maxWidth: "800px",
                margin: "0 auto",
                marginBottom: "2rem",
                textAlign: "center"
            }}>
                今まで取り組んできた作品たち
            </p>
            <div style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                width: "max-content",
                animation: "portfolio-marquee 40s linear infinite"
            }}>
                {items.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            padding: "1.5rem 2.5rem",
                            backgroundColor: item.color,
                            color: "#fff",
                            borderRadius: "1rem",
                            minWidth: "200px",
                            textAlign: "center",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            textDecoration: "none",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            transition: "transform 0.2s",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {item.title}
                    </a>
                ))}
                </div>
            </div>
        </div>
    );
}
