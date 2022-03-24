import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-talk',
  templateUrl: './new-talk.component.html',
  styleUrls: ['./new-talk.component.css']
})
export class NewTalkComponent implements OnInit {

  userForm 
  descriptionControl: FormControl

  constructor(private fb: FormBuilder) { 
    this.descriptionControl = new FormControl("")

    this.userForm = this.fb.group({
      title: "",
      desc: this.descriptionControl
    })

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.descriptionControl.value)
    
  }

}
