import { Forms } from "../components/Forms";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

let tweet = ["Só sei que nada Sei", "Teste de Tw", "Até onde vai?"];

export function Timeline() {
  return (
    <main className="timeLine">
      <Header title="Home" />

      <Forms />

      <Separator />

      {tweet.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
