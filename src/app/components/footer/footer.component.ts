import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
constructor(public route:Router){

}
ngOnInit(): void {
  
}
onpropertyClick(data: any) {
  
      this.route.navigate(['view-current-project',{ queryParams:data}])
    }
}
