import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NewPortfolio');

    // Signal pour gérer l'affichage de l'écran d'accueil
  showWelcome = signal(true);

  enterPortfolio() {
    this.showWelcome.set(false);
  }
}
