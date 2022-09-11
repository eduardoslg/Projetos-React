import React, { Component } from 'react';
import biscoito from './assets/biscoito.png';


class Botao extends Component{
  render(){
      return(
          <div>
              <button className='' onClick={this.props.acaoBtn} >{this.props.nome}</button>
          </div>
      );
  }
}


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = 
        ['Siga os bons e aprenda com eles.', 
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
        'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',];

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = `" ${this.frases[numeroAleatorio]} "`
        this.setState(state);

    }

    render(){
        return(
            <div className="flex flex-col w-full justify-center items-center">
                <img src={biscoito} className="w-[300px] h-[300px] my-[50px] " alt='' />
                <Botao  nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className="italic text-orange-500 text-center">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}


export default App;
