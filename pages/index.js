import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <div className="container-home">
        <div className="container-a">
          <div className="sub">So, you want to travel to</div>
          <div className="title">Space</div>
          <div className="descri">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>

        <button className="explore">Explore</button>
      </div>
    </main>
  );
}
