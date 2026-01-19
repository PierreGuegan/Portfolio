import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv {
constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Pierre Guegan - CV');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Cv Pierre Guegan.pdf');
    link.setAttribute('download', 'Cv Pierre Guegan.pdf');
    link.click();
    link.remove();
  }
}
