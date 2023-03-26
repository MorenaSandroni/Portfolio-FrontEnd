import { Component } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  mydata:any;
  constructor (private portfolioData: ProjectDataService ){ }
  
  ngOnInit(): void {
      this.portfolioData.getdataproject().subscribe(
        data => {
          this.mydata = data;
        });
      }

}
