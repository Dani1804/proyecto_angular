import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent implements OnInit {


  constructor( private router: Router) { 
    setTimeout(()=> {
      this.router.navigateByUrl('login')},3000);
    }
  

  ngOnInit(): void {}

}
