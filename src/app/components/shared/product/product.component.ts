import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  expired: boolean = false;
  expiratinString: string = '';

  timeSince(date: Date) {
    date.setHours(0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0);
    const seconds = Math.floor((date.getTime() - today.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    
    
    if(Math.ceil(interval) === 0) return 'Today';
    if(Math.ceil(interval) === 1) return "Tomorrow";
    if(Math.ceil(interval) < 0) {
      this.expired = true;
      if(Math.ceil(interval) === -1) return "Yesterday";
      return Math.abs(Math.floor(interval)) + " days ago";
    } 

    return Math.floor(interval) + " days";
  }

  constructor() {
    this.product = {} as IProduct;
  }

  ngOnInit(): void {
    this.expiratinString = this.timeSince(this.product.expiration_date);
  }
}
