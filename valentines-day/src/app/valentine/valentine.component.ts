import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine.component.html',
  styleUrl: './valentine.component.scss'
})
export class ValentineComponent {
  valentineTitile: string = 'Привіт, красуне!';
  valentineText: string = 'Ти будеш моєю Валентинкою?';
  imagePath: string = 'assets/img/cute.gif';
  buttonsVisible: boolean = true;
  buttonLeft: number = 0;
  buttonTop: number = 0;
  objStyle = {
    top: '56.2%',
    left: '45%'
  }

  yes() {
    this.valentineTitile = '';
    this.valentineText = 'Ти моя бусінка 😘';
    this.imagePath = 'assets/img/kiss.gif';
    this.buttonsVisible = false;
  }

  no() {
    const changeTop = Math.floor(Math.random() * 95) + 1; 
    const changeLeft = Math.floor(Math.random() * 95) + 1;

    this.objStyle.top = changeTop + '%';
    this.objStyle.left = changeLeft + '%';

    this.valentineTitile = '';
    this.valentineText = 'Альо, ти що там задумала?';
    this.imagePath = 'assets/img/gun.gif';
  }
}
