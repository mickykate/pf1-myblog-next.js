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

        }}></section>
      </main>
      <Footer />
    </div>
  );
}
