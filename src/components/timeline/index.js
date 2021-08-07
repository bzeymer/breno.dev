import React from 'react';
import './styles.css';

import fotoCarnaval from '../../images/carnaval.jpeg';
import fotoBBQ from '../../images/bbq.jpeg';
import fotoNatal from '../../images/natal.jpeg';
import fotoNoivado from '../../images/noivado.jpeg';
import fotoAp1 from '../../images/ap11.jpeg';
import fotoAdocaoBreno from '../../images/adocaoBreno.jpeg';
import fotoLapinha from '../../images/lapinha.jpeg';

import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  themes,
  createTheme
} from '@merc/react-timeline';

const TYPES = {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
}

const items = [
  {
    type: TYPES.TEXT,
    title: "Primeiro encontro",
    date: "Outubro 2018",
    description: "Ela dizia que não gostava de sanduíche com frango nem catupiry e saiu do Ouro Burguer apaixonada pelo Kikoko"
  },{
    type: TYPES.IMAGE,
    title: "Carnaval",
    subtitle: "Quando isso ainda existia",
    date: "Fevereiro 2019",
    description: "Ele fantasiado de Seu Boneco (mendigo) e ela de tentando ser um Unicórnio (de dois metros de altura)",
    image: fotoCarnaval
  },{
    type: TYPES.IMAGE,
    title: "BBQ Backer",
    date: "Agosto 2019",
    description: "Melhor dia da vida dela. O dia que ele descobriu que ela dá prejuízo pra churrascaria.",
    image: fotoBBQ
  },{
    type: TYPES.VIDEO,
    title: "Adoção do Ziggy",
    date: "Abril 2020",
    description: "Ela caiu no golpe do “não passa de 10 kilos”. Hoje ele pesa 20.",
    video: "IL8M4YNACEo"
  },{
    type: TYPES.IMAGE,
    title: "Adoção do Breno",
    date: "Abril 2020",
    description: "No dia seguinte ela adotou outro vira-lata.",
    image: fotoAdocaoBreno
  },{
    type: TYPES.IMAGE,
    title: "Primeira mudança de casa",
    date: "Junho 2020",
    description: "Primeira casinha dos dois. A cobertura maravilhosa e suas infiltrações.",
    image: fotoAp1
  },{
    type: TYPES.IMAGE,
    title: "Natal 2020",
    date: "Dezembro 2020",
    description: "Primeiro natal só dos dois",
    image: fotoNatal
  },{
    type: TYPES.VIDEO,
    title: "Primeira viagem em família (Macacos)",
    date: "Janeiro 2021",
    description: "Depois dessa farra os cachorros tomaram banho na Jacuzzi da pousada.",
    video: "mX3MkmGAB38"
  },{
    type: TYPES.IMAGE,
    title: "Segunda mudança de casa",
    date: "Março 2021",
    description: "Nova casinha dos dois. Deu muito trabalho pra carregar todas as plantas.",
    image: ""
  },{
    type: TYPES.IMAGE,
    title: "Pedido de casamento",
    date: "Junho 2021",
    description: "Regado a camarão e vinho!",
    image: fotoNoivado
  },{
    type: TYPES.IMAGE,
    title: "Segunda viagem em família (Lapinha da Serra)",
    date: "Julho 2021",
    description: "A gente realmente gosta de trilhas e cachoeiras. Os cachorros também!",
    image: fotoLapinha
  },{
    type: TYPES.TEXT,
    title: "Casamento",
    date: "11 de Agosto 2021",
    description: "Em breve fotos aqui!"
  }
];

const customTheme = createTheme(themes.default, {
  timeline: {
    fontFamily: `Raleway, sans-serif`,
  },
  timelineTrack: {
    backgroundColor: '#daa520',
  },
  marker: {
    backgroundColor: '#f9f4e9',
    border: '2px solid #daa520',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: '#146c67',
  },
  date: {
    backgroundColor: '#daa520',
    color: '#fff',
  },
  imageAtom: {
    maxHeight: 'unset',
  },
});

function MyTimeline() {
  function renderTextEvent(item) {
    return (
      <TextEvent
        date={item.date}
        text={`**${item.title}**`}
      >
        <div className='description'>
          {item.description}
        </div>
      </TextEvent>
    );
  }

  function renderImageEvent(item) {
    return (
      <ImageEvent
        date={item.date}
        text={`**${item.title}** ${item.subtitle ? '- ' + item.subtitle : ''}`}
        src={item.image}
      >
        <div className='description'>
          {item.description}
        </div>
      </ImageEvent>
    );
  }

  function renderVideoEvent(item) {
    return (
      <YouTubeEvent
        date={item.date}
        id={item.video}
        text={`**${item.title}**`}
      >
        <div className='description'>
          {item.description}
        </div>
      </YouTubeEvent>
    );
  }

  return (
    <Timeline opts={{ layout: 'alt-evts-inline-date' }} theme={customTheme}>
      <Events>
        {items.map(item => {
          if (item.type === TYPES.TEXT) return renderTextEvent(item);
          if (item.type === TYPES.IMAGE) return renderImageEvent(item);
          if (item.type === TYPES.VIDEO) return renderVideoEvent(item);
        })}
      </Events>
    </Timeline>
  )
}

export default MyTimeline;


