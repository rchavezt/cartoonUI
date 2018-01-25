import { Component } from '@angular/core';
import { Character } from './character/character.model';
import { CharacterService } from './character/character.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  character = new Character;
  private sub: Subscription;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void{
    this.characterService.getCharacter().subscribe(
      character => {
        this.character = character;
      }
    )
  }
}
