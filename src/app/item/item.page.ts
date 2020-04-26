import { Component, OnInit } from '@angular/core';
import { Item } from '../classes/item';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  private item: Item;
  private editable: boolean = false;

  constructor(private route: ActivatedRoute, 
    private navCtrl: NavController,
    private itemService: ItemService
    ) { 
    this.item = {
      id: '',
      name: ''
    };
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    //if(id != null){
    if(id){
      this.itemService.getItems().then(() => {
        this.editable = true;
        this.item = this.itemService.getItem(id);
      });
    }
  }

  saveItem() {
    console.log(this.item);
    if(this.editable) {
      this.itemService.saveItems();
    } else {
      this.itemService.addItem(this.item);
    }

    this.navCtrl.navigateBack('/home');
  }


}
