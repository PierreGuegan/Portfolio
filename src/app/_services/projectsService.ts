import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: 'DaNews', summary: "Site de news interne à mon école", description: "Site de news regroupant des actualités internes et sur le monde numérique. Je travaille dessus en équipe et m'ocuppe de son amélioration et de débug au cours de mon alternance chez Dawan", link: 'https://danews.fr/#/', pictures: ["assets/Danews1.png","assets/Danews2.png","assets/Danews3.png"], tags: [Tag.HTML, Tag.CSS, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS, Tag.JAVASCRIPT]},
    {id: 0, name: 'Instant Geek', summary: "Site factice de vente de de jeux vidéos. Projet de fin de POE intégrateur Front-end", description: "Site réalisé en groupe afin de valider notre POE d'intégrateur front-end. Principalement réalisé à l'aide de vue.js et d'une base de données pinia ", link: 'https://celebrated-jelly-88e3de.netlify.app/', pictures: ["assets/InstantGeek1.png"], tags: [Tag.JAVASCRIPT, Tag.HTML, Tag.CSS, Tag.VUEJS, Tag.BOOTSTRAP]},
    {id: 0, name: 'Ramen site', summary: "Site factice de restaurant japonais pour m'entraîner sur HTML et CSS", description: "Site vitrine réalisé lors de ma POE front-end afin de me familiariser avec HTML et CSS", link: 'https://pierreguegan.github.io/Restaurant-website/', pictures: ["assets/Ramen1.png","assets/Ramen2.png"], tags: [Tag.HTML, Tag.CSS]},
    {id: 0, name: 'Puissance 4', summary: "Alignez 4 jetons de la même couleur pour gagner ! Se joue à 2 joueurs", description: "Un rapide jeu de puissance 4 classique développé sur mon temps libre en javascricpt, HMTL et CSS", link: 'https://pierreguegan.github.io/Connect4/', pictures: ["assets/Connect4.png"], tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT]},
    
  ];
  
  constructor() {}

  GetProjects(){
    return this.projects;
  }

  GetProjectsById(id : number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined){
      throw new TypeError('No project marches the id: ' + id)
    }

    return project;
  }
}
