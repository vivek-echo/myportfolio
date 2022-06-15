import { Component, OnDestroy, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare const $ : any;


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor() {}
 
scrWidth:any;

  ngOnInit(): void {
    
    

    $('.imgsection').hide();
    $('.imgsection').animate(
      {
        
        top: '200px',
        width: '11.5rem',
        height: '11.5rem',
      },
      500
    );
    
   
   
    $('.imgsection').hover(
      function () {
        $('.imgsection').css('transform', 'scale(1.3)');
        $('.imgsection').css('transition', '.5s');
        
        $('#prode').show();
        $('.imgsection').css('border-radius', '9px');
        const scrWidth =parseInt( $('.section1').css('width'));
// alert(scrWidth);
        if(scrWidth > 800){
          $('.imgsection').css('width', '38rem');
          $('#prode').css('bottom', '0');
          $('#prode').css('left', '14rem');
          $('#prode').css('width', '22rem');
        }else{
          $('.imgsection').css('width', '16rem');
          $('.imgsection').css('height', '27rem');
          // $('#prode').css('left', '1rem');
        }
        
      },
      function () {
        $('.imgsection').css('transform', 'scale(1)');
        $('.imgsection').css('width', '11.5rem');
        $('.imgsection').css('height', '11.5rem');
        $('.imgsection').css('border-radius', '50%');
        $('.imgsection').css('transition', '.5s');
        $('#prode').hide();
      }
    );

    $(".imgsection").show(1000);
    $(".imgsection").fadeIn(1000);

    $(".avatar").fadeIn(1000);


    

  }

  clickAbout(){
    $('html, body').animate({
      scrollTop: $(".section2").offset().top
  }, 200);
  }
  

}
