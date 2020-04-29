import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  updateFileName(inputObj1: HTMLInputElement, inputObj2: HTMLElement){
    let name = inputObj1.value.split("\\");
    inputObj2.innerText = name[name.length-1];
  }
}
