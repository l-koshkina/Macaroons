import {Component, OnInit} from '@angular/core';
import {CommonModule, NgFor, NgIf, registerLocaleData} from '@angular/common';
import {ProductType} from './types/product.type';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './components/footer/footer.component';
import {ProductsService} from './services/products.service';
import {CartService} from './services/cart.service';
import {ProductComponent} from './components/product/product.component';
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {ColorHoverButtonDirective} from './directives/color-hover-button.directive';
import {PhoneNumberPipe} from './pipes/phone-number.pipe';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule, FooterComponent, ProductComponent, AdvantagesComponent, ColorHoverButtonDirective, PhoneNumberPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductsService]

})
export class AppComponent implements OnInit {
  constructor(private productsService: ProductsService, public cartService: CartService) {
  }
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

  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.cartService.amount = this.cartService.amount + product.price;
    alert(product.title + ' добавлен в корзину!')
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
  public phoneNumber: string = '375293689868';
  public linkToInstagram: string = 'https://www.instagram.com/'

}
