import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl:"./talks.component.html" ,
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {
  talks: Array<any> = [
    {title: "Tarea"},
    {title: "Tarea"},
    {title: "Tarea"}
  ]
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  
}
