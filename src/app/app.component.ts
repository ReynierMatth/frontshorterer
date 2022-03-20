import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MattPocUrlReducer';
  urlForm?: FormControl
  urlRegEx =
    '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  result = '';

  constructor() {
  }


  ngOnInit(): void {
    this.urlForm = new FormControl('',{validators: [Validators.required, Validators.pattern(this.urlRegEx)],
    updateOn: "blur"});

  }

  send() {
    console.log("submit")
    if(this.urlForm?.value != null){
      console.log(this.urlForm.value);

    }
  }
}
