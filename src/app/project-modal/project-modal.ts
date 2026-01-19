import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/project';
import { CarouselComponent, CarouselModule } from "ngx-bootstrap/carousel";
import { SlideComponent } from "ngx-bootstrap/carousel";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  imports: [CarouselComponent, CommonModule, CarouselModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css'
})
export class ProjectModal {
  project = {} as Project;
  
  constructor(public bsModalRef: BsModalRef){

  }
}
