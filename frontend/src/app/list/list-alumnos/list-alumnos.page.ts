import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.page.html',
  styleUrls: ['./list-alumnos.page.scss'],
})
export class ListAlumnosPage implements OnInit {

  Alumnos: any = []

  constructor(private AlumnosService: AlumnosService,private router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.AlumnosService.getAlumnos().subscribe((response) => {
      this.Alumnos = response;
    })
  }
  removeAlumno(alumno, i) {
    if (window.confirm('Are you sure')) {
      this.AlumnosService.deleteAlumnos(alumno.idalumnos)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Alumno deleted!')
        }
      )
    }
  }

}
