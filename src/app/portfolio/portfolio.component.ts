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
    if(widthScreen < 400){
      $('#heroSvgImgMob').show();
      $('.profileSec').css('height','700px');
      $('.cardbody1').css('border-bottom','1px solid grey')
      $('.cardbody2').css('border-bottom','1px solid grey')

    }else
    {
      $('#heroSvgImgWeb').show();
      $('.cardbody1').css('border-right','2px solid grey')
      $('.cardbody2').css('border-right','2px solid grey')
    }

  }

}
