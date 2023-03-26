import { Component } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  mydata:any;
  constructor (private portfolioData: ProjectDataService ){ }
  
  ngOnInit(): void {
      this.portfolioData.getdataproject().subscribe(
        data => {
          this.mydata = data;
        });
      }
}
