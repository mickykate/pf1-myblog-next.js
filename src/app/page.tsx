import {Headline} from "./components/Headline"
import {Footer} from "./components/Footer"
import {About} from "./about"
import {Work} from "./work"
import {Skills} from "./skills"
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
          minHeight: "95vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
          margin: 0,
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
          backgroundImage: 'linear-gradient(135deg, #2980B9,#6DD5FA, #FFFFFF)',
          backgroundSize: '400% 400%',
          backgroundPosition: '0% 50%',
          animation: 'flowyCurves 15s ease infinite',
          zIndex: -1
        }} />
        <h1 style={{
          fontFamily: "Whisper, cursive",
          fontSize: "9rem",
          textAlign: "center",
          marginBottom: "1rem",
          position: "relative",
          zIndex: 1
        }}>MIYUKI<br />KATO</h1>
        <p style={{
          fontFamily: "Alegreya Sans SC, cursive",
          fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
          textAlign: "center",
          color: "#666",
          position: "relative",
          zIndex: 1
        }}>I&apos;m a web developer...</p>
        </section>
        {/*各セクションを作成する*/}
        <section id="about" style={{ 
          width: "100%",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
        }}>
          <About />
        </section>
        <section id="work" style={{ 
          width: "100%",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
        }}>
            <Work/>
        </section>
        <section id="skills" style={{ 
          width: "100%",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
        }}>
          <Skills />
        </section>
        <section id="contact" style={{ 
          width: "100%",
          scrollMarginTop: "2rem",
          boxSizing: "border-box"
        }}>
            <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
