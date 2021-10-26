import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-create-profesores',
  templateUrl: './create-profesores.page.html',
  styleUrls: ['./create-profesores.page.scss'],
})
export class CreateProfesoresPage implements OnInit {

  profesorForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private ProfesoresService: ProfesoresService
  ) {this.profesorForm = this.formBuilder.group({
    nombre: [''],
    apellido: ['']
  })
    
   }

  ngOnInit() {
  }

  onSubmit(){
    if (!this.profesorForm.valid) {
      return false;
    } else {
      this.ProfesoresService.createProfesor(this.profesorForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.profesorForm.reset();
            this.router.navigate(['/listProfesores']);
          })
        });
    }
  }
}
