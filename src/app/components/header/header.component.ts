import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  queryTerm:string | undefined;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  getqueryTerm(evt: any){
    evt.preventDefault;
    this.route.navigate(["/movies"], {queryParams:{q: this.queryTerm}});
  }

}
