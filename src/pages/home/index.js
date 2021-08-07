import React from "react";
import "./styles.css";
import Message from "../../components/message";
import Timeline from "../../components/timeline";
import border from "../../images/border.png";

const sections = [
  { title: "Mensagem", component: () => <Message /> },
  { title: "Linha do Tempo", component: () => <Timeline /> }
];

function Home() {
  return (
    <div className="home">
      {sections.map(sect => (
        <section>
          <h1 className="section-title">{sect.title}</h1>
          <img className="section-title-border" src={border} />
          {sect.component()}
        </section>
      ))}
    </div>
  )
}

export default Home;
