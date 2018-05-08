import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
middlecard:boolean = false;
thirdcard : boolean = false;
firstcard : boolean;
  constructor(public navCtrl: NavController) {

  }
topcard(){
	//alert("hello");
	if(this.middlecard == true && this.thirdcard == true){

	 this.middlecard = false;
	 this.thirdcard = false;
	}
	else{
	this.middlecard = true;
	 this.thirdcard = true;
	}
}


}
