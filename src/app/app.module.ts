import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JanelaNarradorComponent } from './janela-narrador/janela-narrador.component';
import { BotaoDropdownComponent } from './botao-dropdown/botao-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    JanelaNarradorComponent,
    BotaoDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
