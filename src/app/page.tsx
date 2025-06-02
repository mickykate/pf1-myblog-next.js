import {Headline} from "./components/Headline"
import {Footer} from "./components/Footer"

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Headline />
      <main>
        {/*トップページを１ページとして作成する。*/}
        <section style={{ 
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem"
        }}>
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
        </section>
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
        <section id="work" style={{ 
          minHeight: "100vh",
          padding: "2rem",
          scrollMarginTop: "2rem" // ヘッダーの高さ分の余白
        }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
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
        </section>
        <section id="skills" style={{ 
          minHeight: "100vh",
          padding: "2rem",
          scrollMarginTop: "2rem" // ヘッダーの高さ分の余白
        }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem"
          }}>My Skills</h2>
          <p style={{
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            ここに現在のスキルを表示。
          </p>
        </section>
        <section id="contact" style={{ 
          minHeight: "100vh",
          padding: "2rem",
          scrollMarginTop: "2rem" // ヘッダーの高さ分の余白
        }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem"
          }}>Contact Me</h2>
          <p style={{
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            最後にお問合せフォームを追加します。
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
