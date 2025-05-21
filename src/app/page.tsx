import Image from "next/image";
import {Headline} from "./components/Headline"
import {Footer} from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Headline />
      <main></main>
      <Footer />
    </div>
  );
}
