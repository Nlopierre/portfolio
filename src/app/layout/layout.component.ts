import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})



export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prevScrollpos = window.pageYOffset;
  @HostListener('window:scroll', ['$event'])
  OnScroll($event){
    var currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      document.getElementById("page-header").style.top = "0";
    } else {
      document.getElementById("page-header").style.top = "-50px";
    }
    this.prevScrollpos = currentScrollPos;
  }

}
