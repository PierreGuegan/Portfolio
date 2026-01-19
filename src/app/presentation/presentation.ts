import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projectsService';
import { Project } from '../_models/project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-presentation',
  imports: [CarouselModule, CommonModule],
  templateUrl: './presentation.html',
  styleUrl: './presentation.css'
})
export class Presentation implements OnInit {


  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('Pierre Guegan - Présentation');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectsService.GetProjectsById(0);
  }
}
