import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/service/s-habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreH: string = '';
  porcentaje: number = 0;

  constructor(private sHabilidad: SHabilidadService, private router: Router) { }

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
