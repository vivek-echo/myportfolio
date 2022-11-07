import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.position-relative').fadeIn(1000);
  }

}
