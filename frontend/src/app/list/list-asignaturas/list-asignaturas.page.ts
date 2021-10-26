import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-list-asignaturas',
  templateUrl: './list-asignaturas.page.html',
  styleUrls: ['./list-asignaturas.page.scss'],
})
export class ListAsignaturasPage implements OnInit {

  Asignaturas: any = [];

  constructor(private AsignaturasService: AsignaturasService, private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.AsignaturasService.getAsignaturas().subscribe((response) => {
      this.Asignaturas = response;
    })
  }
  removeAsignatura(asignatura, i) {
    if (window.confirm('Are you sure')) {
      this.AsignaturasService.deleteAsignaturas(asignatura.idasignatura)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Asignatura deleted!')
        }
      )
    }
  }
}

