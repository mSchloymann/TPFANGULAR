import { Component, OnInit, Input, inject } from '@angular/core';
import { ApiLegoService } from '../services/api-lego.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Lego } from '../types/types';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  route: ActivatedRoute = inject(ActivatedRoute); 
  public lego$!: Observable<Lego>
  private api: ApiLegoService= inject(ApiLegoService)
  @Input('id') legoId!: string 
  ngOnInit(): void{
    this.lego$ = this.api.getOne(this.legoId);
  }
}

