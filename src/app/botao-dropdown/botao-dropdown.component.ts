import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-dropdown',
  templateUrl: './botao-dropdown.component.html',
  styleUrls: ['./botao-dropdown.component.css']
})
export class BotaoDropdownComponent implements OnInit {

  @Input() lista:string[];
  @Input() nome:string;
  @Input() classeBotao:any = null;
  @Input() classeOpcoes:any = null;
  @Output() itemClicado =  new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  eventoClic(item:string):void{
    this.itemClicado.emit(item);
  }

  classes():any{
    if(this.classeBotao != null){
        return this.classeBotao;
    }else{
      return {'btn-primary':true}};
    }

}
