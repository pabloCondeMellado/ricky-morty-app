import { Component } from '@angular/core';
import { CharactersService } from '@app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  constructor(
    public characterService: CharactersService
  ){}

  ngOnInit(): void{
    console.log(this.characterService.findCharacterByid(1));
  }
}
