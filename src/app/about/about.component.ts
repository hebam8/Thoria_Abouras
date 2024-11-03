import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  loader:boolean =true;

  ngOnInit():void{
  setTimeout(()=>{
    this.loader=false;
  },3000);
  }
}
