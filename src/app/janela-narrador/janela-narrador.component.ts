import { Component, OnInit } from '@angular/core';
import { ComunicacaoAudio } from '../ComunicacaoAudio';

@Component({
  selector: 'app-janela-narrador',
  templateUrl: './janela-narrador.component.html',
  styleUrls: ['./janela-narrador.component.css']
})
export class JanelaNarradorComponent implements OnInit {
  //***Atributos***

  private aux:any;
  habilitarBotao:boolean = true;
  linguagemNarracao:string = "pt-BR";
  listaNomesLinguagem:string[] = ["pt-BR","en-US"];  
  nomeBotaoaLinguagem:string="Linguagem";
  comunicacao:ComunicacaoAudio = new ComunicacaoAudio();
  
  //Referência do setInterval
  mySetTrue:any;
  mySetFalse:any;

  
  //***Construtor***
  constructor() { 
    this.inicializaListaLinguagem();
  }

  ngOnInit() {}

  //***Métodos***
  
  /**
   * @argument Objetivo: Listar todas as linguagens no botão de opção de linguagem;
   */
  inicializaListaLinguagem(){
    var that = this;
    var mySetTrue = setInterval(function(){
      
      if(that.comunicacao.linguagens().length!=0){
        that.listaNomesLinguagem = that.comunicacao.linguagens();;
        console.log(that.listaNomesLinguagem);
        clearInterval(mySetTrue);
        

      }else{
        console.log("não foi");
      }

    },1000);
  }


  /**
   * @argument Objetivo: Narrar o texto escrito no imput pelo usuário e chamar uma verificaçao para evitar repetições de narração;
   * @param texto : Texto excrito pelo usuário para ser narrado;
   */
  clickBotao(texto:string):void{
    
    //Manda narrar e verifica se já possue áudio na fila
    this.comunicacao.narrar(texto,this.linguagemNarracao);
    this.setFalse();

  }

  /**
   * @argument: Alterar a linguagem para narração;
   * @param linguagemEscolha : String da linguagem clicada(escolhida); 
   */
  alterarLinguagem(linguagemEscolha:string){
    this.linguagemNarracao = linguagemEscolha;
    this.nomeBotaoaLinguagem = linguagemEscolha;
  }


/**
 *@argument: Habilita o botão de narração e verifica se o mesmo continua válido; 
 */
  setTrue():void{
    
    var that = this;
    this.habilitarBotao = true;

    console.log("setTrue");
    //limpando interval's perdidos
    clearInterval(this.mySetTrue);
    clearInterval(this.mySetFalse);
    clearInterval(that.mySetTrue);
    clearInterval(that.mySetFalse);
    
    that.mySetTrue = setInterval(function(){
      if(that.comunicacao.narrando()){
        clearInterval(that.mySetTrue);
        that.setFalse();
      }
    },1000);
  
  }

  /**
   *@argument: Desabilita o botão de narração e verifica se o mesmo continua inválido; 
  */
  setFalse():void{
  
    var that = this;
    this.habilitarBotao = false;

    console.log("setFalse");


    that.mySetFalse = setInterval(function(){
      if(!that.comunicacao.narrando()){
        clearInterval(that.mySetFalse);
        that.setTrue();
      }
    },1000);
  

  }


}
