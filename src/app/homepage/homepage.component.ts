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
    
    // $('.avatar').hover(
    //   function () {
    //     var div = $('.imgsection');

    //     $('.imgsection').css('overflow', 'visible');
    //     div.animate({ width: '35rem' }, '1500');
    //     div.animate({ height: '17rem' }, '1500');
    //     div.css('background-color', '#8942a8');
    //     div.css('border-radius', '10px 10px 10px 10px');
    //     div.css('border', '2px solid #eeaffd');
    //     $('.avatar').css('position', 'relative');
    //     $('.avatar').css('bottom', '44px');
    //     $('.avatar').css('left', '-12%');
    //     $('.avatar').css('width', '21rem');
    //     $('.avatar').css('height', 'auto');
    //   },
    //   function () {
    //     var div = $('.imgsection');
    //     div.css('border-radius', '20%');

    //     div.css('background-color', '#8942a8');

    //     div.css('border', '3px solid #eeaffd');
    //     div.animate({ height: '11.5rem' }, '1500');
    //     div.animate({ width: '11.5rem' }, '1500');
    //     $('.imgsection').css('overflow', 'hidden');
    //     $('.avatar').css('position', 'relative');
    //     $('.avatar').css('bottom', '0');
    //     $('.avatar').css('left', '0');
    //     $('.avatar').css('width', '12rem');
    //   }
    // );

   
  
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
        $('.imgsection').css('transform', 'scale(1.2)');
        $('.imgsection').css('transition', '.5s');
      },
      function () {
        $('.imgsection').css('transform', 'scale(1)');
        $('.imgsection').css('transition', '.5s');
      }
    );

    // $('.avatar').mouseover(function () {
    //   $('.imgsection').animate(
    //     {
    //       width: '35rem',
    //       height: '17rem',
    //     },
    //     1500
    //   );
    //   $('.imgsection').css('border-radius', '30px');
    // });
    
    // $('.avatar').mouseout(function () {
    //   $('.imgsection').animate(
    //     {
    //       width: '11.5rem',
    //       height: '11.5rem',
    //     },
    //     1
    //   );
    //   $('.imgsection').css('border-radius', '50%');
    // }); 


    $(".imgsection").show(1000);
    $(".imgsection").fadeIn(1000);

    $(".avatar").fadeIn(1000);

  }
  

}
