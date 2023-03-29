import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreH: string;
  porcentaje: number;

  constructor(private sHabilidad: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Habilidad(this.nombreH, this.porcentaje);
    this.sHabilidad.save(expe).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
