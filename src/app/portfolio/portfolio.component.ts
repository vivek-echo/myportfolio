import { Component, OnInit } from '@angular/core';
declare const $ : any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $('#heroSvgImgMob').hide();
    $('#heroSvgImgWeb').hide();

    const widthScreen = $(window).width();
    $('.imgsection').hover(
      function () {
        $('.imgsection').css('transform', 'scale(1.3)');
        $('.imgsection').css('transition', '.5s');
        $('#prode').show();
        $('.imgsection').css('border-radius', '9px');
        const scrWidth =parseInt( $('.section1').css('width'));
// alert(scrWidth);
        if(widthScreen > 800){
          $('.imgsection').css('width', '38rem');
          $('#prode').css('top', '10px');
          $('#prode').css('left', '14rem');
          $('#prode').css('width', '22rem');
        }
        // else{
        //   $('.imgsection').css('width', '16rem');
        //   $('.imgsection').css('height', '27rem');
        //   // $('#prode').css('left', '1rem');
        // }

      },
      function () {
        $('.imgsection').css('transform', 'scale(1)');
        $('.imgsection').css('width', '13rem');
        $('.imgsection').css('height', '13rem');
        $('.imgsection').css('border-radius', '50%');
        $('.imgsection').css('transition', '.5s');
        $('#prode').hide();
      }
    );
    if(widthScreen < 900){
      $('#heroSvgImgMob').show();
      $('.profileSec').css('height','700px');
      $('.cardbody1').css('border-bottom','1px solid grey')
      $('.cardbody2').css('border-bottom','1px solid grey')

    }else
    {
      $('#heroSvgImgWeb').show();
      $('.cardbody1').css('border-right','1px solid grey')
      $('.cardbody2').css('border-right','1px solid grey')
    }

  }

}
