import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from "../project-card/project-card";
import { Project } from '../_models/project';
import { Tag } from '../_models/tags';
import { CommonModule } from '@angular/common';
import { ProjectsService} from '../_services/projectsService';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {

projects = {} as Project[];

constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('Pierre Guegan - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}
