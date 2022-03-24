import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk: any

  @Output() talkClicked: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.talk)
    this.talkClicked.emit(this.talk)
  }

  
  
}
