import React from "react";
import "./styles.css";

const labels = {
  title: "Olá família e amigos",
  p1: "Casamos no dia 11 de agosto de 2021!",
  p2: "Apesar de estarmos em \"tempos de pandemia\" e não podermos nos reunir, não queremos deixar de comemorar este momento com quem mais amamos.",
  p3: "Por isso, procuramos uma forma de festejar com vocês essa nova fase que iniciamos a partir de agora e, assim, gostaríamos de convidá-los a compartilhar conosco de um brinde à vida, união e sobretudo, ao amor.",
  p4: "Para quem quer saber mais sobre a gente, criamos uma linha do tempo com alguns dos nossos melhores momentos dos últimos 3 anos."
}

function Message() {
  return (
    <div className="message">
      <div className="title">{labels.title}</div>
      <div className="paragraph">{labels.p1}</div>
      <div className="paragraph">{labels.p2}</div>
      <div className="paragraph">{labels.p3}</div>
      <div className="paragraph">{labels.p4}</div>
    </div>
  )
}

export default Message;
