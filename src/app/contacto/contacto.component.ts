import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  legoForm = new FormGroup ({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
  });
  get nommbre(){
    return this.legoForm.get('nombre') as FormControl
  }
  get apellido(){
    return this.legoForm.get('apellido') as FormControl
  }
  get telefono(){
    return this.legoForm.get('telefono') as FormControl
  }
  get email(){
    return this.legoForm.get('email') as FormControl
  }
  get mensaje(){
    return this.legoForm.get('mensaje') as FormControl
  }

  handleSubmit(){
    if (this.legoForm.invalid) return;
    const newcontacto = {
      nombre: this.nommbre.value,
      apellido: this.apellido.value,
      telefono: this.apellido.value,
      email: this.email.value,
      mensaje: this.mensaje.value,
    }
  }
}