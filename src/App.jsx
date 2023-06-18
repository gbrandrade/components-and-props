import Card from "./components/Card";
import swPosterImg from "./assets/sw-poster.jpg";
import esbPosterImg from "./assets/esb-poster.jpg";
import rotjPosterImg from "./assets/rotj-poster.jpg";

export default function App() {
  return (
    <>
      <Card title="Pôster: Star Wars" posterImg={swPosterImg} />{" "}
      <Card title="Pôster: O Império Contra Ataca" posterImg={esbPosterImg} />
      <Card title="Pôster: O Retorno do Jedi" posterImg={rotjPosterImg} />
    </>
  );
}
