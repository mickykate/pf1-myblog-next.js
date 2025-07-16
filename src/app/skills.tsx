export function Skills () {
    // 円のデータ（8個）
    const circles = Array.from({ length: 8 });

    return (
        <div style={{
            minHeight: "90vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "2rem 0",
            margin: 0,
            backgroundColor: "#f8f9fa"
        }}>
            <h2 style={{
                fontFamily: "var(--font-alegreya-sans-sc), cursive",
                fontSize: "2.5rem",
                marginBottom: "2rem",
                marginTop: "2rem"
            }}>My Skills</h2>
            <div style={{
                display: "flex",
                gap: "2rem",
                marginTop: "3rem",
                justifyContent: "center"
            }}>
                {circles.map((_, i) => (
                    <div
                        key={i}
                        className={'circle${i + 1}'}
                        style={{
                            width: "160px",
                            height: "160px",
                            borderRadius: "50%",
                            backgroundColor: "#3b82f6",
                            marginTop: i % 2 === 0 ? "0" : "200px", // 偶数は上、奇数は下にずらす
                            animation: "float 3s ease-in-out infinite"
                        }}
                    />
                ))}
            </div>
        </div>
    )
}