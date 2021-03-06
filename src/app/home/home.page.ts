import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemService } from '../services/item.service'
import { Item } from '../classes/item';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public itemService: ItemService, 
              private navCtrl: NavController){
  }

  updateItem(id: string) {
    this.navCtrl.navigateBack('item/'+id);
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
  }
}
