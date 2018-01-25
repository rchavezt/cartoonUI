import { Component } from '@angular/core';
import { Character } from './character/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  character = new Character;

  ngOnInit(){
    this.character.name = "Marge Simpson";
    this.character.birthDate = new Date();
  }
}
