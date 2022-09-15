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
  constructor() {

  }

  ngOnInit(): void {


    $('.fullbody').fadeIn(1500);

    $('#heroSvgImgWeb').hide();
    $(".linkdenIcon").hover(function () {
      $(".linkdenIcon").css("background-color", "white");
      $(".linkdenIcon").css("transition", ".5s ease");
      $(".bi-linkedin").css("color", "#7330cb");
    }, function () {
      $(".linkdenIcon").css("background-color", "#7330cb");
      $(".bi-linkedin").css("color", "white");
    });
    $(".githubIcon").hover(function () {
      $(".githubIcon").css("background-color", "white");
      $(".githubIcon").css("transition", ".5s ease");
      $(".bi-github").css("color", "#7330cb");
    }, function () {
      $(".githubIcon").css("background-color", "#7330cb");
      $(".bi-github").css("color", "white");
    });

    $(".instaIcon").hover(function () {
      $(".instaIcon").css("background-color", "white");
      $(".instaIcon").css("transition", ".5s ease");
      $(".bi-instagram").css("color", "#7330cb");
    }, function () {
      $(".instaIcon").css("background-color", "#7330cb");
      $(".bi-instagram").css("color", "white");
    });

    const widthScreen = $(window).width();
    if (widthScreen > 800) {
      $('.services').css('margin-top', '-270px')
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

    if (widthScreen > 900) {
      $('.cardbody1').css('border-right', '1px solid grey')
      $('.cardbody2').css('border-right', '1px solid grey')
    }
    this.scroll(widthScreen);
  }

  scroll(e: any) {
    const widthScreen = e;
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 300) {
        $('#heroSvgImgWeb').fadeIn(1800);
      }
      if (scrollTop > 700) {
        $('.profileSec').fadeIn(1000);
        $('.services').fadeIn(1000);
      }
      // if (scrollTop > 1900) {
      //   $('.footer').fadeIn(1000);
      // }

    });

  }

}
