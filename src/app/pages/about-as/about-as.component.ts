import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
//import AOS from 'aos';
@Component({
  selector: 'app-about-as',
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.scss']
})
export class AboutAsComponent {
  divbox:any;
  showWarning:boolean =false
  constructor(public route:Router) {}
 
  ngOnInit() {
    // AOS.init({disable: 'mobile'});//AOS - 2
    // AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
  getData(e: any) {
     this.divbox = !this.divbox ;
     return this.setData(e);
    }
  
  
    setData(e: any){
     
    }
  
  
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      margin: 24,
      navSpeed: 700,
      navText: [' < ', ' > '],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        1366:{
          items: 4
        }
      },
      nav: true
    }
  
  navigate(){
    console.log('hi')
  }
  onpropertyClick(data: any) {
    
      
        this.route.navigate(['view-current-project',{ queryParams:data}])
      }
      onAppClick(){
        this.showWarning= true
      }
  }

