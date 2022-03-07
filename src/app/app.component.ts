import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlService} from "./api/url.service";
import {Url} from "./model/url";

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

  constructor(private urlService: UrlService) {
  }


  ngOnInit(): void {
    this.urlForm = new FormControl('',{validators: [Validators.required, Validators.pattern(this.urlRegEx)],
    updateOn: "blur"});

  }

  send() {
    console.log("submit")
    if(this.urlForm?.value != null){
      console.log(this.urlForm.value);
      let urlList: string[] = [this.urlForm.value];
      let urlToAdd: Url = {name:this.urlForm.value};
      this.urlService.addUrl(urlToAdd, 'body', false );

    }
  }
}
