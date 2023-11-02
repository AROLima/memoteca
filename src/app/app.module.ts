import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CriarPensamentosComponent } from './components/pensamentos/criar-pensamentos/criar-pensamentos.component';

@NgModule({
  declarations: [ //components, directives and pipes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CriarPensamentosComponent
  ],
  imports: [  //modules
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [], //services
  bootstrap: [AppComponent] //first component to load
})
export class AppModule { } //main module
