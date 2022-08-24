import { Component, OnInit } from '@angular/core';
// import './../../../assets/js/smtp.js';
 let Email: any;
// import ‘./../../../assets/js/smtp.js’;
declare const $: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $('#desktop').fadeIn(1000)
    $('#heroSvgImgMob').hide();
    $('#heroSvgImgWeb').hide();

    const widthScreen = $(window).width();
    if (widthScreen > 800) {
      $('.imgsection').hover(
        function () {
          $('.imgsection').css('transform', 'scale(1.3)');
          $('.imgsection').css('transition', '.5s');
          $('#prode').show();
          $('.imgsection').css('border-radius', '9px');


          $('.imgsection').css('width', '38rem');
          $('#prode').css('top', '10px');
          $('#prode').css('left', '14rem');
          $('#prode').css('width', '22rem');

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
    }

    if (widthScreen < 900) {
      $('#heroSvgImgMob').show();
      // $('.profileSec').css('height', '700px');
      // $('.cardbody1').css('border-bottom', '1px solid grey')
      // $('.cardbody2').css('border-bottom', '1px solid grey')

    } else {
      $('#heroSvgImgWeb').show();
      $('.cardbody1').css('border-right', '1px solid grey')
      $('.cardbody2').css('border-right', '1px solid grey')
    }

  }
  email() {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'udith.vivekjha0151@gmail.com',
      Password: 'C4EDC76AF01DE49850CAFF908C8EAD3369EE',
      To: 'udith.vivekjha0151@gmail.com',
      From: 'udith.vivekranjan9431372083@gmai.com',
      Subject: 'test',
      Body: 'hellloooooo'
    }).then((message: any) => { alert(message); });
  }
}
