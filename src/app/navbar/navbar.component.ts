import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  loader:boolean =true;

ngOnInit():void{
setTimeout(()=>{
  this.loader=false;
},3000);
}
}
