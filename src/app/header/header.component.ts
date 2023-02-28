import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  linkedin: string = "https://www.linkedin.com/in/facundo-choque/";
  github: string = "https://github.com/Facun3";

  constructor() { }

  ngOnInit(): void {
  }

}
