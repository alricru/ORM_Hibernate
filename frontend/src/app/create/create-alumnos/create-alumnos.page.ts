import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-create-alumnos',
  templateUrl: './create-alumnos.page.html',
  styleUrls: ['./create-alumnos.page.scss'],
})
export class CreateAlumnosPage implements OnInit {

  alumnoForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private AlumnosService: AlumnosService
  ) {this.alumnoForm = this.formBuilder.group({
    nombre: [''],
    apellido: ['']
  })
    
   }

  ngOnInit() {
  }

  onSubmit(){
    if (!this.alumnoForm.valid) {
      return false;
    } else {
      this.AlumnosService.createAlumno(this.alumnoForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.alumnoForm.reset();
            this.router.navigate(['/listAlumnos']);
          })
        });
    }
  }

}
