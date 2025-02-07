import {Component} from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public phoneNumber: string = '+375 (29) 368-98-68';
  public linkToInstagram: string = 'https://www.instagram.com/'
}
