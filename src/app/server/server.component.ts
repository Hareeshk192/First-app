import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation:ViewEncapsulation.None
  
})
export class ServerComponent implements OnInit {
   constructor() { 
    
   }
  ngOnInit(): void {
  }
  
  title = 'first-app';
  name:string;
  content:string;
  names= [{}];
  contents=[{}];
  sname(servname:any)
  {
     this.name= servname;
  }
  scontent(servcontent:any)
  {
      this.content= servcontent;
  }
  showname()
  {
    this.names.push(
      {type:'servname',
        nmm:this.name,
       cnt:this.content});
  }
  showcontent()
  {
    this.names.push(
      {type:'servcontent',
      nmm:this.name,
      cnt:this.content});
  }

  
  

}
