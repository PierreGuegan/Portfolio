import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
constructor(private titleService: Title){
    this.titleService.setTitle('Pierre Guegan - Contact');
  }
  onSubmit() {
    alert('Merci pour ton message ! Je te répondrai rapidement 😊');
  }
}
