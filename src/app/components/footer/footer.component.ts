import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhoneNumberPipe} from '../../pipes/phone-number.pipe';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [CommonModule, PhoneNumberPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() linkToInstagram: string = '';
  @Input() phoneNumber: string = '';
}
