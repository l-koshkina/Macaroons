import {Component, Input} from '@angular/core';
import {AdvantageType} from '../../types/advantage.type';
import {LineLengthPipe} from '../../pipes/line-length.pipe';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'advantages',
  imports: [CommonModule, LineLengthPipe],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {

  @Input() advantage: AdvantageType;
  @Input() i: number = 0;

  constructor() {
    this.advantage = {
      title: '',
      description: ''
    }
  }
}
