import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from '../../types/product.type';
import {CartService} from '../../services/cart.service';
import {ColorHoverButtonDirective} from '../../directives/color-hover-button.directive';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu)

@Component({
  selector: 'product',
  imports: [ColorHoverButtonDirective, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [CartService]
})
export class ProductComponent {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();


  constructor(public cartService: CartService) {
    this.product = {
      image: '',
      title: '',
      quantity: '',
      price: 0
    }
  }

  addProductToCart() {
    this.cartService.count++;
    this.addToCartEvent.emit(this.product);
  }
}
