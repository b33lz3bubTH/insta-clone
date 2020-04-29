import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  @ViewChild('f', {static:false}) loginForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  updateFileName(inputObj1: HTMLInputElement, inputObj2: HTMLElement){
    let name = inputObj1.value.split("\\");
    inputObj2.innerText = name[name.length-1];
  }

  addAPost(){
    console.log(this.loginForm.value);
  }
}
