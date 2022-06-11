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
    
    
    $("#heading1").show(1500);

    $('.imgsection').hide();
    $('.imgsection').animate(
      {
        left: '200px',
        top: '200px',
        width: '11.5rem',
        height: '11.5rem',
      },
      1500
    );

 
    $('.imgsection').hover(
      function () {
        $('.imgsection').css('transform', 'scale(1.3)');
        $('.imgsection').css('transition', '.5s');
        $('.imgsection').css('width', '38rem');
        // $('.imgsection').css('height', '13rem');
        $('#prode').show();
        $('.imgsection').css('border-radius', '9px');
      },
      function () {
        $('.imgsection').css('transform', 'scale(1)');
        $('.imgsection').css('width', '11.5rem');
        $('.imgsection').css('border-radius', '50%');
        $('.imgsection').css('transition', '.5s');
        $('#prode').hide();
      }
    );

    $(".imgsection").show(1000);
    $(".imgsection").fadeIn(1000);

    $(".avatar").fadeIn(1000);

  }
  

}
