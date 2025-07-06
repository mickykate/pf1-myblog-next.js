import {Headline} from "./components/Headline"
import {Footer} from "./components/Footer"
import {About} from "./about"
import {Contact} from "./contact"

export default function Home() {
  return (
    <div style={{ 
      width: "100%",
      minHeight: "100vh",
      margin: 0,
      padding: 0
    }}>
      <Headline />
      <main style={{
        width: "100%",
        margin: 0,
        padding: 0
      }}>
        {/*トップページを１ページとして作成する。文言と締めは横並び。*/}
        <section style={{ 
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box"
        }}>
           {/* アニメーション背景 */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          backgroundImage: `
            linear-gradient(45deg, #e6f3e6 25%, transparent 25%),
            linear-gradient(-45deg, #cce5cc 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #e6f3e6 75%),
            linear-gradient(-45deg, transparent 75%, #cce5cc 75%)
          `,
          backgroundSize: "60px 60px",
          backgroundRepeat: "repeat",
          animation: "moveBackground 20s linear infinite",
          opacity: 0.15,
          zIndex: -1
        }} />
        <h1 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "4rem",
          textAlign: "center",
          marginBottom: "1rem",
          position: "relative",
          zIndex: 1
        }}>MIYUKI<br />KATO</h1>
        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
          textAlign: "center",
          color: "#666",
          position: "relative",
          zIndex: 1
        }}>I'm a web developer...</p>
        </section>
        {/*各セクションを作成する*/}
        <section id="about" style={{ 
          minHeight: "80vh",
          width: "100%",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
        }}>
            <About />
        </section>
        <section id="work" style={{ 
          minHeight: "100vh",
          width: "100%",
          padding: "2rem",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
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
          width: "100%",
          padding: "2rem",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
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
          width: "100%",
          padding: "2rem",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
        }}>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem"
          }}>Contact Me</h2>
            <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
