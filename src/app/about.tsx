export function About() {
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
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem"
            }}>About Me</h2>
            <div style={{
                display: "flex",
                maxWidth: "1200px",
                width: "100%",
                gap: "3rem",
                alignItems: "center"
            }}>
                {/* 左側の写真 */}
                <div style={{
                    flex: "0 0 300px",
                    textAlign: "center"
                }}>
                    <img 
                        src="/063BFCFA-F32C-4665-A9DF-306A94115D03_1_105_c.jpeg" 
                        alt="Profile Photo"
                        style={{
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "4px solid #fff",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                        }}
                    />
                </div>

                {/* 右側の自己紹介文 */}
                <div style={{
                    flex: "1",
                    maxWidth: "600px"
                }}>
                    <ul style={{
                        listStyle: "none",
                        padding: 0,
                        lineHeight: "1.8"
                    }}>
                        <li style={{
                            marginBottom: "1rem",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            <strong>名前:</strong> MIYUKI KATO
                        </li>
                        <li style={{
                            marginBottom: "1rem",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            <strong>職業:</strong> Web Developer
                        </li>
                        <li style={{
                            marginBottom: "1rem",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            <strong>趣味:</strong> プログラミング、読書、旅行
                        </li>
                        <li style={{
                            marginBottom: "1rem",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            <strong>目標:</strong> ユーザーに価値を提供するWebアプリケーションの開発
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}