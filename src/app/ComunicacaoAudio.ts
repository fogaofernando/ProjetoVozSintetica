import { Component } from '@angular/core';

declare var _narrarTexto:any;
declare var _narrandoTexto:any;
declare var _voices:any;
export class ComunicacaoAudio{
    
    
    constructor() {}

    /**
     * 
     * @param texto: strng => Texto a ser narrado pela voz nativa do Chrome; 
     * @param linguagem: string => Linguagem optatíva(pt-br padrão), na qual a narração será baseada;
     */
    narrar(texto:String,linguagem:string="pt-BR"):void{
        _narrarTexto(texto,linguagem);
    }

    /**
     * @returns:Boolean => Verifica se possue alguma narração sendo execultada(em tempo real);
     */
    narrando():boolean{
        return _narrandoTexto();
    }    


    linguagens():string[]{
        return _voices();
    }
}
