/* eslint-disable no-unused-vars */
import { useState } from "react";
import imgBiscoito from './assets/biscoito.png'

 function App() {
  const [ texto, setTexto ] = useState('Quebrar biscoito');
  const [ textoFrase, setTextoFrase ] = useState(`Aperte em "Quebrar biscoito" para gerar a mensagem.`);

  const frases = ['Siga os bons e aprenda com eles.', 
  'O bom-senso vale mais do que muito conhecimento.', 
  'O riso é a menor distância entre duas pessoas.', 
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Aquele que se importa com o sentimento dos outros, não é um tolo.', 
  'Uma bela flor é incompleta sem as suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'Os defeitos são mais fortes quando o amor é fraco.',
  'Todas as coisas são difíceis antes de se tornarem fáceis.',
  'Se você se sente só é porque construiu muros ao invés de pontes.',
  'Nós somos o que pensamos.',
  'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
  'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',
  'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.'];

  function quebraBiscoito(){
    const numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(`" ${frases[numeroAleatorio]} "`);
    setTexto('Quebrar novamente');

  }

  return (
    <>
            <div className="flex flex-col w-full justify-center items-center">
                <img src={imgBiscoito} className="w-[300px] h-[300px] mt-[100px]" alt=""/>
                <button className="" onClick={quebraBiscoito}>{texto}</button>
                <h3 className="italic text-orange-500 text-center pt-6">{textoFrase}</h3>
            </div>     

    </>
  );
}

export default App;