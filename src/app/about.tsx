import Image from 'next/image';

export function About() {
    return (
        <div style={{
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fffef2",
            padding: "2rem 0",
            margin: 0,
            boxSizing: "border-box"
        }}>
            <h2 style={{
            fontFamily: "var(--font-alegreya-sans-sc), cursive",
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
                    <Image
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
                            <strong>好きなこと🐈‍⬛</strong>
                            <br/>猫と遊ぶ、景色や食べ物の写真を撮ること
                        </li>
                        <li style={{
                            marginBottom: "1rem",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            <strong>趣味🎧</strong>
                            <br/>映画鑑賞、読書（今はマスカレードシリーズを読んでいます）、音楽を聴くこと
                        </li>
                        <li style={{
                            marginBottom: "1rem",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            <strong>エンジニアを目指すキッカケ👩‍💻</strong>
                            <br/>より社内の業務を効率化させて作業しやすい環境を作りたいと思ったため
                        </li>
                        <li style={{
                            marginBottom: "1rem",
                            padding: "1rem",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                        }}>
                            <strong>目標🏃‍♀️</strong>
                            <br/>ユーザーに価値を提供するWebアプリケーションを開発する
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}