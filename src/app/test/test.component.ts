import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { ScrollTrigger } from 'gsap/all';
// import { ScrollSmoother } from 'gsap';
// import {  HostListener} from '@angular/core';
declare const $ : any;


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    // this.scrolling();

    // <script src='https://code.jquery.com/jquery-1.11.1.min.js'></script>
   
   
   
  }
  ss(){
    var initScrollTop = $(window).scrollTop();
    $("#parallax1").css({'background-position-y' : (initScrollTop/75)+'%'});
    $(window).scroll(function() {
    
      // Find the new scroll top.
      var scrollTop = $(window).scrollTop();
      
      // Set the new background position.
      $("#parallax1").css({'background-position-y' : (scrollTop/75)+'%'});
      // $(".content").css({'background-position-y' : (scrollTop/75)+'%'});
      
    });
  }
  scrolling(){
    const parallax =$("#header") ;
    window.addEventListener("scroll",function(){
      let offset=window.pageYOffset;
      console.log(offset);
      $("#header").css({
        "background-position-y": (-parallax/20)
      })
      $("#headerc").css({
        "top": (-parallax/5),
        "bottom": (-parallax/5)
      })
      // parallax.style.backgroundPositionY=offset* 0.7 + "px";
      // $(".section1").css('backgroundPositionY', offset* 0.7 + "px");
    })
  }

  
  
  
}


