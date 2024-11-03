import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  loader:boolean =true;

  ngOnInit():void{
  setTimeout(()=>{
    this.loader=false;
  },3000);
  }
}
