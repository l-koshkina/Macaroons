import { Injectable } from '@angular/core';
import {ProductType} from '../types/product.type';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        image: 'macaroon-1.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon-2.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon-3.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70
      },
      {
        image: 'macaroon-4.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70
      }
    ]
  }
}
