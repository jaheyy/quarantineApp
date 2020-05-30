import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {

  }

  // callHelp() {
  //   console.log('calling..');
  //   this.callNumber.callNumber("724253378", false)
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  // }

  callHelp() {
    window.open(`tel:724253378`, '_system');
  }
}
