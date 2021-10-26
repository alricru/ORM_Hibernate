import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-create-asignaturas',
  templateUrl: './create-asignaturas.page.html',
  styleUrls: ['./create-asignaturas.page.scss'],
})
export class CreateAsignaturasPage implements OnInit {

  asignaturaForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private AsignaturasService: AsignaturasService
  ) {this.asignaturaForm = this.formBuilder.group({
    nombre: [''],
    horas: [''],
    aula: [''],
  })
    
   }

  ngOnInit() {
  }

  onSubmit(){
    if (!this.asignaturaForm.valid) {
      return false;
    } else {
      this.AsignaturasService.createAsignaturas(this.asignaturaForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.asignaturaForm.reset();
            this.router.navigate(['/listAsignaturas']);
          })
        });
    }
  }
}
