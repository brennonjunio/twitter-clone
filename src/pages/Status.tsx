import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormsTweet } from "./FormsTweet";
let answer = ["Concordo", "Olha, faz sentido", "Parabens pelo progresso"];
export function Status() {
  return (
    <main className="timeLine">
      <Header title="tweet" />
      <Tweet
        content="Eu levei um tempão
Pra escrever esse textão
E ele tá igual meu coração
Vai precisar de correção

Eu esqueci que excesso é com dois S
Mas não esqueço da gente
Não sei se a gente é junto ou separado
Mas sei que você entende
Que entre verbos e acentos
Eu tô sofrendo"
      />
      <Separator />

      <FormsTweet />
      {answer.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
