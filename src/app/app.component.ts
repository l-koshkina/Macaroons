import {Component} from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {ProductType} from './types/product.type';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ]

  public products = [
    {
      image: 'macaroon-1.png',
      title: 'Макарун с малиной',
      quantity: '1 шт.',
      price:'1,70 руб.'
    },
    {
      image: 'macaroon-2.png',
      title: 'Макарун с манго',
      quantity: '1 шт.',
      price:'1,70 руб.'
    },
    {
      image: 'macaroon-3.png',
      title: 'Пирог с ванилью',
      quantity: '1 шт.',
      price:'1,70 руб.'
    },
    {
      image: 'macaroon-4.png',
      title: 'Пирог с фисташками',
      quantity: '1 шт.',
      price:'1,70 руб.'
    }
  ]

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Выберите макарун');
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }
    alert('Спасибо за заказ!');
    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }

  public showPresent: boolean = true;
  public phoneNumber: string = '+375 (29) 368-98-68';
}
