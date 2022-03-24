import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-talks',
  templateUrl:"./talks.component.html" ,
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {
  // talks: Array<any> = [
  //   {title: "Tarea", date: new Date()},
  //   {title: "Tarea", date: new Date()},
  //   {title: "Tarea", date: new Date()}
  // ]

  talks: any;
  constructor(private service: TalkService) { 
    
  }

  ngOnInit(): void {
    this.service.getPost().subscribe(data => {
      this.talks = data
      
    })
  }

  log($event: any){
    console.log("Evento: "+$event)
  }
  
}
