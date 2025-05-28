import {Headline} from "./components/Headline"
import {Footer} from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Headline />
      <main>
        <h1 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "1rem"
        }}>MIYUKI KATO</h1>
        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "1.5rem",
          textAlign: "center",
          color: "#666"
        }}>I'm a web developer...</p>
        {/*各セクションを作成する*/}
        <section id="about" style={{ 
          minHeight: "100vh",
          padding: "2rem",
          scrollMarginTop: "2rem" // ヘッダーの高さ分の余白
        }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem"
          }}>About Me</h2>
          <p style={{
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            ここに自己紹介文を入れます。
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
