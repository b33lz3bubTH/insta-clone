import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostStorage } from 'src/services/post-storage.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  @ViewChild('f', {static:false}) loginForm: NgForm;
  @ViewChild('imgPreview', {static:false}) imgPreview: ElementRef;
  imageInput = null;
  constructor( private postServObj: PostStorage) { }

  ngOnInit(): void {
  }

  fileUplaoded: File;

  updateFileName(event, inputObj1: HTMLInputElement, inputObj2: HTMLElement){
    let name = inputObj1.value.split("\\");
    inputObj2.innerText = name[name.length-1];

    this.fileUplaoded = event.target.files[0];

    let reader = new FileReader();

    reader.onload = (e: any) => {
        this.imageInput = e.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
    
  }

  addAPost(event){ // not taking the even from here will be nice. must be taken care of later.
    let args = {
      // "file": event.target.elements.customFile.files[0],
      "file": this.fileUplaoded,
      "postTitle": this.loginForm.value.postTitle,
      "postDesc": this.loginForm.value.postDesc
    }
    
    this.postServObj.postTheDamnThing(args).subscribe(res=>{
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
