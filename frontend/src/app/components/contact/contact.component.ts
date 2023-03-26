import { Component } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mydata:any;
  constructor (private portfolioData: ProjectDataService ){ }
  
  ngOnInit(): void {
      this.portfolioData.getdataproject().subscribe(
        data => {
          this.mydata = data;
        });
      }
}
