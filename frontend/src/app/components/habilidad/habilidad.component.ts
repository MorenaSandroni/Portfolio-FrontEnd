import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  hab: Habilidad[] = [];

  constructor(private sHabilidad: HabilidadService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.sHabilidad.lista().subscribe(data => { this.hab = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar el skill");
        }
      )
    }
  }
}