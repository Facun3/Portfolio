import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  linkedin: string = "https://www.linkedin.com/in/facundo-choque/";
  github:   string = "https://github.com/Facun3"; 
  resume:   string = "https://drive.google.com/file/d/1U7Mt8139ye09Lx37Oy0xLS_AGeL4iQRH/view?usp=share_link";
  constructor() { }

  ngOnInit(): void {
  }

}
