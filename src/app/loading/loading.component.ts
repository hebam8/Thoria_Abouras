import { Component, OnInit, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})


export class LoadingComponent implements OnInit{
  constructor(private _Renderer2:Renderer2){}
  loader:boolean =true;

ngOnInit():void{
setTimeout(()=>{
  this.loader=false;
},3000);


if (this.loader == true){
  this._Renderer2.addClass(document.body, 'no-scroll')
}
else {
  this._Renderer2.removeClass(document.body , 'no-scroll')
}
}




}
