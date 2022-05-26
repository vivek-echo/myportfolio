import { Component, OnDestroy, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

    
    // $('#proimage').hover(
    //   function () {
    //     var div = $('.imgsection');

    //     div.animate({ width: '700px' }, '1500');
    //     div.animate({ height: '250px' }, '1500');
    //     div.css('background-color', 'red');
    //     div.css('border-radius', '10px 10px 10px 10px');
    //     div.css('border', '2px solid black');
    //   },
    //   function () {
    //     var div = $('.imgsection');
    //     div.css('border-radius', '10%');

    //     div.css('background-color', 'red');

    //     div.css('border', '5px solid black');
    //     div.animate({ height: '180px' }, '1500');
    //     div.animate({ width: '180px' }, '1500');
    //     div.css('border-radius', '100px');
    //   }
    // );

   
  
    $("#heading1").show(1500);

    $(".imgsection").hide();
    $(".imgsection").animate({
      left: '200px',
      top: '200px',
      width: '11.5rem',
      height: '11.5rem'
    },1500);
    $(".imgsection").show(1000);
    $(".imgsection").fadeIn(1000);

    $(".avatar").fadeIn(1000);

  }
  

}
