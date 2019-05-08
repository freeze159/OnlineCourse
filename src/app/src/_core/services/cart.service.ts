import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  @Output() cart = new EventEmitter();
  @Output() delItems = new EventEmitter();
}
