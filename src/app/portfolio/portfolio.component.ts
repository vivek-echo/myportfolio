import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  particlesJS: any;
  constructor() { }

  ngOnInit(): void {
    this.particlesJS.load('particles-js', 'particles.json', null);
  }

}
