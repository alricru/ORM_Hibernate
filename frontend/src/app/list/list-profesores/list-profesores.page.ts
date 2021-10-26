import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-profesores',
  templateUrl: './list-profesores.page.html',
  styleUrls: ['./list-profesores.page.scss'],
})
export class ListProfesoresPage implements OnInit {

  Profesores: any = [];

  constructor(private ProfesoresService: ProfesoresService, private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.ProfesoresService.getProfesores().subscribe((response) => {
      this.Profesores = response;
    })
  }
  removeProfesor(profesor, i) {
    if (window.confirm('Are you sure')) {
      this.ProfesoresService.deleteProfesores(profesor.idprofesores)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Profesor deleted!')
        }
      )
    }
  }
}
