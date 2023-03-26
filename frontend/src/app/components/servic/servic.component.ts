import { Component } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-servic',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent {
  mydata:any;
  constructor (private portfolioData: ProjectDataService ){ }
  
  ngOnInit(): void {
      this.portfolioData.getdataproject().subscribe(
        data => {
          this.mydata = data;
        });
      }


}
